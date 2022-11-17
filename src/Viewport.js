import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Viewport({ children, ...props }) {
  return (
    <div {...props}>
      <Canvas>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        {children}
      </Canvas>
    </div>
  );
}

export default Viewport;
