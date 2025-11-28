import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { type GridCell, TILE_SIZE } from '../store';
import { ParticleSystem } from './ParticleSystem';

interface CellProps {
    cell: GridCell;
}

export function Cell({ cell }: CellProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [showParticles, setShowParticles] = useState(false);
    const wasRevealed = useRef(false);

    // Materials for the box faces
    // 0:x+, 1:x-, 2:y+ (top), 3:y- (bottom), 4:z+, 5:z-
    const materials = useMemo(() => {
        const hiddenMat = new THREE.MeshStandardMaterial({ color: '#ff4444' }); // Red for unrevealed
        const revealedMat = new THREE.MeshStandardMaterial({ color: '#ffffff' }); // White for revealed
        const sideMat = new THREE.MeshStandardMaterial({ color: '#333333' }); // Dark sides
        return [
            sideMat, // x+
            sideMat, // x-
            hiddenMat, // y+ (Top - initially visible)
            revealedMat, // y- (Bottom - becomes visible after flip)
            sideMat, // z+
            sideMat, // z-
        ];
    }, []);

    // Detect reveal and spawn particles (only for mines)
    useEffect(() => {
        if (cell.revealed && !wasRevealed.current && cell.mine) {
            wasRevealed.current = true;
            setShowParticles(true);
            // Hide particles after they're done
            setTimeout(() => setShowParticles(false), 2000);
        }
    }, [cell.revealed, cell.mine]);

    // Animate reveal
    useFrame((_, delta) => {
        if (!meshRef.current) return;

        // Target rotation: 0 if hidden, PI (180 deg) if revealed
        const targetRotX = cell.revealed ? Math.PI : 0;

        // Smoothly interpolate rotation
        // Slower speed: delta * 2 instead of 5
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, delta * 2);
    });

    const numberColor = useMemo(() => {
        switch (cell.count) {
            case 1: return '#0000ff'; // Blue
            case 2: return '#008000'; // Green
            case 3: return '#ff0000'; // Red
            case 4: return '#000080'; // Navy
            case 5: return '#800000'; // Maroon
            case 6: return '#008080'; // Teal
            case 7: return '#000000'; // Black
            case 8: return '#808080'; // Gray
            default: return 'black';
        }
    }, [cell.count]);

    return (
        <group position={[cell.x * TILE_SIZE, 0, cell.y * TILE_SIZE]}>
            <mesh
                ref={meshRef}
                position={[0, 0, 0]}
                material={materials}
                castShadow
                receiveShadow
            >
                <boxGeometry args={[TILE_SIZE * 0.95, 0.2, TILE_SIZE * 0.95]} />

                {/* Content attached to the mesh, so it rotates with it. 
                Placed on the BOTTOM face (y = -0.1 if height is 0.2).
                We need to orient it so it's readable when the block flips 180 deg.
                Only show when revealed to prevent seeing through the tile.
            */}
                {cell.revealed && (
                    <>
                        {cell.mine ? (
                            <mesh position={[0, -0.1, 0]}>
                                <sphereGeometry args={[0.25]} />
                                <meshStandardMaterial color="black" />
                            </mesh>
                        ) : (
                            cell.count > 0 && (
                                <Text
                                    position={[0, -0.11, 0]} // Slightly protruding from bottom
                                    rotation={[Math.PI / 2, 0, 0]} // Rotated to be readable when flipped
                                    fontSize={0.5}
                                    color={numberColor}
                                    anchorX="center"
                                    anchorY="middle"
                                    fontWeight="bold"
                                >
                                    {cell.count}
                                </Text>
                            )
                        )}
                    </>
                )}
            </mesh>

            {/* Particle effect on reveal */}
            {showParticles && (
                <ParticleSystem
                    position={new THREE.Vector3(0, 0.5, 0)}
                    count={15}
                />
            )}
        </group>
    );
}
