import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // Enable shadow mapping
document.body.appendChild(renderer.domElement);

// Add OrbitControls for free movement
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth camera movement
controls.dampingFactor = 0.05;
controls.target.set(-350, 0, -350);

// Modeling
// Create ground
const groundGeometry = new THREE.BoxGeometry(1200, 1200, 10);
const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x44546a,
    side: THREE.DoubleSide
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// create a road
const roadGeometry = new THREE.BoxGeometry(1200, 200, 20);
const roadMaterial = new THREE.MeshStandardMaterial({
    color: 0x333333, // Dark gray
    side: THREE.DoubleSide
    });


const road1 = new THREE.Mesh(roadGeometry, roadMaterial);
road1.rotation.x = -Math.PI / 2;
road1.position.y = 0.01; // Slightly above the ground to avoid z-fighting
scene.add(road1);

const road2 = new THREE.Mesh(roadGeometry, roadMaterial);
road2.rotation.set(-Math.PI / 2, 0, Math.PI / 2)
road2.position.y = 0.01; // Slightly above the ground to avoid z-fighting
scene.add(road2);

//add a building in the center
const hieu_group = new THREE.Group();
scene.add(hieu_group);

const tower_group = new THREE.Group();
hieu_group.add(tower_group)
tower_group.position.set(100, 0, 100);

const tower_foundation = createBox(0x9e9e9e, [150, 50, 150], [0, 0, 0], [0, 0, 0]);
tower_group.add(tower_foundation);

const tower_foundation_corner1 = createBox(0x9e9e9e, [50, 50, 50], [60, 0, 60], [0, 0, 0]);
tower_group.add(tower_foundation_corner1);
const tower_foundation_corner2 = createBox(0x9e9e9e, [50, 50, 50], [-60, 0, 60], [0, 0, 0]);
tower_group.add(tower_foundation_corner2);
const tower_foundation_corner3 = createBox(0x9e9e9e, [50, 50, 50], [60, 0, -60], [0, 0, 0]);
tower_group.add(tower_foundation_corner3);
const tower_foundation_corner4 = createBox(0x9e9e9e, [50, 50, 50], [-60, 0, -60], [0, 0, 0]);
tower_group.add(tower_foundation_corner4);

const tower_body = createBox(0x9e9e9e, [125, 600, 125], [0, 300, 0], [0, 0, 0]);
tower_group.add(tower_body);
const tower_body_edge1 = createBox(0x9e9e9e, [25, 600, 25], [60, 300, 60], [0, 0, 0]);
tower_group.add(tower_body_edge1);
const tower_body_edge2 = createBox(0x9e9e9e, [25, 600, 25], [60, 300, -60], [0, 0, 0]);
tower_group.add(tower_body_edge2);
const tower_body_edge3 = createBox(0x9e9e9e, [25, 600, 25], [-60, 300, 60], [0, 0, 0]);
tower_group.add(tower_body_edge3);
const tower_body_edge4 = createBox(0x9e9e9e, [25, 600, 25], [-60, 300, -60], [0, 0, 0]);
tower_group.add(tower_body_edge4);

const tower_clock_body = createBox(0x9e9e9e, [160, 160, 160], [0, 600, 0], [0, 0, 0]);
tower_group.add(tower_clock_body);
const tower_clock_body_bottom = createBox(0x9e9e9e, [170, 10, 170], [0, 520, 0], [0, 0, 0]);
tower_group.add(tower_clock_body_bottom);
const tower_clock_body_top1 = createBox(0x9e9e9e, [160, 10, 160], [0, 680, 0], [0, 0, 0]);
tower_group.add(tower_clock_body_top1);
const tower_clock_body_top2 = createBox(0x9e9e9e, [140, 50, 140], [0, 700, 0], [0, 0, 0]);
tower_group.add(tower_clock_body_top2);

const tower_roof1 = createCone(0x8b0000, 100, 100, 4, [0, 770, 0], [0, 45, 0]); // Dark red roof
tower_group.add(tower_roof1);
const tower_roof1_bottom = createBox(0x9e9e9e, [150, 10, 150], [0, 720, 0], [0, 0, 0]);
tower_group.add(tower_roof1_bottom);
const tower_roof1_top1 = createBox(0x9e9e9e, [60, 60, 60], [0, 810, 0], [0, 0, 0]);
tower_group.add(tower_roof1_top1);
const tower_roof1_top2 = createBox(0x9e9e9e, [65, 5, 65], [0, 780, 0], [0, 0, 0]);
tower_group.add(tower_roof1_top2);

const tower_roof2 = createCone(0x8b0000, 40, 120, 4, [0, 900, 0], [0, 45, 0]); // Dark red roof
tower_group.add(tower_roof2);
const tower_roof2_bottom = createBox(0x9e9e9e, [65, 5, 65], [0, 840, 0], [0, 0, 0]);
tower_group.add(tower_roof2_bottom);


hieu_group.position.set(-350, 0, -350);

// Sunlight
const sunLight = new THREE.DirectionalLight(0xffffff, 1.5); // Increased intensity
sunLight.position.set(5, 10, 5); // Position the light like the sun
sunLight.castShadow = true; // Enable shadows for the light
sunLight.shadow.mapSize.width = 1024; // Shadow map resolution
sunLight.shadow.mapSize.height = 1024;
sunLight.shadow.camera.near = 0.5;
sunLight.shadow.camera.far = 50;
sunLight.shadow.camera.left = -20;  // Extend the left boundary
sunLight.shadow.camera.right = 20; // Extend the right boundary
sunLight.shadow.camera.top = 20;   // Extend the top boundary
sunLight.shadow.camera.bottom = -20; // Extend the bottom boundary
scene.add(sunLight);

// Add Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft ambient light
scene.add(ambientLight);

// Camera position
camera.position.set(-550, 1200, 0);

function animate() {
    controls.update(); // Update OrbitControls

    renderer.render(scene, camera); // Render the scene
}

renderer.setAnimationLoop(animate);

function createBox(color, size, position, rotation) {
    // Create geometry and material
    const geometry = new THREE.BoxGeometry(size[0], size[1], size[2]);
    const material = new THREE.MeshStandardMaterial({ color: color });
    const box = new THREE.Mesh(geometry, material);

    // Set position
    box.position.set(position[0], position[1], position[2]);

    // Convert rotation from degrees to radians and set rotation
    box.rotation.set(
        THREE.MathUtils.degToRad(rotation[0]),
        THREE.MathUtils.degToRad(rotation[1]),
        THREE.MathUtils.degToRad(rotation[2])
    );

    return box;
}

function createCone(color, baseRadius, height, segments, position, rotation) {
    // Create geometry and material
    const geometry = new THREE.ConeGeometry(baseRadius, height, segments);
    const material = new THREE.MeshStandardMaterial({ color: color });
    const cone = new THREE.Mesh(geometry, material);

    // Set position
    cone.position.set(position[0], position[1], position[2]);

    // Convert rotation from degrees to radians and set rotation
    cone.rotation.set(
        THREE.MathUtils.degToRad(rotation[0]),
        THREE.MathUtils.degToRad(rotation[1]),
        THREE.MathUtils.degToRad(rotation[2])
    );

    return cone;
}