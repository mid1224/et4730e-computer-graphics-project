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

    renderer.render(scene, camera); // Render the scene
}

renderer.setAnimationLoop(animate);