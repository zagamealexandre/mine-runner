import { Canvas } from '@react-three/fiber';
import { GameScene } from './GameScene';
import { useGameStore } from '../store';
import { useEffect } from 'react';

export function MineRunner() {
    const initGrid = useGameStore((state) => state.initGrid);

    useEffect(() => {
        initGrid();
    }, [initGrid]);

    return (
        <div style={{ width: '100%', height: '100%', background: '#111', overflow: 'hidden', position: 'relative' }}>
            <Canvas
                camera={{
                    position: [20, 25, 55],
                    fov: 35,
                    near: 0.1,
                    far: 1000
                }}
                shadows
            >
                <GameScene />
            </Canvas>
        </div>
    );
}
