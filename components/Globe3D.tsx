"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Globe3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;
    const W = mount.clientWidth, H = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 3.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── GLOBE ──
    const globeGeo = new THREE.SphereGeometry(1, 64, 64);

    // Custom shader — dark ocean, bright land dots, glowing edges
    const globeMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime:     { value: 0 },
        uColor1:   { value: new THREE.Color("#0B4F6C") }, // ocean deep
        uColor2:   { value: new THREE.Color("#142338") }, // ocean dark
        uGlow:     { value: new THREE.Color("#B8892A") }, // gold edge
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uGlow;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;

        // Simple noise
        float hash(vec2 p) {
          p = fract(p * vec2(234.34, 435.345));
          p += dot(p, p + 34.23);
          return fract(p.x * p.y);
        }
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f*f*(3.0-2.0*f);
          return mix(
            mix(hash(i), hash(i+vec2(1,0)), f.x),
            mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y
          );
        }

        void main() {
          // Fresnel rim glow
          vec3 viewDir = normalize(cameraPosition - vPosition);
          float fresnel = pow(1.0 - dot(vNormal, viewDir), 3.0);

          // Base ocean gradient
          float lat = vUv.y;
          vec3 ocean = mix(uColor2, uColor1, lat);

          // Land-like noise pattern
          float n = noise(vUv * 8.0);
          float n2 = noise(vUv * 16.0 + 2.3);
          float land = step(0.62, n * 0.6 + n2 * 0.4);

          vec3 landColor = vec3(0.25, 0.45, 0.38);
          vec3 base = mix(ocean, landColor, land * 0.6);

          // City dots — bright points
          float cityNoise = noise(vUv * 32.0 + uTime * 0.02);
          float city = step(0.88, cityNoise) * (1.0 - land * 0.5);
          base += city * vec3(0.8, 0.7, 0.4) * 0.9;

          // Animated pulse on cities
          float pulse = sin(uTime * 2.0 + vUv.x * 20.0) * 0.5 + 0.5;
          base += city * pulse * vec3(0.9, 0.75, 0.4) * 0.3;

          // Rim glow (gold)
          base += fresnel * uGlow * 0.6;

          gl_FragColor = vec4(base, 1.0);
        }
      `,
    });

    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    // ── ATMOSPHERE ──
    const atmoGeo = new THREE.SphereGeometry(1.08, 64, 64);
    const atmoMat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color("#0B4F6C") } },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0,0,1)), 3.0);
          gl_FragColor = vec4(uColor, intensity * 0.7);
        }
      `,
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const atmo = new THREE.Mesh(atmoGeo, atmoMat);
    scene.add(atmo);

    // ── ORBIT RINGS ──
    const makeRing = (radius: number, opacity: number, tilt: number) => {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 128; i++) {
        const a = (i / 128) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color: 0xB8892A, transparent: true, opacity });
      const ring = new THREE.Line(geo, mat);
      ring.rotation.x = tilt;
      scene.add(ring);
      return ring;
    };
    const ring1 = makeRing(1.35, 0.18, Math.PI * 0.12);
    const ring2 = makeRing(1.55, 0.10, -Math.PI * 0.22);
    const ring3 = makeRing(1.75, 0.07, Math.PI * 0.35);

    // ── PARTICLE DOTS around globe ──
    const dotCount = 120;
    const dotPositions = new Float32Array(dotCount * 3);
    const dotSpeeds = new Float32Array(dotCount);
    for (let i = 0; i < dotCount; i++) {
      const r = 1.3 + Math.random() * 0.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      dotPositions[i*3]   = r * Math.sin(phi) * Math.cos(theta);
      dotPositions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      dotPositions[i*3+2] = r * Math.cos(phi);
      dotSpeeds[i] = 0.3 + Math.random() * 0.7;
    }
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", new THREE.BufferAttribute(dotPositions, 3));
    const dotMat = new THREE.PointsMaterial({
      color: 0xB8892A, size: 0.018,
      transparent: true, opacity: 0.6,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const dots = new THREE.Points(dotGeo, dotMat);
    scene.add(dots);

    // ── LIGHT ──
    const ambient = new THREE.AmbientLight(0xffffff, 0.15);
    scene.add(ambient);
    const sun = new THREE.DirectionalLight(0xffd9a0, 1.4);
    sun.position.set(3, 2, 2);
    scene.add(sun);
    const fillLight = new THREE.DirectionalLight(0x4080ff, 0.3);
    fillLight.position.set(-3, -1, -2);
    scene.add(fillLight);

    // ── MOUSE ──
    const mouse = { x: 0, y: 0 };
    const onMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    // ── RESIZE ──
    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ── ANIMATE ──
    let raf: number;
    const clock = new THREE.Clock();
    const targetRot = { x: 0, y: 0 };
    const currentRot = { x: 0, y: 0 };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      // Globe auto-rotation + mouse tilt
      targetRot.x = mouse.y * 0.18;
      targetRot.y = t * 0.12 + mouse.x * 0.25;
      currentRot.x += (targetRot.x - currentRot.x) * 0.03;
      currentRot.y += (targetRot.y - currentRot.y) * 0.015;

      globe.rotation.x = currentRot.x;
      globe.rotation.y = currentRot.y;
      atmo.rotation.copy(globe.rotation);

      // Rings rotate independently
      ring1.rotation.z = t * 0.08;
      ring2.rotation.z = -t * 0.05;
      ring3.rotation.y = t * 0.06;

      // Dots orbit
      dots.rotation.y = t * 0.04;
      dots.rotation.x = Math.sin(t * 0.05) * 0.15;

      // Pulse dot size
      dotMat.size = 0.016 + Math.sin(t * 1.5) * 0.004;

      (globeMat.uniforms.uTime as { value: number }).value = t;

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}
