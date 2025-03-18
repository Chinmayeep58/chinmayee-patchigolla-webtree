import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Soldier from "./Soldier"; 

export default function App() {
  return (
    <Canvas camera={{ position: [0, 2, 8] }}
    style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Soldier position={[-3, 0, 0]} animation="Idle" />
      <Soldier position={[0, 0, 0]} animation="Walk" />
      <Soldier position={[3, 0, 0]} animation="Run" />

      <OrbitControls />
    </Canvas>
  );
}
