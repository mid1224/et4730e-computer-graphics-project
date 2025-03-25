import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

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
    color: 0x808080, // Grayish color
    roughness: 0.8, // High roughness for a concrete-like surface
    metalness: 0.2, // Low metalness
});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
floor.receiveShadow = true; // Floor receives shadows
scene.add(floor);

//--Building 1-- (Light Gray)
const building1Geometry = new THREE.BoxGeometry(3, 6, 3); // Main building structure
const building1Material = new THREE.MeshStandardMaterial({
    color: 0xB0B0B0, // Light gray
    roughness: 0.8,
    metalness: 0.2,
});
const building1 = new THREE.Mesh(building1Geometry, building1Material);
building1.position.set(-4, 3, -4);
building1.castShadow = true;
scene.add(building1);

// Glowing Windows
/*
const windowGeometry = new THREE.PlaneGeometry(0.6, 0.6); // Square windows
const windowMaterial = new THREE.MeshBasicMaterial({
    color: 0xeb34cc, // Cyan color for glowing effect
    emissive: 0x00FFFF, // Emit the same cyan color
    emissiveIntensity: 2.0, // Increased emissive intensity
    side: THREE.DoubleSide // Make it visible from both sides
});
for (let i = -1; i <= 1; i++) {
    for (let j = 0; j <= 3; j++) {
        const window = new THREE.Mesh(windowGeometry, windowMaterial);
        window.position.set(i * 1, j * 1 - 0.6, 1.51); // Adjusted vertical position
        building1.add(window);
    }
}
*/
//--Building 1--

//--Building 2-- (Steel Blue)
const building2Geometry = new THREE.BoxGeometry(3, 4.5, 3); // Main building structure
const building2Material = new THREE.MeshStandardMaterial({
    color: 0x4682B4, // Steel blue
    roughness: 0.8,
    metalness: 0.2,
});
const building2 = new THREE.Mesh(building2Geometry, building2Material);
building2.position.set(-7.25, 2.25, -4);
building2.castShadow = true;
scene.add(building2);
//--Building 2--

//--Building 3-- (Sage Green)
const building3Geometry = new THREE.BoxGeometry(4, 12, 8); // Main building structure
const building3Material = new THREE.MeshStandardMaterial({
    color: 0x77815C, // Sage green
    roughness: 0.8,
    metalness: 0.2,
});
const building3 = new THREE.Mesh(building3Geometry, building3Material);
building3.position.set(4, 6, -6);
building3.castShadow = true;
scene.add(building3);
//--Building 3--

//--Building 4-- (Sand Beige)
const building4Geometry = new THREE.BoxGeometry(3, 6, 8); // Main building structure
const building4Material = new THREE.MeshStandardMaterial({
    color: 0xC2B280, // Sand beige
    roughness: 0.8,
    metalness: 0.2,
});
const building4 = new THREE.Mesh(building4Geometry, building4Material);
building4.position.set(7.5, 3, -6);
building4.castShadow = true;
scene.add(building4);
//--Building 4--

//--Building 5-- (Muted Purple)
const building5Geometry = new THREE.BoxGeometry(4, 10, 3); // Main building structure
const building5Material = new THREE.MeshStandardMaterial({
    color: 0x9370DB, // Muted purple
    roughness: 0.8,
    metalness: 0.2,
});
const building5 = new THREE.Mesh(building5Geometry, building5Material);
building5.position.set(-5, 5, -8);
building5.castShadow = true;
scene.add(building5);
//--Building 5--

//--Building 6-- (Rose Pink)
const building6Geometry = new THREE.BoxGeometry(2, 4, 4); // Main building structure
const building6Material = new THREE.MeshStandardMaterial({
    color: 0xFFC0CB, // Rose pink
    roughness: 0.8,
    metalness: 0.2,
});
const building6 = new THREE.Mesh(building6Geometry, building6Material);
building6.position.set(3, 2, 4);
building6.castShadow = true;
scene.add(building6);
//--Building 6--

//--Building 7-- (Golden Yellow)
const building7Geometry = new THREE.BoxGeometry(2, 5, 4); // Main building structure
const building7Material = new THREE.MeshStandardMaterial({
    color: 0xFFD700, // Golden yellow
    roughness: 0.8,
    metalness: 0.2,
});
const building7 = new THREE.Mesh(building7Geometry, building7Material);
building7.position.set(4.11, 2.5, 6.75);
building7.rotation.set(0, Math.PI / 4, 0);
building7.castShadow = true;
scene.add(building7);
//--Building 7--

//--Building 8-- (Teal)
const building8Geometry = new THREE.BoxGeometry(2, 6, 4); // Main building structure
const building8Material = new THREE.MeshStandardMaterial({
    color: 0x008080, // Teal
    roughness: 0.8,
    metalness: 0.2,
});
const building8 = new THREE.Mesh(building8Geometry, building8Material);
building8.position.set(6.85, 3, 7.9);
building8.rotation.set(0, Math.PI / 2, 0);
building8.castShadow = true;
scene.add(building8);
//--Building 8--

//--Building 9-- (Lavender)
const building9Geometry = new THREE.BoxGeometry(3, 8, 3); // Main building structure
const building9Material = new THREE.MeshStandardMaterial({
    color: 0xE6E6FA, // Lavender
    roughness: 0.8,
    metalness: 0.2,
});
const building9 = new THREE.Mesh(building9Geometry, building9Material);
building9.position.set(7.5, 4, 3.9);
building9.castShadow = true;
scene.add(building9);
//--Building 9--

//--Building 10-- (Burnt Orange)
const building10Geometry = new THREE.BoxGeometry(4, 1.5, 6); // Main building structure
const building10Material = new THREE.MeshStandardMaterial({
    color: 0xCC5500, // Burnt orange
    roughness: 0.8,
    metalness: 0.2,
});
const building10 = new THREE.Mesh(building10Geometry, building10Material);
building10.position.set(-4, 0.75, 7);
building10.castShadow = true;
scene.add(building10);
//--Building 10--

//--Building 11-- (Seafoam Green)
const building11Geometry = new THREE.BoxGeometry(3, 4, 4); // Main building structure
const building11Material = new THREE.MeshStandardMaterial({
    color: 0x93E9BE, // Seafoam green
    roughness: 0.8,
    metalness: 0.2,
});
const building11 = new THREE.Mesh(building11Geometry, building11Material);
building11.position.set(-8, 2, 4);
building11.castShadow = true;
scene.add(building11);
//--Building 11--

//--Building 12-- (Olive Green)
const building12Geometry = new THREE.BoxGeometry(3, 3, 3.5); // Main building structure
const building12Material = new THREE.MeshStandardMaterial({
    color: 0x808000, // Olive green
    roughness: 0.8,
    metalness: 0.2,
});
const building12 = new THREE.Mesh(building12Geometry, building12Material);
building12.position.set(-8, 1.5, 8);
building12.castShadow = true;
scene.add(building12);
//--Building 12--

//--Bus Stop-- (Sky Blue)
const busStopGeometry = new THREE.BoxGeometry(1.5, 1, 0.5); // Main building structure
const busStopMaterial = new THREE.MeshStandardMaterial({
    color: 0x87CEEB, // Sky blue
    roughness: 0.8,
    metalness: 0.2,
});
const busStop = new THREE.Mesh(busStopGeometry, busStopMaterial);
busStop.position.set(-3, .5, 2.5);
busStop.castShadow = true;
scene.add(busStop);
//--Bus Stop--

// Roads
const roadGeometry = new THREE.PlaneGeometry(20, 2);
const roadMaterial = new THREE.MeshStandardMaterial({
    color: 0x333333,
    roughness: 0.9,
    metalness: 0.1
});
const road1 = new THREE.Mesh(roadGeometry, roadMaterial);
road1.rotation.x = -Math.PI / 2;
road1.position.set(0, 0.01, 0);
road1.receiveShadow = true;
scene.add(road1);

const road2 = new THREE.Mesh(roadGeometry, roadMaterial);
road2.rotation.x = -Math.PI / 2;
road2.rotation.z = -Math.PI / 2;
road2.position.set(0, 0.01, 0);
road2.receiveShadow = true;
scene.add(road2);

// Sunlight
const sunLight = new THREE.DirectionalLight(0xffffff, 1.5); // Increased intensity
sunLight.position.set(5, 10, 5); // Position the light like the sun
sunLight.castShadow = true; // Enable shadows for the light
sunLight.shadow.mapSize.width = 1024; // Shadow map resolution
sunLight.shadow.mapSize.height = 1024;
sunLight.shadow.camera.near = 0.5;
sunLight.shadow.camera.far = 50;
scene.add(sunLight);

// Add Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft ambient light
scene.add(ambientLight);

// Postprocessing for Bloom Effect
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1, // Strength
    0.6, // Radius
    0.2  // Threshold
);
composer.addPass(bloomPass);

// Camera position
camera.position.set(5, 5, 10);
camera.lookAt(0, 0, 0);

function animate() {
    controls.update(); // Update OrbitControls
    composer.render(); // Use composer for rendering with bloom effect
}

renderer.setAnimationLoop(animate);