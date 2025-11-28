import { create } from 'zustand';
import * as THREE from 'three';

export const TILE_SIZE = 1;
export const COLS = 40;
export const ROWS = 40;
export const REVEAL_RADIUS = 4;
export const REVEAL_DURATION = 8000; // 5 seconds before hiding

export interface GridCell {
    x: number;
    y: number;
    mine: boolean;
    count: number;
    revealed: boolean;
    revealedAt?: number; // Timestamp when revealed
}

interface GameState {
    grid: GridCell[][];
    playerPos: THREE.Vector2;
    mousePos: THREE.Vector2;

    initGrid: () => void;
    setMousePos: (x: number, y: number) => void;
    updatePlayer: (delta: number) => void;
    revealAroundPlayer: () => void;
    hideOldReveals: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
    grid: [],
    playerPos: new THREE.Vector2(COLS / 2, ROWS / 2),
    mousePos: new THREE.Vector2(COLS / 2, ROWS / 2),

    initGrid: () => {
        const grid: GridCell[][] = [];
        for (let y = 0; y < ROWS; y++) {
            grid[y] = [];
            for (let x = 0; x < COLS; x++) {
                grid[y][x] = { x, y, mine: false, count: 0, revealed: false };
            }
        }

        // Place mines
        for (let i = 0; i < 150; i++) {
            const x = Math.floor(Math.random() * COLS);
            const y = Math.floor(Math.random() * ROWS);
            grid[y][x].mine = true;
        }

        // Compute counts
        const dirs = [
            [-1, -1], [0, -1], [1, -1],
            [-1, 0], [1, 0],
            [-1, 1], [0, 1], [1, 1],
        ];

        for (let y = 0; y < ROWS; y++) {
            for (let x = 0; x < COLS; x++) {
                if (grid[y][x].mine) continue;

                let c = 0;
                for (const [dx, dy] of dirs) {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (nx >= 0 && nx < COLS && ny >= 0 && ny < ROWS && grid[ny][nx].mine) {
                        c++;
                    }
                }
                grid[y][x].count = c;
            }
        }
        set({ grid });
    },

    setMousePos: (x, y) => {
        // Clamp to grid bounds
        const cx = Math.max(0, Math.min(COLS - 1, x));
        const cy = Math.max(0, Math.min(ROWS - 1, y));
        set({ mousePos: new THREE.Vector2(cx, cy) });
    },

    updatePlayer: (_delta) => {
        const { playerPos, mousePos } = get();

        // Simple lerp - reduced to 0.03 for slower, more controlled movement
        playerPos.lerp(mousePos, 0.05);

        // Trigger reveal
        get().revealAroundPlayer();

        // Hide old reveals
        get().hideOldReveals();

        // set({ playerPos: playerPos.clone() }); // Removed to prevent re-renders, mutating in place is enough for animation
    },

    revealAroundPlayer: () => {
        const { grid, playerPos } = get();
        const cx = Math.round(playerPos.x);
        const cy = Math.round(playerPos.y);
        let changed = false;

        const startX = Math.max(0, cx - Math.ceil(REVEAL_RADIUS));
        const endX = Math.min(COLS, cx + Math.ceil(REVEAL_RADIUS) + 1);
        const startY = Math.max(0, cy - Math.ceil(REVEAL_RADIUS));
        const endY = Math.min(ROWS, cy + Math.ceil(REVEAL_RADIUS) + 1);

        for (let y = startY; y < endY; y++) {
            for (let x = startX; x < endX; x++) {
                if (grid[y][x].revealed) continue;

                const dx = x - playerPos.x;
                const dy = y - playerPos.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist <= REVEAL_RADIUS) {
                    grid[y][x].revealed = true;
                    grid[y][x].revealedAt = Date.now(); // Set timestamp
                    changed = true;
                }
            }
        }

        if (changed) {
            set({ grid: [...grid] });
        }
    },

    hideOldReveals: () => {
        const { grid } = get();
        const now = Date.now();
        let changed = false;

        for (let y = 0; y < ROWS; y++) {
            for (let x = 0; x < COLS; x++) {
                const cell = grid[y][x];
                if (cell.revealed && cell.revealedAt && (now - cell.revealedAt) > REVEAL_DURATION) {
                    cell.revealed = false;
                    cell.revealedAt = undefined;
                    changed = true;
                }
            }
        }

        if (changed) {
            set({ grid: [...grid] });
        }
    }
}));
