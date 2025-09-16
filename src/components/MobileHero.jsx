import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/scene.gltf");
  return <primitive object={scene} {...props} />;
}

export default function MobileModel() {


  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "23rem",
        width: "100%",
        paddingTop :"3rem",
        marginTop: "13rem"
      }}
    >
      <Canvas camera={{ position: [0,2,5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[9, 5, 5]} intensity={7} />
        <Suspense fallback={null}>
          <Model scale={1.2} position={[0.45, 1, 0]} />
        </Suspense>
        <OrbitControls  enableZoom={false} target={[0,1,0]} />
      </Canvas>
    </div>
  );
}
