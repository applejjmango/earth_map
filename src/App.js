import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import "./App.css";

// 지구 컴포넌트 (지구 표면 텍스처 사용)
function Earth() {
  // 텍스처 로드
  const colorMap = useTexture("/textures/earth_daymap.jpg");

  return (
    <mesh>
      {/* 지구 구체 */}
      <sphereGeometry args={[1, 32, 32]} />
      {/* 텍스처 적용 */}
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

function App() {
  return (
    <div className="App">
      <Canvas>
        {/* 카메라 제어 */}
        <OrbitControls enableZoom={true} />

        {/* 우주 배경의 별 */}
        <Stars
          radius={300}
          depth={50}
          count={5000}
          factor={7}
          saturation={0}
          fade={true}
        />

        {/* 조명 */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 3, 5]} intensity={1} />

        {/* 지구 */}
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
