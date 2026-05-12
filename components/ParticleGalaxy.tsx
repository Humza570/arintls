"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleGalaxy() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;

    // ── SCENE ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── MOUSE ──
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── GALAXY PARAMS ──
    const PARAMS = {
      count: 7000,
      size: 0.014,
      radius: 5,
      branches: 4,
      spin: 1.2,
      randomness: 0.35,
      randomnessPower: 2.8,
      colorInner: new THREE.Color("#C9A84C"), // gold
      colorOuter: new THREE.Color("#1B1B3A"), // deep navy
    };

    // ── GALAXY GEOMETRY ──
    const positions = new Float32Array(PARAMS.count * 3);
    const colors = new Float32Array(PARAMS.count * 3);
    const scales = new Float32Array(PARAMS.count);

    for (let i = 0; i < PARAMS.count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * PARAMS.radius;
      const branchAngle =
        ((i % PARAMS.branches) / PARAMS.branches) * Math.PI * 2;
      const spinAngle = radius * PARAMS.spin;

      const rx =
        Math.pow(Math.random(), PARAMS.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        PARAMS.randomness *
        radius;
      const ry =
        Math.pow(Math.random(), PARAMS.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        PARAMS.randomness *
        radius *
        0.3;
      const rz =
        Math.pow(Math.random(), PARAMS.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        PARAMS.randomness *
        radius;

      positions[i3]     = Math.cos(branchAngle + spinAngle) * radius + rx;
      positions[i3 + 1] = ry;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + rz;

      // color: inner=gold, outer=navy
      const mixed = new THREE.Color();
      mixed.lerpColors(PARAMS.colorInner, PARAMS.colorOuter, radius / PARAMS.radius);
      // add slight hue variation
      mixed.offsetHSL(0, 0, (Math.random() - 0.5) * 0.15);

      colors[i3]     = mixed.r;
      colors[i3 + 1] = mixed.g;
      colors[i3 + 2] = mixed.b;

      scales[i] = Math.random();
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color",    new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("aScale",   new THREE.BufferAttribute(scales, 1));

    // ── SHADER MATERIAL ──
    const material = new THREE.ShaderMaterial({
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      transparent: true,
      uniforms: {
        uTime:       { value: 0 },
        uSize:       { value: PARAMS.size * renderer.getPixelRatio() * 60 },
        uOpacity:    { value: 0.75 },
      },
      vertexShader: `
        attribute float aScale;
        uniform float uSize;
        uniform float uTime;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = uSize * aScale * (1.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        varying vec3 vColor;
        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          if (d > 0.5) discard;
          float alpha = 1.0 - smoothstep(0.0, 0.5, d);
          gl_FragColor = vec4(vColor, alpha * uOpacity);
        }
      `,
    });

    const galaxy = new THREE.Points(geometry, material);
    // tilt the galaxy plane slightly
    galaxy.rotation.x = Math.PI * 0.12;
    scene.add(galaxy);

    // ── SCATTERED STARS (background layer) ──
    const starCount = 2500;
    const starPos = new Float32Array(starCount * 3);
    const starCol = new Float32Array(starCount * 3);
    const starSc  = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const r = 5 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);

      starPos[i3]     = r * Math.sin(phi) * Math.cos(theta);
      starPos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i3 + 2] = r * Math.cos(phi);

      // mostly white/cream stars, occasionally gold tint
      const tint = Math.random();
      if (tint > 0.85) {
        // gold star
        starCol[i3] = 0.79; starCol[i3+1] = 0.66; starCol[i3+2] = 0.30;
      } else {
        // cream/white
        const b = 0.7 + Math.random() * 0.3;
        starCol[i3] = b; starCol[i3+1] = b * 0.97; starCol[i3+2] = b * 0.93;
      }
      starSc[i] = 0.2 + Math.random() * 0.8;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute("color",    new THREE.BufferAttribute(starCol, 3));
    starGeo.setAttribute("aScale",   new THREE.BufferAttribute(starSc,  1));

    const starMat = new THREE.ShaderMaterial({
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      transparent: true,
      uniforms: {
        uSize:    { value: renderer.getPixelRatio() * 28 },
        uOpacity: { value: 0.55 },
        uTime:    { value: 0 },
      },
      vertexShader: `
        attribute float aScale;
        uniform float uSize;
        uniform float uTime;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = uSize * aScale * (1.0 / -mvPos.z);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        varying vec3 vColor;
        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          if (d > 0.5) discard;
          float a = 1.0 - smoothstep(0.0, 0.5, d);
          gl_FragColor = vec4(vColor, a * uOpacity);
        }
      `,
    });

    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // ── GLOW NEBULA (additive blended soft sphere) ──
    const nebulaGeo = new THREE.SphereGeometry(1.5, 32, 32);
    const nebulaMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#C9A84C"),
      transparent: true,
      opacity: 0.012,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const nebula = new THREE.Mesh(nebulaGeo, nebulaMat);
    nebula.position.set(0, 0, 0);
    scene.add(nebula);

    // second nebula — cooler blue tone
    const nebula2 = new THREE.Mesh(
      new THREE.SphereGeometry(2.2, 32, 32),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#1B4FD8"),
        transparent: true,
        opacity: 0.008,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    nebula2.position.set(-1, 0.5, -1);
    scene.add(nebula2);

    // ── RESIZE ──
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", onResize);

    // ── SCROLL parallax ──
    let scrollY = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", onScroll);

    // ── ANIMATE ──
    let frameId: number;
    const clock = new THREE.Clock();

    const tick = () => {
      frameId = requestAnimationFrame(tick);
      const elapsed = clock.getElapsedTime();

      // slow galaxy rotation
      galaxy.rotation.y = elapsed * 0.04;

      // stars counter-rotate very slowly
      stars.rotation.y = -elapsed * 0.008;
      stars.rotation.x =  elapsed * 0.003;

      // mouse parallax — very subtle
      const targetX = mouse.x * 0.08;
      const targetY = mouse.y * 0.05;
      camera.position.x += (targetX - camera.position.x) * 0.02;
      camera.position.y += (targetY - camera.position.y) * 0.02;

      // scroll-based camera drift
      const scrollFactor = scrollY * 0.0008;
      camera.position.z = 4 + scrollFactor * 0.5;
      galaxy.rotation.x = Math.PI * 0.12 + scrollFactor * 0.15;

      camera.lookAt(scene.position);

      // gentle opacity pulse on nebula
      nebulaMat.opacity = 0.012 + Math.sin(elapsed * 0.4) * 0.004;

      // update uniforms
      (material.uniforms.uTime as { value: number }).value = elapsed;
      (starMat.uniforms.uTime as { value: number }).value  = elapsed;

      renderer.render(scene, camera);
    };
    tick();

    // ── CLEANUP ──
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      starGeo.dispose();
      starMat.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
