import './style.css'
import * as THREE from 'three';
/*
- new THREE.PerspectiveCamera(fov, aspect, near, far): Creates a perspective camera with:
    - fov = 25: Field of view in degrees.
    - aspect = window.innerWidth / window.innerHeight: Aspect ratio (to fit the screen size).
    - near = 1: Closest distance from the camera that objects are visible.
    - far = 500: Farthest distance from the camera that objects are visible.
    - camera.position.set( 0, 0, 100 ): Moves the camera to position (0, 0, 100), pulling it back so the scene is visible.
*/
const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
const scene = new THREE.Scene();
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/*
- Creates an empty array points to store 3D points.
- Uses THREE.Vector3(x, y, z) to define three points:
  - (-10, 0, 0): Left point.
  - (0, 10, 0): Top point.
  - (10, 0, 0): Right point.
*/
const points = [];
points.push(new THREE.Vector3(- 10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

// new THREE.BufferGeometry(): Creates an empty geometry object.
// .setFromPoints(points): Converts the points into a buffer geometry that Three.js can use.
const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);
scene.add(line);
renderer.render(scene, camera);
