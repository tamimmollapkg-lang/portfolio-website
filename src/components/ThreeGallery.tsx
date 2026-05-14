import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Image, Environment, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function GalleryItem({ url, position, index }: { url: string; position: [number, number, number], index: number }) {
  const ref = useRef<THREE.Group>(null!);
  
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position} ref={ref}>
        <Image 
          url={url} 
          scale={[3, 4, 1]} 
          zoom={1}
          transparent
          opacity={0.8}
        />
        <Text
          position={[0, -2.5, 0.1]}
          fontSize={0.25}
          color="white"
          font="https://fonts.gstatic.com/s/outfit/v11/Q_8V7nMpS86R8OghyWjT8Q.woff"
          anchorX="center"
          anchorY="middle"
        >
          PROJECT 0{index + 1}
        </Text>
      </group>
    </Float>
  );
}

function GalleryScene() {
  const images = [
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      
      {images.map((url, i) => (
        <GalleryItem 
          key={url} 
          url={url} 
          index={i}
          position={[i * 5 - 7.5, 0, 0]} 
        />
      ))}
    </>
  );
}

export default function ThreeGallery() {
  return (
    <section className="relative h-screen bg-matte-black py-24">
      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
        <p className="font-accent text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan">Immersive</p>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl lg:text-6xl">3D Gallery</h2>
      </div>
      
      <div className="h-full w-full">
        <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
          <GalleryScene />
        </Canvas>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.5em] text-white/20">
        Interactive Depth Experience
      </div>
    </section>
  );
}
