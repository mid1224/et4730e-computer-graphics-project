import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // Enable shadow mapping
document.body.appendChild(renderer.domElement);

// Add OrbitControls for free movement
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth camera movement
controls.dampingFactor = 0.05;

// Base floor
const floorGeometry = new THREE.PlaneGeometry(50, 50);
const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0x808080, // Gray color
});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
floor.receiveShadow = true; // Floor receives shadows
scene.add(floor);

// Function to create a building
function createBuilding(width, height, depth, color, position, rotation = [0, 0, 0]) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshStandardMaterial({
        color: color,
    });
    const building = new THREE.Mesh(geometry, material);
    building.position.set(...position);
    building.rotation.set(...rotation);
    building.castShadow = true;
    return building;
}

const building1 = createBuilding(3, 6, 3, 0xB0B0B0, [-4, 3, -4]); // Light Gray
scene.add(building1);

const building2 = createBuilding(3, 4.5, 3, 0x4682B4, [-7.25, 2.25, -4]); // Steel Blue
scene.add(building2);

const building3Part1 = createBuilding(4, 6, 8, 0x77815C, [4, 3, -6]); // Sage Green
const building3Part2 = createBuilding(4, 6, 3.5, 0x77815C, [4, 9, -8.25]);
const building3Part3 = createBuilding(4, 6, 1.5, 0x77815C, [4, 9, -2.75]);
const building3Part4 = createBuilding(4, 2, 3, 0x77815C, [4, 11, -5]);
scene.add(building3Part1);
scene.add(building3Part2);
scene.add(building3Part3);
scene.add(building3Part4);

const building4 = createBuilding(3, 6, 8, 0xC2B280, [7.5, 3, -6]); // Sand Beige
scene.add(building4);

const building5 = createBuilding(4, 10, 3, 0x9370DB, [-5, 5, -8]); // Muted Purple
scene.add(building5);

const building6 = createBuilding(2, 4, 4, 0xFFC0CB, [3, 2, 4]); // Rose Pink
scene.add(building6);

const building7 = createBuilding(2, 5, 4, 0xFFD700, [4.11, 2.5, 6.75], [0, Math.PI / 4, 0]); // Golden Yellow
scene.add(building7);

const building8 = createBuilding(2, 6, 4, 0x008080, [6.85, 3, 7.9], [0, Math.PI / 2, 0]); // Teal
scene.add(building8);

const building9 = createBuilding(3, 8, 3, 0xE6E6FA, [7.5, 4, 3.9]); // Lavender
scene.add(building9);

const building10 = createBuilding(4, 1.5, 6, 0xCC5500, [-4, 0.75, 7]); // Burnt Orange
scene.add(building10);

const building11 = createBuilding(3, 4, 4, 0x93E9BE, [-8, 2, 4]); // Seafoam Green
scene.add(building11);

const building12 = createBuilding(3, 3, 3.5, 0x808000, [-8, 1.5, 8]); // Olive Green
scene.add(building12);

const busStop = createBuilding(1.5, 1, 0.5, 0x87CEEB, [-3, 0.5, 2.5]); // Sky Blue
scene.add(busStop);

// Function to create a road
function createRoad(width, height, color, position, rotation = [0, 0, 0]) {
    const geometry = new THREE.PlaneGeometry(width, height);
    const material = new THREE.MeshStandardMaterial({
        color: color,
    });
    const road = new THREE.Mesh(geometry, material);
    road.rotation.set(...rotation);
    road.position.set(...position);
    road.receiveShadow = true;
    return road;
}

const road1 = createRoad(20, 2, 0x333333, [0, 0.01, 0], [-Math.PI / 2, 0, 0]);
scene.add(road1);

const road2 = createRoad(20, 2, 0x333333, [0, 0.01, 0], [-Math.PI / 2, 0, -Math.PI / 2]);
scene.add(road2);

// Sky Rail
const skyRail1 = createBuilding(20, .1, .65, 0xa3eeff, [0, 9, -4.25]); // Olive Green
scene.add(skyRail1);
const skyRail2 = createBuilding(20, .1, .65, 0xa3eeff, [0, 9, -5.75]); // Olive Green
scene.add(skyRail2);

// Sky Train
const train1 = createBuilding(2, 1, 1, 0xff0000, [0, 8.4, -4.25]); // Red
scene.add(train1);

const train2 = createBuilding(2, 1, 1, 0xff0000, [0, 8.4, -5.75]); // Red
scene.add(train2);


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

// Clock to track time
const clock = new THREE.Clock();

// Camera position
camera.position.set(5, 5, 10);
camera.lookAt(0, 0, 0);

function animate() {
    controls.update(); // Update OrbitControls

    // Animate the train moving back and forth
    const time = clock.getElapsedTime(); // Get elapsed time
    const speed1 = .25; // Speed of the train1
    const speed2 = .5; // Speed of the train2
    const distance = 9; // Total distance the train moves
    train1.position.x = Math.sin(time * speed1) * distance; // Move the train back and forth
    train2.position.x = Math.sin(time * speed2) * distance; // Move the train back and forth

    renderer.render(scene, camera); // Render the scene
}

renderer.setAnimationLoop(animate);