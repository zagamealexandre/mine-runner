import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGameStore, TILE_SIZE } from '../store';
import * as THREE from 'three';

export function Player() {
    const playerPos = useGameStore((state) => state.playerPos);
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.position.x = playerPos.x * TILE_SIZE;
            meshRef.current.position.z = playerPos.y * TILE_SIZE;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0.5, 0]}>
            <sphereGeometry args={[0.3]} />
            <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.5} />
            <pointLight distance={5} intensity={2} color="#00ff88" />
        </mesh>
    );
}
