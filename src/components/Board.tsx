import { useGameStore } from '../store';
import { Cell } from './Cell';

export function Board() {
    const grid = useGameStore((state) => state.grid);

    return (
        <group>
            {grid.map((row, y) =>
                row.map((cell, x) => (
                    <Cell key={`${x}-${y}`} cell={cell} />
                ))
            )}
        </group>
    );
}
