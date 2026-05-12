"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MiniGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;
    const W = mount.clientWidth, H = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Wireframe globe
    const geo = new THREE.SphereGeometry(1, 24, 24);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xB8892A, wireframe: true,
      transparent: true, opacity: 0.15,
    });
    const wireGlobe = new THREE.Mesh(geo, wireMat);
    scene.add(wireGlobe);

    // Solid inner
    const solidMat = new THREE.MeshBasicMaterial({ color: 0x0B4F6C, transparent: true, opacity: 0.3 });
    const solidGlobe = new THREE.Mesh(new THREE.SphereGeometry(0.97, 32, 32), solidMat);
    scene.add(solidGlobe);

    // Dots on surface
    const dotCount = 60;
    const dPos = new Float32Array(dotCount * 3);
    for (let i = 0; i < dotCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      dPos[i*3]   = Math.sin(phi)*Math.cos(theta);
      dPos[i*3+1] = Math.sin(phi)*Math.sin(theta);
      dPos[i*3+2] = Math.cos(phi);
    }
    const dGeo = new THREE.BufferGeometry();
    dGeo.setAttribute("position", new THREE.BufferAttribute(dPos, 3));
    const dMat = new THREE.PointsMaterial({ color: 0xD4A84B, size: 0.04, transparent: true, opacity: 0.8 });
    scene.add(new THREE.Points(dGeo, dMat));

    const clock = new THREE.Clock();
    let raf: number;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();
      wireGlobe.rotation.y = t * 0.3;
      wireGlobe.rotation.x = Math.sin(t * 0.2) * 0.15;
      solidGlobe.rotation.copy(wireGlobe.rotation);
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}
