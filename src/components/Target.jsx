import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

/**
 * A self-contained, procedurally generated target stand.
 *
 * The original model was loaded from a remote Supabase URL that no longer
 * exists, which crashed the whole canvas. This builds an equivalent decorative
 * target from primitives so there is no external dependency.
 */
const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Stand pole */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 2.4, 16]} />
        <meshStandardMaterial color="#2b2b2b" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Base */}
      <mesh position={[0, -2.35, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 0.15, 24]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Target board – concentric rings forming a bullseye */}
      <group position={[0, 0.4, 0]}>
        <mesh position={[0, 0, -0.02]}>
          <circleGeometry args={[1, 48]} />
          <meshStandardMaterial color="#f5f5f5" side={2} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <ringGeometry args={[0.78, 1, 48]} />
          <meshStandardMaterial color="#e43030" side={2} />
        </mesh>
        <mesh position={[0, 0, 0.001]}>
          <ringGeometry args={[0.52, 0.78, 48]} />
          <meshStandardMaterial color="#ffffff" side={2} />
        </mesh>
        <mesh position={[0, 0, 0.002]}>
          <ringGeometry args={[0.26, 0.52, 48]} />
          <meshStandardMaterial color="#e43030" side={2} />
        </mesh>
        <mesh position={[0, 0, 0.003]}>
          <circleGeometry args={[0.26, 48]} />
          <meshStandardMaterial color="#1d4ed8" side={2} />
        </mesh>
      </group>
    </group>
  );
};

export default Target;
