import './style.css'
// STEP 1: Importing Three JS
import * as THREE from 'three';

// STEP 2: Creating Scene and Camera
const scene = new THREE.Scene();

// 75 -> Field of View in degrees
// window.innerWidth / window.innerHeight -> Aspect ratio (prevents distortion when resizing).
// 0.1, 1000 -> Near and far clipping planes (objects outside this range won’t be rendered).
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// STEP 3: Creating a Cube (Mesh = Geometry + Material)
const geometry = new THREE.BoxGeometry(1, 1, 1); // 1*1*1 dimension of cube
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material); // combines to make a 3D model
scene.add(cube);    //add the cube to the scene

camera.position.z = 5; // Moves the camera 5 units back along the Z-axis so that it can view the cube.

// STEP 4: Rendering the scene
const renderer = new THREE.WebGLRenderer(); // Creates a WebGL renderer, which will draw the scene onto the screen.
renderer.setSize(window.innerWidth, window.innerHeight); // Sets the renderer size to match the browser window.
document.body.appendChild(renderer.domElement); // Adds the renderer’s canvas (renderer.domElement) to the HTML page

// STEP 5: Animating the cube
function animate() { //Defines a function to animate the cube by continuously updating its rotation.
    cube.rotation.x += 0.01; // Rotates the cube slightly around the X-axis on every frame.
    cube.rotation.y += 0.01; // Rotates the cube slightly around the Y-axis on every frame.
    renderer.render(scene, camera); //Renders the updated scene from the camera's perspective.
}
renderer.setAnimationLoop(animate); // Calls the animate() function repeatedly, creating a smooth animation.
