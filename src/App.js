import DebugPlane from "./DebugPlane";
import "./styles.css";
import Viewport from "./Viewport";
import { Suspense } from "react";
import { DepthKitObject } from "./DepthKitObject";

export default function App() {
  return (
    <Viewport
      style={{ backgroundColor: "black", height: "100vh", width: "100vw" }}
    >
      <Suspense fallback={<group />}>
        <DepthKitObject
          loop={true}
          position={[0.25, 1.1, 1.85]}
          scale={[0.001, 0.001, 0.001]}
          videoUrl={"/Chae_Demo_Upres.webm"}
          metaUrl={"/Chae_Demo_Upres.txt"}
          posterUrl={"/Chae_Demo_Upres.png"}
        />
      </Suspense>
      <DebugPlane rotation={[Math.PI / 2, 0, 0]} />
    </Viewport>
  );
}
