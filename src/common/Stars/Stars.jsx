import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import styles from './stars.module.scss';


// Function to generate random points in a sphere
const generateRandomPointsInSphere = (numPoints, radius) => {
  const points = new Float32Array(numPoints * 3);
  for (let i = 0; i < numPoints; i++) {
    const index = i * 3;
    let x, y, z;
    do {
      x = 4 * Math.random() - 1;
      y = 2 * Math.random() - 1;
      z = 2 * Math.random() - 1;
    } while (x * x + y * y + z * z > 1);
    points[index] = x * radius;
    points[index + 1] = y * radius;
    points[index + 2] = z * radius;
  }
  return points;
};

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => generateRandomPointsInSphere(7000, 5)); // Increased radius

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 18;
    ref.current.rotation.y -= delta / 18;
  });

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#ffffff' // Changed color to white for visibility
          size={0.012} // Increased size
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className={styles.canvasContainer}>
      <Canvas camera={{ position: [0, 0,5.8] }}>  {/* Moved camera further away */}
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};


export default StarsCanvas;