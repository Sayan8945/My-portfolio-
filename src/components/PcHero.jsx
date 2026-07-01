import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/scene.gltf");
  return <primitive object={scene} {...props} />;
}

export default function ModelViewer() {


  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Canvas camera={{ position: [0,2,5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[9, 5, 5]} intensity={5} />
        <Suspense fallback={null}>
          <Model scale={1} position={[0.5, 0.3, 0]} />
        </Suspense>
        <OrbitControls  enableZoom={false} target={[0,1,0]} />
      </Canvas>
    </div>
  );
}
