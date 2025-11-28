import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Particle {
    position: THREE.Vector3;
    velocity: THREE.Vector3;
    life: number;
    maxLife: number;
}

interface ParticleSystemProps {
    position: THREE.Vector3;
    count?: number;
}

export function ParticleSystem({ position, count = 20 }: ParticleSystemProps) {
    const particles = useRef<Particle[]>([]);
    const pointsRef = useRef<THREE.Points>(null);

    // Initialize particles
    useEffect(() => {
        particles.current = [];
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count;
            const speed = 0.5 + Math.random() * 1.0;
            particles.current.push({
                position: position.clone(),
                velocity: new THREE.Vector3(
                    Math.cos(angle) * speed,
                    1.5 + Math.random() * 1.0, // Upward
                    Math.sin(angle) * speed
                ),
                life: 1.0,
                maxLife: 1.0,
            });
        }
    }, [position, count]);

    useFrame((_, delta) => {
        if (!pointsRef.current || !pointsRef.current.geometry) return;

        const geometry = pointsRef.current.geometry;
        const positions = geometry.attributes.position.array as Float32Array;
        const sizes = geometry.attributes.size.array as Float32Array;

        let allDead = true;

        particles.current.forEach((particle, i) => {
            if (particle.life > 0) {
                allDead = false;

                // Update particle
                particle.position.add(particle.velocity.clone().multiplyScalar(delta));
                particle.velocity.y -= 2.0 * delta; // Gravity
                particle.life -= delta * 0.8;

                // Set position
                positions[i * 3] = particle.position.x;
                positions[i * 3 + 1] = particle.position.y;
                positions[i * 3 + 2] = particle.position.z;

                // Set size
                const alpha = particle.life / particle.maxLife;
                sizes[i] = 0.15 * alpha;
            } else {
                // Dead particle
                positions[i * 3] = 0;
                positions[i * 3 + 1] = -1000;
                positions[i * 3 + 2] = 0;
                sizes[i] = 0;
            }
        });

        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.size.needsUpdate = true;

        // Remove this component when all particles are dead
        if (allDead && pointsRef.current?.parent) {
            pointsRef.current.parent.remove(pointsRef.current);
        }
    });

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        return geo;
    }, [count]);

    return (
        <points ref={pointsRef} geometry={geometry}>
            <pointsMaterial
                size={0.15}
                color="#ffffff"
                transparent
                opacity={0.8}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
}
