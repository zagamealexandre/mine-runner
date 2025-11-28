import { useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Board } from './Board';
import { Player } from './Player';
import { useGameStore, COLS, ROWS, TILE_SIZE } from '../store';

export function GameScene() {
    const setMousePos = useGameStore((state) => state.setMousePos);
    const updatePlayer = useGameStore((state) => state.updatePlayer);
    const { camera } = useThree();

    // Setup camera for perspective view - positioned to keep board aligned with screen
    useEffect(() => {
        camera.position.set(20, 25, 55); // X=20 for slight offset, Y=25 for elevation, Z=55 for distance
        camera.lookAt(COLS * TILE_SIZE / 2, 0, ROWS * TILE_SIZE / 2);
    }, [camera]);

    useFrame((_, delta) => {
        updatePlayer(delta);
    });

    const handlePointerMove = (e: any) => {
        // e.point is the intersection point in 3D world space
        // We need to map this to grid coordinates
        // The board is on the XZ plane (y=0)
        const x = e.point.x / TILE_SIZE;
        const y = e.point.z / TILE_SIZE; // Z is our Y in grid coords
        setMousePos(x, y);
    };

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 20, 10]} intensity={1} castShadow />

            {/* Invisible plane for raycasting mouse position */}
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[COLS * TILE_SIZE / 2, -0.1, ROWS * TILE_SIZE / 2]}
                scale={[COLS * TILE_SIZE, ROWS * TILE_SIZE, 1]}
                onPointerMove={handlePointerMove}
                visible={false}
            >
                <planeGeometry />
                <meshBasicMaterial color="red" wireframe />
            </mesh>

            <Board />
            <Player />
        </>
    );
}
