import React, { Suspense } from "react";
import Computer from "./Computer";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Main = () => {
  return (
    <div id="Main" className="h-screen px-[20%] py-16 ">
      <div className="flex flex-col justify-center items-center gap-10 mt-10">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="text-6xl">
            Hi, I'm <span className="text-primary">Florjan</span>
          </div>
          <div>
            A software developer with a passion for learning and creating
          </div>
        </div>
        <Canvas style={{ height: "1000px", width: "1500px" }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Computer />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Main;
