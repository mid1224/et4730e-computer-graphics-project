import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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

// Texture Loader
const textureLoader = new THREE.TextureLoader();

const bricksTexture1 = textureLoader.load('textures/bricks.jpg')
bricksTexture1.wrapS = THREE.RepeatWrapping;
bricksTexture1.wrapT = THREE.RepeatWrapping;
bricksTexture1.repeat.set(2, 2);

const bricksTexture2 = textureLoader.load('textures/bricks.jpg')
bricksTexture2.wrapS = THREE.RepeatWrapping;
bricksTexture2.wrapT = THREE.RepeatWrapping;
bricksTexture2.repeat.set(1, 1);

const bricksTexture3 = textureLoader.load('textures/bricks.jpg')
bricksTexture3.wrapS = THREE.RepeatWrapping;
bricksTexture3.wrapT = THREE.RepeatWrapping;
bricksTexture3.repeat.set(.5, 2);

const bricksTexture4 = textureLoader.load('textures/bricks.jpg')
bricksTexture4.wrapS = THREE.RepeatWrapping;
bricksTexture4.wrapT = THREE.RepeatWrapping;
bricksTexture4.repeat.set(.5, 2);

const bricksTexture5 = textureLoader.load('textures/bricks.jpg')
bricksTexture5.wrapS = THREE.RepeatWrapping;
bricksTexture5.wrapT = THREE.RepeatWrapping;
bricksTexture5.repeat.set(.5, .5);

const bricksTexture6 = textureLoader.load('textures/bricks.jpg')
bricksTexture6.wrapS = THREE.RepeatWrapping;
bricksTexture6.wrapT = THREE.RepeatWrapping;
bricksTexture6.repeat.set(.8, .2);

const bricksTexture7 = textureLoader.load('textures/bricks.jpg')
bricksTexture7.wrapS = THREE.RepeatWrapping;
bricksTexture7.wrapT = THREE.RepeatWrapping;
bricksTexture7.repeat.set(.5, .5);

const concreteTexture = textureLoader.load('textures/concrete.jpg')
concreteTexture.wrapS = THREE.RepeatWrapping;
concreteTexture.wrapT = THREE.RepeatWrapping;
concreteTexture.repeat.set(.1, 2);

const roadTexture = textureLoader.load('textures/road.jpg')
roadTexture.wrapS = THREE.RepeatWrapping;
roadTexture.wrapT = THREE.RepeatWrapping;
roadTexture.repeat.set(.8, 5);

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
hieu_group.position.set(-350, 0, -350);

const tower_group = new THREE.Group();
hieu_group.add(tower_group)
tower_group.position.set(100, 0, 100);

const tower_foundation = createBox(0x9e9e9e, [150, 100, 150], [0, 0, 0], [0, 0, 0], concreteTexture);
tower_group.add(tower_foundation);

const tower_foundation_corner1 = createBox(0x9e9e9e, [50, 100, 50], [60, 0, 60], [0, 0, 0], concreteTexture);
tower_group.add(tower_foundation_corner1);
const tower_foundation_corner2 = createBox(0x9e9e9e, [50, 100, 50], [-60, 0, 60], [0, 0, 0], concreteTexture);
tower_group.add(tower_foundation_corner2);
const tower_foundation_corner3 = createBox(0x9e9e9e, [50, 100, 50], [60, 0, -60], [0, 0, 0], concreteTexture);
tower_group.add(tower_foundation_corner3);
const tower_foundation_corner4 = createBox(0x9e9e9e, [50, 100, 50], [-60, 0, -60], [0, 0, 0], concreteTexture);
tower_group.add(tower_foundation_corner4);

const tower_body = createBox(0x9e9e9e, [125, 600, 125], [0, 300, 0], [0, 0, 0], bricksTexture4);
tower_group.add(tower_body);
const tower_body_edge1 = createBox(0x9e9e9e, [25, 600, 25], [60, 300, 60], [0, 0, 0], concreteTexture);
tower_group.add(tower_body_edge1);
const tower_body_edge2 = createBox(0x9e9e9e, [25, 600, 25], [60, 300, -60], [0, 0, 0], concreteTexture);
tower_group.add(tower_body_edge2);
const tower_body_edge3 = createBox(0x9e9e9e, [25, 600, 25], [-60, 300, 60], [0, 0, 0], concreteTexture);
tower_group.add(tower_body_edge3);
const tower_body_edge4 = createBox(0x9e9e9e, [25, 600, 25], [-60, 300, -60], [0, 0, 0], concreteTexture);
tower_group.add(tower_body_edge4);

const tower_clock_body_divider1 = createBox(0x9e9e9e, [140, 5, 140], [0, 200, 0], [0, 0, 0], concreteTexture);
tower_group.add(tower_clock_body_divider1);
const tower_clock_body_divider2 = createBox(0x9e9e9e, [140, 5, 140], [0, 350, 0], [0, 0, 0], concreteTexture);
tower_group.add(tower_clock_body_divider2);

const tower_clock_body = createBox(0x9e9e9e, [160, 160, 160], [0, 600, 0], [0, 0, 0], bricksTexture5);
tower_group.add(tower_clock_body);
const tower_clock_body_bottom = createBox(0x9e9e9e, [170, 10, 170], [0, 520, 0], [0, 0, 0], concreteTexture);
tower_group.add(tower_clock_body_bottom);
const tower_clock_body_top1 = createBox(0x9e9e9e, [170, 10, 170], [0, 680, 0], [0, 0, 0], concreteTexture);
tower_group.add(tower_clock_body_top1);
const tower_clock_body_top2 = createBox(0x9e9e9e, [140, 40, 140], [0, 700, 0], [0, 0, 0], bricksTexture6);
tower_group.add(tower_clock_body_top2);

const tower_clock_body_edge1 = createBox(0x9e9e9e, [5, 160, 5], [80, 600, 80], [0, 0, 0], concreteTexture);
tower_group.add(tower_clock_body_edge1);
const tower_clock_body_edge2 = createBox(0x9e9e9e, [5, 160, 5], [-80, 600, 80], [0, 0, 0], concreteTexture);
tower_group.add(tower_clock_body_edge2);
const tower_clock_body_edge3 = createBox(0x9e9e9e, [5, 160, 5], [80, 600, -80], [0, 0, 0], concreteTexture);
tower_group.add(tower_clock_body_edge3);
const tower_clock_body_edge4 = createBox(0x9e9e9e, [5, 160, 5], [-80, 600, -80], [0, 0, 0], concreteTexture);
tower_group.add(tower_clock_body_edge4);

const tower_roof1 = createCone(0xb37c72, 100, 100, 4, [0, 770, 0], [0, 45, 0]); // Dark red roof
tower_group.add(tower_roof1);
const tower_roof1_bottom = createBox(0x9e9e9e, [150, 10, 150], [0, 720, 0], [0, 0, 0], concreteTexture);
tower_group.add(tower_roof1_bottom);
const tower_roof1_top1 = createBox(0x9e9e9e, [60, 60, 60], [0, 810, 0], [0, 0, 0], bricksTexture7);
tower_group.add(tower_roof1_top1);
const tower_roof1_top2 = createBox(0x9e9e9e, [65, 5, 65], [0, 780, 0], [0, 0, 0], concreteTexture);
tower_group.add(tower_roof1_top2);

const tower_roof2 = createCone(0xb37c72, 40, 120, 4, [0, 900, 0], [0, 45, 0]); // Dark red roof
tower_group.add(tower_roof2);
const tower_roof2_bottom = createBox(0x9e9e9e, [65, 5, 65], [0, 840, 0], [0, 0, 0], concreteTexture);
tower_group.add(tower_roof2_bottom);

const tower_clock_circle1 = createCylinder(0xeee7d7, 55, 10, 32, [0, 600, 78], [90, 0, 0]);
tower_group.add(tower_clock_circle1);
const tower_clock_circle2 = createCylinder(0xeee7d7, 55, 10, 32, [78, 600, 0], [90, 0, 90]);
tower_group.add(tower_clock_circle2);
const tower_clock_circle3 = createCylinder(0xeee7d7, 55, 10, 32, [-78, 600, 0], [90, 0, 90]);
tower_group.add(tower_clock_circle3);
const tower_clock_circle4 = createCylinder(0xeee7d7, 55, 10, 32, [0, 600, -78], [90, 0, 0]);
tower_group.add(tower_clock_circle4);

// Declare hand variables here to be accessible in animate()
let hourHand1, minuteHand1, secondHand1;
let hourHand2, minuteHand2, secondHand2;
let hourHand3, minuteHand3, secondHand3;
let hourHand4, minuteHand4, secondHand4;

// Create and add clock hands for tower_clock_circle1
const clock1Container = new THREE.Group();
const clockFaceMesh1 = tower_clock_circle1;
const clockFaceRadius1 = clockFaceMesh1.geometry.parameters.radiusTop;
const clockFaceThickness1 = clockFaceMesh1.geometry.parameters.height;

clock1Container.position.set(
    clockFaceMesh1.position.x,
    clockFaceMesh1.position.y,
    clockFaceMesh1.position.z + (clockFaceThickness1 / 2) + 1 // Position slightly in front
);
tower_group.add(clock1Container);

hourHand1 = createClockHand(clockFaceRadius1 * 0.5, clockFaceRadius1 * 0.07, 2, 0x222222);
minuteHand1 = createClockHand(clockFaceRadius1 * 0.75, clockFaceRadius1 * 0.05, 2, 0x444444);
secondHand1 = createClockHand(clockFaceRadius1 * 0.85, clockFaceRadius1 * 0.03, 1.5, 0xff0000);

clock1Container.add(hourHand1);
clock1Container.add(minuteHand1);
clock1Container.add(secondHand1);

// Create and add clock hands for tower_clock_circle2
const clock2Container = new THREE.Group();
const clockFaceMesh2 = tower_clock_circle2;
const clockFaceRadius2 = clockFaceMesh2.geometry.parameters.radiusTop;
const clockFaceThickness2 = clockFaceMesh2.geometry.parameters.height;

clock2Container.position.set(
    clockFaceMesh2.position.x + (clockFaceThickness2 / 2) + 1, // Position slightly in front (local X for clockFaceMesh2)
    clockFaceMesh2.position.y,
    clockFaceMesh2.position.z
);
clock2Container.rotation.y = THREE.MathUtils.degToRad(90);
tower_group.add(clock2Container);

hourHand2 = createClockHand(clockFaceRadius2 * 0.5, clockFaceRadius2 * 0.07, 2, 0x222222);
minuteHand2 = createClockHand(clockFaceRadius2 * 0.75, clockFaceRadius2 * 0.05, 2, 0x444444);
secondHand2 = createClockHand(clockFaceRadius2 * 0.85, clockFaceRadius2 * 0.03, 1.5, 0xff0000);

clock2Container.add(hourHand2);
clock2Container.add(minuteHand2);
clock2Container.add(secondHand2);

// Create and add clock hands for tower_clock_circle3
const clock3Container = new THREE.Group();
const clockFaceMesh3 = tower_clock_circle3;
const clockFaceRadius3 = clockFaceMesh3.geometry.parameters.radiusTop;
const clockFaceThickness3 = clockFaceMesh3.geometry.parameters.height;

clock3Container.position.set(
    clockFaceMesh3.position.x - (clockFaceThickness3 / 2) - 1, // Position slightly in front (local -X for clockFaceMesh3)
    clockFaceMesh3.position.y,
    clockFaceMesh3.position.z
);
clock3Container.rotation.y = THREE.MathUtils.degToRad(-90);
tower_group.add(clock3Container);

hourHand3 = createClockHand(clockFaceRadius3 * 0.5, clockFaceRadius3 * 0.07, 2, 0x222222);
minuteHand3 = createClockHand(clockFaceRadius3 * 0.75, clockFaceRadius3 * 0.05, 2, 0x444444);
secondHand3 = createClockHand(clockFaceRadius3 * 0.85, clockFaceRadius3 * 0.03, 1.5, 0xff0000);

clock3Container.add(hourHand3);
clock3Container.add(minuteHand3);
clock3Container.add(secondHand3);

// Create and add clock hands for tower_clock_circle4
const clock4Container = new THREE.Group();
const clockFaceMesh4 = tower_clock_circle4;
const clockFaceRadius4 = clockFaceMesh4.geometry.parameters.radiusTop;
const clockFaceThickness4 = clockFaceMesh4.geometry.parameters.height;

clock4Container.position.set(
    clockFaceMesh4.position.x,
    clockFaceMesh4.position.y,
    clockFaceMesh4.position.z - (clockFaceThickness4 / 2) - 1 // Position slightly in front
);
clock4Container.rotation.y = THREE.MathUtils.degToRad(180);
tower_group.add(clock4Container);

hourHand4 = createClockHand(clockFaceRadius4 * 0.5, clockFaceRadius4 * 0.07, 2, 0x222222);
minuteHand4 = createClockHand(clockFaceRadius4 * 0.75, clockFaceRadius4 * 0.05, 2, 0x444444);
secondHand4 = createClockHand(clockFaceRadius4 * 0.85, clockFaceRadius4 * 0.03, 1.5, 0xff0000);

clock4Container.add(hourHand4);
clock4Container.add(minuteHand4);
clock4Container.add(secondHand4);

const building1_group = new THREE.Group();
hieu_group.add(building1_group);
building1_group.position.set(100, 0, -100);

const building1_body = createBox(0x9e9e9e, [100, 300, 302], [0, 100, 0], [0, 0, 0], bricksTexture1);
building1_group.add(building1_body);

const building1_body_outside_column1 = createBox(0x8b0000, [10, 300, 10], [50, 100, 80], [0, 0, 0], concreteTexture);
building1_group.add(building1_body_outside_column1);
const building1_body_outside_column2 = createBox(0x8b0000, [10, 300, 10], [50, 100, 20], [0, 0, 0], concreteTexture);
building1_group.add(building1_body_outside_column2);
const building1_body_outside_column3 = createBox(0x8b0000, [10, 300, 10], [50, 100, -40], [0, 0, 0], concreteTexture);
building1_group.add(building1_body_outside_column3);
const building1_body_outside_column4 = createBox(0x8b0000, [10, 300, 10], [50, 100, -100], [0, 0, 0], concreteTexture);
building1_group.add(building1_body_outside_column4);

const building1_body_inside_column4 = createBox(0x8b0000, [10, 300, 10], [-50, 100, -100], [0, 0, 0], concreteTexture);
building1_group.add(building1_body_inside_column4);

const building1_body_divider = createBox(0x8b0000, [102, 20, 305], [0, 125, 0], [0, 0, 0], concreteTexture);
building1_group.add(building1_body_divider);

// Create a triangular roof for building 1
const building1_roof = createTriangularRoof(0xb37c72, 120, 50, 302, [0, 250, 0], [0, 0, 0]);
building1_group.add(building1_roof);

const building1_roof_bottom = createBox(0x9e9e9e, [120, 5, 305], [0, 250, 0], [0, 0, 0], concreteTexture);
building1_group.add(building1_roof_bottom);


const building2_group = new THREE.Group();
hieu_group.add(building2_group);
building2_group.position.set(-100, 0, -80);

const building2_body1 = createBox(0x9e9e9e, [150, 300, 100], [95, 100, 0], [0, 0, 0], bricksTexture1);
building2_group.add(building2_body1);
const building2_body2 = createBox(0x9e9e9e, [120, 125, 100], [-40, 185, 0], [0, 0, 0], bricksTexture2);
building2_group.add(building2_body2);
const building2_body3 = createBox(0x9e9e9e, [52, 300, 100], [-125, 100, 0], [0, 0, 0], bricksTexture3);
building2_group.add(building2_body3);

const building2_body_outside_column1 = createBox(0x8b0000, [10, 300, 10], [150, 100, 50], [0, 0, 0], concreteTexture);
building2_group.add(building2_body_outside_column1);
const building2_body_outside_column2 = createBox(0x8b0000, [15, 300, 15], [20, 100, 50], [0, 0, 0], concreteTexture);
building2_group.add(building2_body_outside_column2);
const building2_body_outside_column3 = createBox(0x8b0000, [15, 300, 15], [-100, 100, 50], [0, 0, 0], concreteTexture);
building2_group.add(building2_body_outside_column3);

const building2_body_inside_column1 = createBox(0x8b0000, [10, 300, 10], [150, 100, -50], [0, 0, 0], concreteTexture);
building2_group.add(building2_body_inside_column1);
const building2_body_inside_column2 = createBox(0x8b0000, [15, 300, 15], [20, 100, -50], [0, 0, 0], concreteTexture);
building2_group.add(building2_body_inside_column2);
const building2_body_inside_column3 = createBox(0x8b0000, [15, 300, 15], [-100, 100, -50], [0, 0, 0], concreteTexture);
building2_group.add(building2_body_inside_column3);

const building2_body_divider = createBox(0x8b0000, [102, 20, 305], [0, 125, 0], [0, 90, 0], concreteTexture);
building2_group.add(building2_body_divider);


const building2_roof = createTriangularRoof(0xb37c72, 120, 50, 352, [25, 250, 0], [0, 90, 0]);
building2_group.add(building2_roof);

const building2_roof_bottom = createBox(0x9e9e9e, [120, 5, 305], [0, 250, 0], [0, 90, 0], concreteTexture);
building2_group.add(building2_roof_bottom);

const building2_road = createBox(0x9e9e9e, [80, 5, 510], [-40, 5, 85], [0, 0, 0], roadTexture);
building2_group.add(building2_road);

function createBox(color, size, position, rotation, textureMap = null) {
    // Create geometry
    const geometry = new THREE.BoxGeometry(size[0], size[1], size[2]);
    // Create material
    const materialProperties = {};
    if (textureMap) {
        materialProperties.map = textureMap;
    } else {
        materialProperties.color = color;
    }
    const material = new THREE.MeshStandardMaterial(materialProperties);
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

function createCone(color, baseRadius, height, segments, position, rotation, textureMap = null) {
    // Create geometry
    const geometry = new THREE.ConeGeometry(baseRadius, height, segments);
    // Create material
    const materialProperties = {};
    if (textureMap) {
        materialProperties.map = textureMap;
    } else {
        materialProperties.color = color;
    }
    const material = new THREE.MeshStandardMaterial(materialProperties);
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

function createTriangularRoof(color, width, height, length, position, rotation, textureMap = null) {
    // Define the vertices for the triangular roof
    const vertices = new Float32Array([
        // Front triangle
        -width / 2, 0, -length / 2,  // Bottom-left
         width / 2, 0, -length / 2,  // Bottom-right
         0, height, -length / 2,     // Top

        // Back triangle
        -width / 2, 0, length / 2,   // Bottom-left
         width / 2, 0, length / 2,   // Bottom-right
         0, height, length / 2,      // Top

        // Connecting sides (ensure correct winding for normals)
        // Side 1 (left)
        -width / 2, 0, -length / 2,
         0, height, -length / 2,
        -width / 2, 0, length / 2,

        -width / 2, 0, length / 2,
         0, height, -length / 2,
         0, height, length / 2,

        // Side 2 (right)
         width / 2, 0, -length / 2,
         width / 2, 0, length / 2,
         0, height, -length / 2,

         width / 2, 0, length / 2,
         0, height, length / 2,
         0, height, -length / 2
    ]);

    // Define UV coordinates (example, may need adjustment based on texture)
    const uvs = new Float32Array([
        // Front face
        0, 0, 1, 0, 0.5, 1,
        // Back face
        0, 0, 1, 0, 0.5, 1,
        // Side 1
        0, 0, 1, 0, 0, 1,
        1, 0, 1, 1, 0, 1,
        // Side 2
        0, 0, 1, 0, 0, 1,
        1, 0, 1, 1, 0, 1,
    ]);

    // Create the geometry and set its vertices
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2)); // Add UVs
    geometry.computeVertexNormals(); // Compute normals for lighting

    // Create the material and mesh
    const materialProperties = { side: THREE.DoubleSide };
    if (textureMap) {
        materialProperties.map = textureMap;
    } else {
        materialProperties.color = color;
    }
    const material = new THREE.MeshStandardMaterial(materialProperties);
    const roof = new THREE.Mesh(geometry, material);

    // Set position
    roof.position.set(position[0], position[1], position[2]);

    // Convert rotation from degrees to radians and set rotation
    roof.rotation.set(
        THREE.MathUtils.degToRad(rotation[0]),
        THREE.MathUtils.degToRad(rotation[1]),
        THREE.MathUtils.degToRad(rotation[2])
    );

    return roof;
}

function createCylinder(color, radius, thickness, segments, position, rotation, textureMap = null) {
    // Create geometry
    const geometry = new THREE.CylinderGeometry(radius, radius, thickness, segments);
    // Create material
    const materialProperties = {};
    if (textureMap) {
        materialProperties.map = textureMap;
    } else {
        materialProperties.color = color;
    }
    const material = new THREE.MeshStandardMaterial(materialProperties);
    const cylinder = new THREE.Mesh(geometry, material);

    // Set position
    cylinder.position.set(position[0], position[1], position[2]);

    // Convert rotation from degrees to radians and set rotation
    cylinder.rotation.set(
        THREE.MathUtils.degToRad(rotation[0]),
        THREE.MathUtils.degToRad(rotation[1]),
        THREE.MathUtils.degToRad(rotation[2])
    );

    return cylinder;
}

function createClockHand(length, width, depth, color)
{
    // Create geometry for the hand (a simple box).
    // We want the hand to extend along its Y-axis from y=0 to y=length.
    const geometry = new THREE.BoxGeometry(width, length, depth);
    // Translate the geometry so that its base (pivot point) is at the origin (0,0,0).
    geometry.translate(0, length / 2, 0);

    const material = new THREE.MeshStandardMaterial({ color: color });
    const hand = new THREE.Mesh(geometry, material);
    return hand;
}

//BUI_DUY_THAI
const brick1Texture = textureLoader.load('textures/brick1-texture.jpg');
const brick2Texture = textureLoader.load('textures/brick2-texture.jpg');
const brick3Texture = textureLoader.load('textures/brick3-texture.jpg');

brick1Texture.wrapS = THREE.RepeatWrapping;
brick1Texture.wrapT = THREE.RepeatWrapping;
brick1Texture.repeat.set(2, 2);

brick2Texture.wrapS = THREE.RepeatWrapping;
brick2Texture.wrapT = THREE.RepeatWrapping;
brick2Texture.repeat.set(2, 2);

brick3Texture.wrapS = THREE.RepeatWrapping;
brick3Texture.wrapT = THREE.RepeatWrapping;
brick3Texture.repeat.set(2, 2);

//add a building in the center 
const building = new THREE.Group();
building.position.set(300, 100, 300);
scene.add(building);

// Base building material with brick1 texture
const buildingMaterial = new THREE.MeshStandardMaterial({
    map: brick1Texture,
    roughness: 0.7
});

const buildingGeometry = new THREE.BoxGeometry(200, 300, 300);
const buildingMesh = new THREE.Mesh(buildingGeometry, buildingMaterial);
building.add(buildingMesh);

// Create materials for different levels with brick1 texture
const level1Material = new THREE.MeshStandardMaterial({
    map: brick1Texture,
    roughness: 0.7
});
const level2Material = new THREE.MeshStandardMaterial({
    map: brick1Texture,
    roughness: 0.7
});

// Add upper levels to the central building - stacking boxes
// First level - large box
const level1Geometry = new THREE.BoxGeometry(160, 150, 240);
const level1Mesh = new THREE.Mesh(level1Geometry, level1Material);
level1Mesh.position.y = 225;
building.add(level1Mesh);

// Add windows to level 1
const window1Material = new THREE.MeshStandardMaterial({ 
    color: 0x000000,
    roughness: 0.2,
    metalness: 0.8
});

// Windows for level 1
const window1Geometry = new THREE.BoxGeometry(30, 40, 5);

// Front windows for level 1
const frontWindow1Left = new THREE.Mesh(window1Geometry, window1Material);
frontWindow1Left.position.set(-40, 0, 120);
level1Mesh.add(frontWindow1Left);

const frontWindow1Right = new THREE.Mesh(window1Geometry, window1Material);
frontWindow1Right.position.set(40, 0, 120);
level1Mesh.add(frontWindow1Right);

// Back windows for level 1
const backWindow1Left = new THREE.Mesh(window1Geometry, window1Material);
backWindow1Left.position.set(-40, 0, -120);
level1Mesh.add(backWindow1Left);

const backWindow1Right = new THREE.Mesh(window1Geometry, window1Material);
backWindow1Right.position.set(40, 0, -120);
level1Mesh.add(backWindow1Right);

// Right side windows for level 1
const rightWindow1Geometry = new THREE.BoxGeometry(5, 40, 30);
const rightWindow1Front = new THREE.Mesh(rightWindow1Geometry, window1Material);
rightWindow1Front.position.set(80, 0, -60);
level1Mesh.add(rightWindow1Front);

const rightWindow1Back = new THREE.Mesh(rightWindow1Geometry, window1Material);
rightWindow1Back.position.set(80, 0, 60);
level1Mesh.add(rightWindow1Back);

// Left side windows for level 1
const leftWindow1Front = new THREE.Mesh(rightWindow1Geometry, window1Material);
leftWindow1Front.position.set(-80, 0, -60);
level1Mesh.add(leftWindow1Front);

const leftWindow1Back = new THREE.Mesh(rightWindow1Geometry, window1Material);
leftWindow1Back.position.set(-80, 0, 60);
level1Mesh.add(leftWindow1Back);

// Second level - medium box
const level2Geometry = new THREE.BoxGeometry(140, 120, 200);
const level2Mesh = new THREE.Mesh(level2Geometry, level2Material);
level2Mesh.position.y = 360;
building.add(level2Mesh);

// Windows for level 2
const window2Geometry = new THREE.BoxGeometry(25, 35, 5);

// Front windows for level 2
const frontWindow2Left = new THREE.Mesh(window2Geometry, window1Material);
frontWindow2Left.position.set(-35, 0, 100);
level2Mesh.add(frontWindow2Left);

const frontWindow2Right = new THREE.Mesh(window2Geometry, window1Material);
frontWindow2Right.position.set(35, 0, 100);
level2Mesh.add(frontWindow2Right);

// Back windows for level 2
const backWindow2Left = new THREE.Mesh(window2Geometry, window1Material);
backWindow2Left.position.set(-35, 0, -100);
level2Mesh.add(backWindow2Left);

const backWindow2Right = new THREE.Mesh(window2Geometry, window1Material);
backWindow2Right.position.set(35, 0, -100);
level2Mesh.add(backWindow2Right);

// Right side windows for level 2
const rightWindow2Geometry = new THREE.BoxGeometry(5, 35, 25);
const rightWindow2Front = new THREE.Mesh(rightWindow2Geometry, window1Material);
rightWindow2Front.position.set(70, 0, -50);
level2Mesh.add(rightWindow2Front);

const rightWindow2Back = new THREE.Mesh(rightWindow2Geometry, window1Material);
rightWindow2Back.position.set(70, 0, 50);
level2Mesh.add(rightWindow2Back);

// Left side windows for level 2
const leftWindow2Front = new THREE.Mesh(rightWindow2Geometry, window1Material);
leftWindow2Front.position.set(-70, 0, -50);
level2Mesh.add(leftWindow2Front);

const leftWindow2Back = new THREE.Mesh(rightWindow2Geometry, window1Material);
leftWindow2Back.position.set(-70, 0, 50);
level2Mesh.add(leftWindow2Back);

// Create simplified top tower structure
const topTowerGroup = new THREE.Group();
topTowerGroup.position.y = 420;

// Base section - octagonal with brick1 texture
const baseTowerGeometry = new THREE.CylinderGeometry(30, 35, 80, 8);
const baseTowerMesh = new THREE.Mesh(baseTowerGeometry, new THREE.MeshStandardMaterial({
    map: brick1Texture,
    roughness: 0.7
}));
baseTowerMesh.position.y = 40;
topTowerGroup.add(baseTowerMesh);

// Main spire
const spireGeometry = new THREE.CylinderGeometry(3, 8, 50, 8);
const spireMesh = new THREE.Mesh(spireGeometry, new THREE.MeshStandardMaterial({ color: 0x8b4513 }));
spireMesh.position.y = 105;
topTowerGroup.add(spireMesh);

// Spire top
const spireTopGeometry = new THREE.ConeGeometry(4, 20, 8);
const spireTop = new THREE.Mesh(spireTopGeometry, new THREE.MeshStandardMaterial({ color: 0x8b4513 }));
spireTop.position.y = 140;
topTowerGroup.add(spireTop);

building.add(topTowerGroup);

// Add connecting cylinder from spire top to pinwheel
const connectorGeometry = new THREE.CylinderGeometry(1, 1, 30, 16);
const connectorMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Match spire color
const connector = new THREE.Mesh(connectorGeometry, connectorMaterial);
connector.position.y = 150; // Position it higher above the spire top
topTowerGroup.add(connector);

// Add pinwheel on top of the castle
const pinwheelGroup = new THREE.Group();
pinwheelGroup.position.y = 165; // Move it higher to create a gap
pinwheelGroup.rotation.x = Math.PI / 2; // Rotate 90 degrees around X to make it face outward

// Create the center hub
const hubGeometry = new THREE.CylinderGeometry(2, 2, 4, 16);
const hubMaterial = new THREE.MeshStandardMaterial({ color: 0xD4AF37 }); // Gold color
const hub = new THREE.Mesh(hubGeometry, hubMaterial);
pinwheelGroup.add(hub);

// Create the blades
const bladeGeometry = new THREE.BoxGeometry(20, 1, 5);
const bladeMaterial = new THREE.MeshStandardMaterial({ color: 0xFF0000 }); // Red color

for (let i = 0; i < 4; i++) {
    const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
    blade.rotation.y = (i * Math.PI) / 2;
    pinwheelGroup.add(blade);
}

topTowerGroup.add(pinwheelGroup);

// Create detailed battlements function
const createBattlements = (width, height, x, y, z) => {
    const battlementGroup = new THREE.Group();
    const segments = Math.floor(width / 20);
    
    for (let i = 0; i < segments; i++) {
        // Merlon (raised part)
        const merlonGeometry = new THREE.BoxGeometry(8, height + 15, 20);
        const merlonMaterial = new THREE.MeshStandardMaterial({
            map: brick2Texture,
            roughness: 0.7
        });
        const merlon = new THREE.Mesh(merlonGeometry, merlonMaterial);
        merlon.position.set(x - width/2 + i * 20, y + height/2, z);
        battlementGroup.add(merlon);

        // Arrow slit
        const slitGeometry = new THREE.BoxGeometry(2, 30, 5);
        const slitMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
        const slit = new THREE.Mesh(slitGeometry, slitMaterial);
        slit.position.set(x - width/2 + i * 20, y + height/4, z + 8);
        battlementGroup.add(slit);
    }
    scene.add(battlementGroup);
};

// Enhanced castle wall function
const createEnhancedWall = (width, height, depth, x, y, z) => {
    const wallGroup = new THREE.Group();
    
    // Main wall with brick2 texture
    const wallGeometry = new THREE.BoxGeometry(width, height, depth);
    const wallMaterial = new THREE.MeshStandardMaterial({
        map: brick2Texture,
        roughness: 0.7
    });
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    wallGroup.add(wall);

    // Add stone texture effect with smaller blocks
    const blockSize = 20;
    const blocksX = Math.floor(width / blockSize);
    const blocksY = Math.floor(height / blockSize);

    // Determine which side the blocks should face based on wall position
    const isZAxis = Math.abs(z - 300) > Math.abs(x - 300);
    
    for (let i = 0; i < blocksX; i++) {
        for (let j = 0; j < blocksY; j++) {
            const blockGeometry = new THREE.BoxGeometry(
                isZAxis ? blockSize - 2 : 5,
                blockSize - 2,
                isZAxis ? 5 : blockSize - 2
            );
            const blockMaterial = new THREE.MeshStandardMaterial({
                map: brick2Texture,
                roughness: 0.7
            });
            const block = new THREE.Mesh(blockGeometry, blockMaterial);
            
            if (isZAxis) {
                block.position.set(
                    -width/2 + i * blockSize + blockSize/2,
                    -height/2 + j * blockSize + blockSize/2,
                    (z < 300 ? -1 : 1) * (depth/2 + 1)
                );
            } else {
                block.position.set(
                    (x < 300 ? -1 : 1) * (depth/2 + 1),
                    -height/2 + j * blockSize + blockSize/2,
                    -width/2 + i * blockSize + blockSize/2
                );
            }
            wallGroup.add(block);
        }
    }

    wallGroup.position.set(x, y, z);
    scene.add(wallGroup);
    
    // Add battlements on top
    createBattlements(width, height, x, y, z);
};

// Create a medieval gate function
const createMedievalGate = (x, z, isRightSide) => {
    const gateGroup = new THREE.Group();

    // Main gate structure
    const gateHeight = 120;
    const gateWidth = 80;
    const gateDepth = 40;

    // Gate towers with brick3 texture
    const towerGeometry = new THREE.CylinderGeometry(20, 25, 150, 8);
    const towerMaterial = new THREE.MeshStandardMaterial({
        map: brick3Texture,
        roughness: 0.7
    });
    
    // Left tower
    const leftTower = new THREE.Mesh(towerGeometry, towerMaterial);
    leftTower.position.set(-gateWidth/2 - 10, 75, 0);
    gateGroup.add(leftTower);
    
    // Right tower
    const rightTower = new THREE.Mesh(towerGeometry, towerMaterial);
    rightTower.position.set(gateWidth/2 + 10, 75, 0);
    gateGroup.add(rightTower);

    // Tower roofs
    const roofGeometry = new THREE.ConeGeometry(25, 40, 8);
    const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 });
    
    const leftRoof = new THREE.Mesh(roofGeometry, roofMaterial);
    leftRoof.position.set(-gateWidth/2 - 10, 160, 0);
    gateGroup.add(leftRoof);
    
    const rightRoof = new THREE.Mesh(roofGeometry, roofMaterial);
    rightRoof.position.set(gateWidth/2 + 10, 160, 0);
    gateGroup.add(rightRoof);

    // Load concrete texture
    const concreteTexture = textureLoader.load('textures/concrete.jpg');
    concreteTexture.wrapS = THREE.RepeatWrapping;
    concreteTexture.wrapT = THREE.RepeatWrapping;
    concreteTexture.repeat.set(1, 1);

    // Rectangular entrance with concrete texture
    const entranceHeight = 100;
    const entranceDepth = 40;
    
    // Back wall of the gate with rectangular opening
    const wallGeometry = new THREE.BoxGeometry(gateWidth, entranceHeight, 5);
    const wallMaterial = new THREE.MeshStandardMaterial({
        map: concreteTexture,
        roughness: 0.7
    });
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    wall.position.set(0, entranceHeight/2, -entranceDepth/2);
    gateGroup.add(wall);

    // Top of the gate (rectangular)
    const topGeometry = new THREE.BoxGeometry(gateWidth, 20, entranceDepth);
    const topMesh = new THREE.Mesh(topGeometry, wallMaterial);
    topMesh.position.set(0, entranceHeight, 0);
    gateGroup.add(topMesh);

    // Add decorative elements
    // Battlements on top with concrete texture
    const battlementCount = Math.floor(gateWidth / 20);
    for (let i = 0; i < battlementCount; i++) {
        const merlonGeometry = new THREE.BoxGeometry(8, 20, entranceDepth);
        const merlon = new THREE.Mesh(merlonGeometry, wallMaterial);
        merlon.position.set(
            -gateWidth/2 + i * 20 + 10,
            entranceHeight + 20,
            0
        );
        gateGroup.add(merlon);
    }

    // Add torches
    const torchGeometry = new THREE.CylinderGeometry(2, 2, 20, 8);
    const torchMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    
    const leftTorch = new THREE.Mesh(torchGeometry, torchMaterial);
    leftTorch.position.set(-gateWidth/2 + 20, entranceHeight/2, -entranceDepth/2 + 5);
    gateGroup.add(leftTorch);
    
    const rightTorch = new THREE.Mesh(torchGeometry, torchMaterial);
    rightTorch.position.set(gateWidth/2 - 20, entranceHeight/2, -entranceDepth/2 + 5);
    gateGroup.add(rightTorch);

    // Torch flames (point lights)
    const leftLight = new THREE.PointLight(0xff6600, 1, 50);
    leftLight.position.set(-gateWidth/2 + 20, entranceHeight/2 + 10, -entranceDepth/2 + 5);
    gateGroup.add(leftLight);
    
    const rightLight = new THREE.PointLight(0xff6600, 1, 50);
    rightLight.position.set(gateWidth/2 - 20, entranceHeight/2 + 10, -entranceDepth/2 + 5);
    gateGroup.add(rightLight);

    // Position and rotate the entire gate
    gateGroup.position.set(x, 0, z);
    gateGroup.rotation.y = isRightSide ? -Math.PI/2 : Math.PI/2;
    scene.add(gateGroup);
};

// Create enhanced castle walls with corrected positions
createEnhancedWall(400, 100, 20, 300, 50, 150); // Front wall
createEnhancedWall(400, 100, 20, 300, 50, 450); // Back wall

// Create the side gates 
createMedievalGate(150, 300, false); // Left gate (facing outward)
createMedievalGate(450, 300, true);  // Right gate (facing outward)

// Create towers with brick3 texture
const createEnhancedTower = (x, y, z, height = 150) => {
    const towerGroup = new THREE.Group();
    
    // Main tower body with octagonal shape
    const towerGeometry = new THREE.CylinderGeometry(35, 40, height, 8);
    const towerMaterial = new THREE.MeshStandardMaterial({
        map: brick3Texture,
        roughness: 0.7
    });
    const tower = new THREE.Mesh(towerGeometry, towerMaterial);
    
    // Decorative top
    const topGeometry = new THREE.CylinderGeometry(45, 35, 30, 8);
    const top = new THREE.Mesh(topGeometry, towerMaterial);
    top.position.y = height/2 + 15;
    
    // Conical roof
    const roofGeometry = new THREE.ConeGeometry(45, 80, 8);
    const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = height/2 + 60;

    towerGroup.add(tower);
    towerGroup.add(top);
    towerGroup.add(roof);
    
    towerGroup.position.set(x, y, z);
    scene.add(towerGroup);
};

// Create enhanced castle walls with corrected positions
createEnhancedWall(400, 100, 20, 300, 50, 150); // Front wall
createEnhancedWall(400, 100, 20, 300, 50, 450); // Back wall

// Create the side gates 
createMedievalGate(150, 300, false); // Left gate (facing outward)
createMedievalGate(450, 300, true);  // Right gate (facing outward)

// Create towers with brick3 texture
createEnhancedTower(150, 100, 150, 360); // Front-left tower
createEnhancedTower(450, 100, 150, 360); // Front-right tower
createEnhancedTower(150, 100, 450, 360); // Back-left tower
createEnhancedTower(450, 100, 450, 360); // Back-right tower

// Function to create connecting walls between gates and towers
const createConnectingWall = (startX, startZ, endX, endZ, height = 100) => {
    const wallGroup = new THREE.Group();
    
    // Calculate wall length and angle
    const dx = endX - startX;
    const dz = endZ - startZ;
    const length = Math.sqrt(dx * dx + dz * dz);
    const angle = Math.atan2(dz, dx);
    
    // Create main wall with brick2 texture
    const wallGeometry = new THREE.BoxGeometry(length, height, 20);
    const wallMaterial = new THREE.MeshStandardMaterial({
        map: brick2Texture,
        roughness: 0.7
    });
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    
    // Add battlements
    const battlementCount = Math.floor(length / 20);
    for (let i = 0; i < battlementCount; i++) {
        const merlonGeometry = new THREE.BoxGeometry(8, 20, 20);
        const merlon = new THREE.Mesh(merlonGeometry, wallMaterial);
        merlon.position.set(
            -length/2 + i * 20 + 10,
            height/2 + 10,
            0
        );
        wall.add(merlon);
    }
    
    wallGroup.add(wall);
    
    // Position and rotate the wall
    wallGroup.position.set((startX + endX) / 2, height/2, (startZ + endZ) / 2);
    wallGroup.rotation.y = angle;
    
    scene.add(wallGroup);
};

// Left side connections
createConnectingWall(150, 300, 150, 150, 150);
createConnectingWall(150, 300, 150, 450, 150);

// Right side connections
createConnectingWall(450, 300, 450, 150, 150);
createConnectingWall(450, 300, 450, 450, 150);

// create a yard
const yard = new THREE.BoxGeometry(600, 12, 600);
const yardMaterial = new THREE.MeshStandardMaterial({ color: 0xa3b18a });
const yardMesh = new THREE.Mesh(yard, yardMaterial);
yardMesh.position.set(300, 0, 300);
scene.add(yardMesh);

//TRAN_GIA_HUY
// Create the giant house group at the same plot position (-350, 0, 350)
const giantHouseGroup = new THREE.Group();
giantHouseGroup.position.set(-350, 0, 350);
scene.add(giantHouseGroup);

// Helper colors and dimensions
const WALL_COLOR_GIANT = 0xE8E8E8;
const TRIM_COLOR_GIANT = 0xAAAAAA;
const ROOF_COLOR_GIANT = 0x8B0000;
const WINDOW_FRAME_GIANT = 0x333333;
const WINDOW_GLASS_GIANT = 0xAADDFF;
const DOOR_COLOR_GIANT = 0x5A2E0F;

const BASE_WIDTH = 350;
const BASE_DEPTH = 350;

// --- START ENHANCEMENTS ---

// 0. Foundation
const foundationHeight = 20;
const foundationColor = 0x606060;

const foundationGiant = createBox(
  foundationColor,
  [BASE_WIDTH + 10, foundationHeight, BASE_DEPTH + 10],
  [0, foundationHeight / 2, 0],
  [0, 0, 0]
);
giantHouseGroup.add(foundationGiant);

// Helper: Create window sill and lintel
function createWindowDetails(baseX, baseY, baseZ, windowWidth, windowHeight, windowDepth, rotationY = 0) {
  const sillHeight = 4;
  const lintelHeight = 6;

  const sill = createBox(
    TRIM_COLOR_GIANT,
    [windowWidth + 4, sillHeight, windowDepth / 2],
    [baseX, baseY - (windowHeight / 2) - (sillHeight / 2), baseZ],
    [0, rotationY, 0]
  );

  const lintel = createBox(
    TRIM_COLOR_GIANT,
    [windowWidth + 4, lintelHeight, windowDepth / 2],
    [baseX, baseY + (windowHeight / 2) + (lintelHeight / 2), baseZ],
    [0, rotationY, 0]
  );

  return [sill, lintel];
}

// Offset Y cho toàn bộ tầng
const yOffset = foundationHeight;

// --- END ENHANCEMENTS ---

// 1. Ground Floor
const groundFloorHeight = 300;
const groundFloorGiant = createBox(
  WALL_COLOR_GIANT,
  [BASE_WIDTH, groundFloorHeight, BASE_DEPTH],
  [0, yOffset + groundFloorHeight / 2, 0],
  [0, 0, 0]
);
giantHouseGroup.add(groundFloorGiant);

// 2. Floor Separator 1
const separator1Height = 4;
const separator1Giant = createBox(
  TRIM_COLOR_GIANT,
  [BASE_WIDTH, separator1Height, BASE_DEPTH],
  [0, yOffset + groundFloorHeight + separator1Height / 2, 0],
  [0, 0, 0]
);
giantHouseGroup.add(separator1Giant);

// 3. First Floor
const firstFloorHeight = 200;
const firstFloorYBase = yOffset + groundFloorHeight + separator1Height;

const firstFloorGiant = createBox(
  WALL_COLOR_GIANT,
  [BASE_WIDTH, firstFloorHeight, BASE_DEPTH],
  [0, firstFloorYBase + firstFloorHeight / 2, 0],
  [0, 0, 0]
);
giantHouseGroup.add(firstFloorGiant);

// 4. Floor Separator 2
const separator2Height = 3;
const separator2Giant = createBox(
  TRIM_COLOR_GIANT,
  [BASE_WIDTH, separator2Height, BASE_DEPTH],
  [0, firstFloorYBase + firstFloorHeight + separator2Height / 2, 0],
  [0, 0, 0]
);
giantHouseGroup.add(separator2Giant);

// 5. Second Floor
const secondFloorHeight = 200;
const secondFloorYBase = firstFloorYBase + firstFloorHeight + separator2Height;

const secondFloorGiant = createBox(
  WALL_COLOR_GIANT,
  [BASE_WIDTH, secondFloorHeight, BASE_DEPTH],
  [0, secondFloorYBase + secondFloorHeight / 2, 0],
  [0, 0, 0]
);
giantHouseGroup.add(secondFloorGiant);

// 6. Floor Separator 3
const separator3Height = 3;
const separator3Giant = createBox(
  TRIM_COLOR_GIANT,
  [BASE_WIDTH, separator3Height, BASE_DEPTH],
  [0, secondFloorYBase + secondFloorHeight + separator3Height / 2, 0],
  [0, 0, 0]
);
giantHouseGroup.add(separator3Giant);

// 7. Third Floor
const thirdFloorHeight = 200;
const thirdFloorYBase = secondFloorYBase + secondFloorHeight + separator3Height;

const thirdFloorGiant = createBox(
  WALL_COLOR_GIANT,
  [BASE_WIDTH, thirdFloorHeight, BASE_DEPTH],
  [0, thirdFloorYBase + thirdFloorHeight / 2, 0],
  [0, 0, 0]
);
giantHouseGroup.add(thirdFloorGiant);

// 8. Separator 4
const separator4Height = 3;
const fourthFloorYBase = thirdFloorYBase + thirdFloorHeight + separator4Height;

const separator4Giant = createBox(
  TRIM_COLOR_GIANT,
  [BASE_WIDTH, separator4Height, BASE_DEPTH],
  [0, fourthFloorYBase - separator4Height / 2, 0],
  [0, 0, 0]
);
giantHouseGroup.add(separator4Giant);

// 9. Fourth Floor
const fourthFloorHeight = 200;

const fourthFloorGiant = createBox(
  WALL_COLOR_GIANT,
  [BASE_WIDTH, fourthFloorHeight, BASE_DEPTH],
  [0, fourthFloorYBase + fourthFloorHeight / 2, 0],
  [0, 0, 0]
);
giantHouseGroup.add(fourthFloorGiant);

// 10. Separator 5
const separator5Height = 3;
const fifthFloorYBase = fourthFloorYBase + fourthFloorHeight + separator5Height;

const separator5Giant = createBox(
  TRIM_COLOR_GIANT,
  [BASE_WIDTH, separator5Height, BASE_DEPTH],
  [0, fifthFloorYBase - separator5Height / 2, 0],
  [0, 0, 0]
);
giantHouseGroup.add(separator5Giant);

// 11. Fifth Floor
const fifthFloorHeight = 100;

const fifthFloorGiant = createBox(
  WALL_COLOR_GIANT,
  [BASE_WIDTH, fifthFloorHeight, BASE_DEPTH],
  [0, fifthFloorYBase + fifthFloorHeight / 2, 0],
  [0, 0, 0]
);
giantHouseGroup.add(fifthFloorGiant);

function createWindow(x, y, z, rotationY = 0) {
  const frameThickness = 2;
  const windowWidth = 20;
  const windowHeight = 30;
  const windowDepth = 1;

  // 1) Tạo khung ở đúng mặt tường (giữ nguyên)
  const frame = createBox(
    WINDOW_FRAME_GIANT,
    [windowWidth, windowHeight, windowDepth],
    [x, y, z],
    [0, rotationY, 0]
  );

  // 2) Tính offset cho mặt kính: local-forward = (0,0, windowDepth/2)
  const glassOffset = new THREE.Vector3(0, 0, windowDepth / 2);
  //    xoay offset này quanh trục Y theo rotationY
  glassOffset.applyAxisAngle(new THREE.Vector3(0, 1, 0), rotationY);

  // 3) Cộng vào vị trí gốc để ra vị trí tuyệt đối của kính
  const glassPos = new THREE.Vector3(x, y, z).add(glassOffset);

  // 4) Tạo kính với pivot ở center, rotation giống khung
  const glass = createBox(
    WINDOW_GLASS_GIANT,
    [windowWidth - frameThickness, windowHeight - frameThickness, windowDepth / 2],
    glassPos.toArray(),
    [0, rotationY, 0]
  );

  return [frame, glass];
}

function addWindowsToFloor(yBase, floorHeight, floorDepth, floorWidth) {
  const windowSpacing = 35;
  const colsFront = Math.floor(floorWidth / windowSpacing);
  const rows = Math.floor(floorHeight / windowSpacing);
  const marginX = (floorWidth - colsFront * windowSpacing) / 2;
  const marginY = (floorHeight - rows * windowSpacing) / 2;

  // trước/sau như cũ
  const zOffset = floorDepth / 2 + 1;
  for (let i = 0; i < colsFront; i++) {
    for (let j = 0; j < rows; j++) {
      const x = -floorWidth / 2 + marginX + i * windowSpacing + windowSpacing / 2;
      const y = yBase + marginY + j * windowSpacing + windowSpacing / 2;
      // Front (hướng Z dương)
      createWindow(x, y, zOffset, 0).forEach(w => giantHouseGroup.add(w));
      // Back  (hướng Z âm)
      createWindow(x, y, -zOffset, Math.PI).forEach(w => giantHouseGroup.add(w));
    }
  }

}
// 12. Side Glass Panels – mỗi tầng 1 mặt kính to ở hai bên
function addGlassPanelsToFloor(yBase, floorHeight, floorDepth, floorWidth) {
  const glassThickness = 1;
  const glassHeight = floorHeight;
  const xOffset = floorWidth / 2 + glassThickness / 2;
  const yCenter = yBase + floorHeight / 2;

  // Bên trái (X âm), không xoay
  const leftGlass = createBox(
    WINDOW_GLASS_GIANT,
    [glassThickness, glassHeight, floorDepth],               // width, height, depth
    [-xOffset, yCenter, 0],
    [0, 0, 0]                                                // no rotation
  );
  giantHouseGroup.add(leftGlass);

  // Bên phải (X dương), xoay 180° cho mặt trong cùng hướng
  const rightGlass = createBox(
    WINDOW_GLASS_GIANT,
    [glassThickness, glassHeight, floorDepth],
    [xOffset, yCenter, 0],
    [0, 0, 0]                                          // quay 180° để mặt kính ngược lại
  );
  giantHouseGroup.add(rightGlass);
}



// Gọi hàm cho từng tầng ngay sau khi đã thêm cửa sổ
const floors = [
  { y: yOffset, h: groundFloorHeight },
  { y: firstFloorYBase, h: firstFloorHeight },
  { y: secondFloorYBase, h: secondFloorHeight },
  { y: thirdFloorYBase, h: thirdFloorHeight },
  { y: fourthFloorYBase, h: fourthFloorHeight },
  { y: fifthFloorYBase, h: fifthFloorHeight },
];

floors.forEach(floor => {
  addGlassPanelsToFloor(floor.y, floor.h, BASE_DEPTH, BASE_WIDTH);
});


addWindowsToFloor(yOffset, groundFloorHeight, BASE_DEPTH, BASE_WIDTH);
addWindowsToFloor(firstFloorYBase, firstFloorHeight, BASE_DEPTH, BASE_WIDTH);
addWindowsToFloor(secondFloorYBase, secondFloorHeight, BASE_DEPTH, BASE_WIDTH);
addWindowsToFloor(thirdFloorYBase, thirdFloorHeight, BASE_DEPTH, BASE_WIDTH);
addWindowsToFloor(fourthFloorYBase, fourthFloorHeight, BASE_DEPTH, BASE_WIDTH);
addWindowsToFloor(fifthFloorYBase, fifthFloorHeight, BASE_DEPTH, BASE_WIDTH);



// -------------------- HELIPAD --------------------
const helipadGroup = new THREE.Group();

// 1. Circle (vòng tròn)
const helipadRadius = 100; // Tăng bán kính
const helipadThickness = 10;

const helipadGeometry = new THREE.RingGeometry(helipadRadius - helipadThickness, helipadRadius, 64);
const helipadMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
const helipadRing = new THREE.Mesh(helipadGeometry, helipadMaterial);
helipadRing.rotation.x = -Math.PI / 2; // Xoay nằm ngang
helipadRing.position.y = fifthFloorYBase + fifthFloorHeight + 0.1; // Đặt trên nóc nhà
helipadGroup.add(helipadRing);

// 2. Chữ H
const hWidth = 50;
const hHeight = 100;
const hThickness = 10;

// Thanh dọc trái
const leftLine = createBox(0xff0000, [hThickness, hHeight, hThickness], [-hWidth, 0, 0], [0, 0, 0]);
// Thanh dọc phải
const rightLine = createBox(0xff0000, [hThickness, hHeight, hThickness], [hWidth, 0, 0], [0, 0, 0]);
// Thanh ngang giữa
const middleLine = createBox(0xff0000, [hWidth * 2, hThickness, hThickness], [0, 0, 0], [0, 0, 0]);

// Tạo nhóm chữ H và xoay nó nằm ngang
const hGroup = new THREE.Group();
hGroup.add(leftLine);
hGroup.add(rightLine);
hGroup.add(middleLine);

hGroup.rotation.x = -Math.PI / 2; // Xoay nằm ngang
hGroup.position.y = fifthFloorYBase + fifthFloorHeight + 0.2; // Đặt trên nóc (nhỉnh hơn vòng tròn 1 chút)
helipadGroup.add(hGroup);

// Đặt nhóm helipad đúng vị trí
giantHouseGroup.add(helipadGroup);
// -------------------- END HELIPAD --------------------

// -------------------- ADVANCED HELICOPTER --------------------
const heli = new THREE.Group();

// 1. Fuselage: 2 nửa ellipsoid + ống tròn giữa
const fuselageMat = new THREE.MeshStandardMaterial({
  color: 0x444444, metalness: 0.6, roughness: 0.4
});
// Trụ giữa
const midBodyGeo = new THREE.CylinderGeometry(4, 4, 40, 32, 1, true);
const midBody = new THREE.Mesh(midBodyGeo, fuselageMat);
midBody.rotation.z = Math.PI / 2;
heli.add(midBody);
// Mũi trước
const noseFrontGeo = new THREE.SphereGeometry(4, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
const noseFront = new THREE.Mesh(noseFrontGeo, fuselageMat);
noseFront.rotation.z = Math.PI / 2;
noseFront.position.x = 20;
heli.add(noseFront);
// Đuôi sau
const noseBackGeo = new THREE.SphereGeometry(3, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
const noseBack = new THREE.Mesh(noseBackGeo, fuselageMat);
noseBack.rotation.z = Math.PI / 2;
noseBack.position.x = -20;
heli.add(noseBack);

// 2. Cabin kính
const cabinMat = new THREE.MeshStandardMaterial({
  color: 0x88ccee, metalness: 0.1, roughness: 0.2, opacity: 0.7, transparent: true
});
const cabinGeo = new THREE.BoxGeometry(12, 8, 8);
const cabin = new THREE.Mesh(cabinGeo, cabinMat);
cabin.position.set(8, 0, 0);
heli.add(cabin);

// 3. Skids (chân ống)
function makeSkid(offsetX, offsetZ) {
  const pipeMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.7, roughness: 0.3 });
  const tubeGeo = new THREE.CylinderGeometry(0.5, 0.5, 30, 16);
  const tube = new THREE.Mesh(tubeGeo, pipeMat);
  tube.rotation.z = Math.PI / 2;
  tube.position.set(offsetX, -6, offsetZ);
  // Giá đỡ dọc
  const postGeo = new THREE.CylinderGeometry(0.3, 0.3, 6, 12);
  const postL = new THREE.Mesh(postGeo, pipeMat);
  postL.position.set(offsetX - 5, -3, offsetZ);
  const postR = postL.clone();
  postR.position.x = offsetX + 5;
  return [tube, postL, postR];
}
makeSkid(0, 6).forEach(m => heli.add(m));
makeSkid(0, -6).forEach(m => heli.add(m));

// 4. Main rotor hub + blades


// 5. Tail boom
const boomGeo = new THREE.CylinderGeometry(0.8, 0.8, 60, 16);
const boom = new THREE.Mesh(boomGeo, fuselageMat);
boom.rotation.z = Math.PI / 2;
boom.position.set(-30, 0, 0);
heli.add(boom);

// 6. Tail rotor
const tHubGeo = new THREE.CylinderGeometry(0.5, 0.5, 1, 16);
const tHub = new THREE.Mesh(tHubGeo, fuselageMat);
tHub.position.set(-60, 0, 3);
heli.add(tHub);
for (let i = 0; i < 2; i++) {
  const tBladeGeo = new THREE.BoxGeometry(0.1, 8, 0.1);
  const tBlade = new THREE.Mesh(tBladeGeo, new THREE.MeshStandardMaterial({ color: 0x111111 }));
  tBlade.position.set(-60, 0, 7);
  tBlade.rotation.x = i * Math.PI / 1;
  heli.add(tBlade);
}

// 7. Ánh sáng môi trường cho helicopter
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
heli.add(hemiLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
dirLight.position.set(0, 50, 50);
heli.add(dirLight);

// 8. Đặt vị trí & scale cao hơn helipad
const helipadY = fifthFloorYBase + fifthFloorHeight + 10;
heli.scale.set(2, 2, 2);
heli.position.set(0, helipadY + 30, 0);
giantHouseGroup.add(heli);
// -------------------- END ADVANCED HELICOPTER --------------------

// -------------------- FIXED ROTORS --------------------
// Giả sử bạn đã có group 'heli' như trước

// --- Main Rotor (cánh quạt chính) ---
// Tạo riêng 1 group để dễ xoay animation sau này
const mainRotorGroup = new THREE.Group();
mainRotorGroup.position.set(0, 8, 0); // đặt ngay trên thân, cao hơn cabin

// Trục chính
const mainHubGeom = new THREE.CylinderGeometry(1, 1, 2, 16);
const mainHub = new THREE.Mesh(mainHubGeom, fuselageMat);
mainHub.rotation.x = Math.PI / 2;
mainRotorGroup.add(mainHub);

// 4 cánh quạt
for (let i = 0; i < 4; i++) {
  const bladeGeom = new THREE.BoxGeometry(1, 1, 50);
  const blade = new THREE.Mesh(bladeGeom, new THREE.MeshStandardMaterial({ color: 0x111111 }));
  blade.position.set(0, 0, 0);
  blade.rotation.y = i * (Math.PI / 2);
  mainRotorGroup.add(blade);
}

// Thêm vào helicopter
heli.add(mainRotorGroup);


// --- Tail Rotor (cánh quạt đuôi) ---
// Tạo group riêng
const tailRotorGroup = new THREE.Group();
// Đặt group ở cuối đuôi boom
tailRotorGroup.position.set(-60, 0, 0);

// Trục rotor đuôi
const tailHubGeom = new THREE.CylinderGeometry(0.1, 0.1, 2, 20);
const tailHub = new THREE.Mesh(tailHubGeom, fuselageMat);
tailHub.rotation.y = Math.PI / 2; // trục quay nằm dọc
tailRotorGroup.add(tailHub);

// 2 cánh quạt đuôi
for (let i = 0; i < 2; i++) {
  const tBladeGeom = new THREE.BoxGeometry(1, 10, 1);
  const tBlade = new THREE.Mesh(tBladeGeom, new THREE.MeshStandardMaterial({ color: 0x111111 }));
  tBlade.position.set(0, 0, 0);
  tBlade.rotation.x = i * Math.PI;
  tailRotorGroup.add(tBlade);
}

// Thêm vào helicopter
heli.add(tailRotorGroup);

//TA_MINH_DUC
// City base position
const basePos = new THREE.Vector3(700, 50, -650);

// BUILDINGS
const buildingTexture = new THREE.TextureLoader().load('textures/neon-windows.jpg');

function createBuilding(pos, size, color) {
    const mat = new THREE.MeshStandardMaterial({
        color,
        map: buildingTexture, // Apply neon windows texture
        emissive: 0x000000,
        roughness: 0.4,
        metalness: 0.3
    });
    const geo = new THREE.BoxGeometry(size.x, size.y, size.z);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.set(pos.x, pos.y + size.y / 2, pos.z);
    return mesh;
}

const cityGroup = new THREE.Group();
scene.add(cityGroup);
cityGroup.position.copy(basePos);

// Only keep buildings that are on the ground plane (second quadrant, inside the square)
// Building 1 (blue, faces outward: +Z)
const blue = createBuilding(new THREE.Vector3(-150, 0, 400), new THREE.Vector3(80, 480, 80), 0x00ffff);
blue.rotation.y = Math.PI; // faces +Z (outward from city center)
cityGroup.add(blue);

// Building 2 (purple, faces outward: -X)
const purple = createBuilding(new THREE.Vector3(-300, 0, 270), new THREE.Vector3(100, 520, 100), 0xff00ff);
purple.rotation.y = Math.PI ; // faces -X (outward)
cityGroup.add(purple);

// Building 3 (green, faces outward: -Z)
const green = createBuilding(new THREE.Vector3(-520, 0, 300), new THREE.Vector3(70, 460, 70), 0x00ff99);
green.rotation.y = Math.PI; // faces -Z (outward)
cityGroup.add(green);

// Building 4 (pink, faces outward: -X)
const pink = createBuilding(new THREE.Vector3(-450, 0, 200), new THREE.Vector3(60, 540, 60), 0xff0099);
pink.rotation.y = Math.PI; // faces -X (outward)
cityGroup.add(pink);

// --- Add glowing windows to buildings ---
function addWindows(mesh, floors = 5, windowsPerFloor = 2, color = 0x00ffff) {
    const size = new THREE.Vector3();
    mesh.geometry.computeBoundingBox();
    mesh.geometry.boundingBox.getSize(size);

    const windowWidth = size.x / (windowsPerFloor + 1);
    const windowHeight = size.y / (floors + 2);
    const windowDepth = 2;

    // Helper to add windows to a face
    function addWindowsOnFace(faceNormal, faceOffset) {
        for (let i = 1; i <= floors; i++) {
            for (let j = 1; j <= windowsPerFloor; j++) {
                const windowGeo = new THREE.BoxGeometry(windowWidth * 0.6, windowHeight * 0.6, windowDepth);
                const windowMat = new THREE.MeshStandardMaterial({
                    color: 0x222222,
                    emissive: color,
                    emissiveIntensity: 1.5,
                    metalness: 0.8,
                    roughness: 0.2
                });
                const windowMesh = new THREE.Mesh(windowGeo, windowMat);

                // Calculate window position for each face
                let x = 0, y = -size.y / 2 + i * windowHeight, z = 0;
                if (faceNormal.x !== 0) {
                    x = faceNormal.x * (size.x / 2 + windowDepth / 2 + 0.1);
                    z = -size.z / 2 + j * (size.z / (windowsPerFloor + 1));
                    windowMesh.rotation.y = Math.PI / 2;
                } else if (faceNormal.z !== 0) {
                    z = faceNormal.z * (size.z / 2 + windowDepth / 2 + 0.1);
                    x = -size.x / 2 + j * (size.x / (windowsPerFloor + 1));
                }
                windowMesh.position.set(x, y, z);
                mesh.add(windowMesh);
            }
        }
    }

    // Add windows to all 4 sides
    addWindowsOnFace({x: 0, z: 1},  size.z / 2);  // Front
    addWindowsOnFace({x: 0, z: -1}, -size.z / 2); // Back
    addWindowsOnFace({x: 1, z: 0},  size.x / 2);  // Right
    addWindowsOnFace({x: -1, z: 0}, -size.x / 2); // Left
}

// Add windows to all buildings in cityGroup
cityGroup.children.forEach((building, idx) => {
    // Use different window colors for variety
    const windowColors = [0x00ffff, 0xffff00, 0xff8800, 0xff00ff];
    addWindows(building, 5, 2, windowColors[idx % windowColors.length]);
    if (idx === cityGroup.children.length - 1) {
        addWindows(building, 10, 4, windowColors[idx % windowColors.length]); // More floors and windows per floor
    } else {
        addWindows(building, 5, 2, windowColors[idx % windowColors.length]);
    }
});

// Helper: Neon color palette
const neonColors = [0x00ffff, 0xff00ff, 0x00ff00, 0xffff00, 0xff8800, 0x00ffcc, 0xff0088];

// Helper: Add neon edges to a mesh
function addNeonEdges(mesh, color) {
    const edges = new THREE.EdgesGeometry(mesh.geometry);
    const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color, linewidth: 2 })
    );
    line.position.copy(mesh.position);
    line.rotation.copy(mesh.rotation);
    mesh.add(line);
}

// Improved building creation with neon edges
function createNeonBuilding(pos, size, color) {
    const mat = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.7,
        roughness: 0.3,
        metalness: 0.6
    });
    const geo = new THREE.BoxGeometry(size.x, size.y, size.z);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.set(pos.x, pos.y + size.y / 2, pos.z);

    // Add neon edges
    addNeonEdges(mesh, color);

    // Add random neon point light on top
    const light = new THREE.PointLight(color, 1.5, 250, 2);
    light.position.set(0, size.y / 2 + 10, 0);
    mesh.add(light);

    return mesh;
}

// Add more neon point lights for city glow
for (let i = 0; i < 8; i++) {
    const color = neonColors[i % neonColors.length];
    const light = new THREE.PointLight(color, 2, 400, 2);
    light.position.set(
        basePos.x + Math.random() * 800 - 400,
        basePos.y + 120 + Math.random() * 100,
        basePos.z + Math.random() * 800 - 400
    );
    scene.add(light);
}

// GLTF Loader for flying cars
const loader = new GLTFLoader();

// Add 2 flying cars above buildings
let flyingCars = [];
loader.load('models/flying_car.glb', function(gltf) {
    // Car 1 above blue building
    const car1 = gltf.scene.clone();
    car1.position.set(-150, 400, 400);
    car1.scale.set(0.1, 0.1, 0.1);

    // Add a bright point light to car1
    const car1Light = new THREE.PointLight(0x00ffff, 16, 100, 2);
    car1Light.position.set(0, 5, 0);
    car1.add(car1Light);

    cityGroup.add(car1);
    flyingCars.push(car1);

    // Car 2 above purple building
    const car2 = gltf.scene.clone();
    car2.position.set(-300, 350, 150);
    car2.scale.set(0.1, 0.1, 0.1);

    // Add a bright point light to car2
    const car2Light = new THREE.PointLight(0xff00ff, 4, 100, 2);
    car2Light.position.set(0, 5, 0);
    car2.add(car2Light);

    cityGroup.add(car2);
    flyingCars.push(car2);
});

// Place the gate at the red circle (in front of the city, on the road)
// Let's use the average x of the buildings and set z just in front of them
const gateBaseX = -120; // average x of buildings
const gateBaseY = 10;
const gateBaseZ = -150; // This matches the road in your image

// Billboard sign for the gate (use unique variable names)
const gateBillboardTexture = new THREE.TextureLoader().load('textures/gate_text.jpg');
const gateBillboardWidth = 300;
const gateBillboardHeight = 170;
const gateBillboardGeo = new THREE.PlaneGeometry(gateBillboardWidth, gateBillboardHeight);
const gateBillboardMat = new THREE.MeshStandardMaterial({
    map: gateBillboardTexture,      // <-- Only the sign uses the texture
   // emissive: 0xffffff,
    //emissiveIntensity: 0.5,
    side: THREE.DoubleSide
});
const gateBillboard = new THREE.Mesh(gateBillboardGeo, gateBillboardMat);

// Pillar geometry and material (no texture, just color)
const pillarHeight = 320;
const pillarGeo = new THREE.BoxGeometry(24, pillarHeight, 24);
const pillarMat = new THREE.MeshStandardMaterial({ color: 0x222244, metalness: 0.7, roughness: 0.3 });

// Left pillar
const pillarLeft = new THREE.Mesh(pillarGeo, pillarMat);
pillarLeft.position.set(gateBaseX - gateBillboardWidth / 2 + 20, gateBaseY + pillarHeight / 2, gateBaseZ);

// Right pillar
const pillarRight = new THREE.Mesh(pillarGeo, pillarMat);
pillarRight.position.set(gateBaseX + gateBillboardWidth / 2 - 20, gateBaseY + pillarHeight / 2, gateBaseZ);

// Place the sign above the pillars
gateBillboard.position.set(gateBaseX, gateBaseY + pillarHeight + gateBillboardHeight / 2, gateBaseZ);
gateBillboard.rotation.y = Math.PI; // Fix reversed texture

// Group the gate parts for easy management
const gateGroup = new THREE.Group();
gateGroup.add(pillarLeft);
gateGroup.add(pillarRight);
gateGroup.add(gateBillboard);

// Add the gate at the circle (on the road, in front of the city)
scene.add(gateGroup);
gateGroup.position.set(480, 0, 0)

// ANIMATION
let flash = 0;

// Define the corners of the square (relative to cityGroup)
const carPathPoints = [
    new THREE.Vector3(-150, 0, 400), // blue
    new THREE.Vector3(-300, 0, 150), // purple
    new THREE.Vector3(-420, 0, 200), // pink
    new THREE.Vector3(-360, 0, 370), // green
];
// Close the loop for smoothness
carPathPoints.push(carPathPoints[0].clone());

const carSpline = new THREE.CatmullRomCurve3(carPathPoints, true);

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
    //NGUYEN_LE_TRUNG_HIEU
    const now = new Date();
    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60; // Ensure 12-hour format

    // Clock hands rotate clockwise. In THREE.js, positive rotation around Z is counter-clockwise.
    // So we use negative angles. A full circle is 2*PI radians.
    const secondRotation = -(seconds / 60) * Math.PI * 2;
    const minuteRotation = -(minutes / 60) * Math.PI * 2;
    const hourRotation = -(hours / 12) * Math.PI * 2;

    if (secondHand1) secondHand1.rotation.z = secondRotation;
    if (minuteHand1) minuteHand1.rotation.z = minuteRotation;
    if (hourHand1) hourHand1.rotation.z = hourRotation;

    if (secondHand2) secondHand2.rotation.z = secondRotation;
    if (minuteHand2) minuteHand2.rotation.z = minuteRotation;
    if (hourHand2) hourHand2.rotation.z = hourRotation;

    if (secondHand3) secondHand3.rotation.z = secondRotation;
    if (minuteHand3) minuteHand3.rotation.z = minuteRotation;
    if (hourHand3) hourHand3.rotation.z = hourRotation;

    if (secondHand4) secondHand4.rotation.z = secondRotation;
    if (minuteHand4) minuteHand4.rotation.z = minuteRotation;
    if (hourHand4) hourHand4.rotation.z = hourRotation;

    //BUI_DUY_THAI
    // Rotate the pinwheel
    if (pinwheelGroup) {
        pinwheelGroup.rotation.y += 0.02; // Changed from rotation.z to rotation.y for correct spinning direction
    }

    controls.update(); // Update OrbitControls
    renderer.render(scene, camera); // Render the scene

    //TRAN_GIA_HUY
    // Rotate the helicopter rotors
    if (mainRotorGroup) {
        mainRotorGroup.rotation.y += 0.5;
    }
    if (tailRotorGroup) {
        tailRotorGroup.rotation.x += 1;
    }

    //TA_MINH_DUC
    // Animate flying cars smoothly along the path
    if (flyingCars.length === 2) {
        const time = performance.now() * 0.00007; // Precompute time multiplier
        const t = time % 1; // Normalize time to [0, 1]

        // Precompute trigonometric values for smoother animation
        const angle1 = t * Math.PI * 2;
        const angle2 = (t + 0.5) % 1 * Math.PI * 2;

        // Car 1: clockwise
        const pos1 = carSpline.getPointAt(t);
        const nextPos1 = carSpline.getPointAt((t + 0.01) % 1);
        flyingCars[0].position.set(pos1.x, 600 + Math.sin(angle1) * 20, pos1.z);
        flyingCars[0].lookAt(nextPos1.x, flyingCars[0].position.y, nextPos1.z);

        // Car 2: counter-clockwise, offset by 0.5
        const pos2 = carSpline.getPointAt((t + 0.5) % 1);
        const nextPos2 = carSpline.getPointAt((t + 0.51) % 1); // Offset by 0.01 for next position
        flyingCars[1].position.set(pos2.x, 600 + Math.cos(angle2) * 24, pos2.z);
        flyingCars[1].lookAt(nextPos2.x, flyingCars[1].position.y, nextPos2.z);
    }
}

renderer.setAnimationLoop(animate);