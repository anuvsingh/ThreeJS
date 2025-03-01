# ThreeJS
This is my journey of studying threeJs using documentations and further exploration by many things. I have made small projects while studying and at last try to make big ones.

## What is Three JS ?
- Three.js is a JavaScript library used to create and display 3D graphics in a web browser using *WebGL (Web Graphics Library)*. 
- It simplifies the process of working with 3D models, animations, and interactive scenes by providing an easy-to-use API.
- *WebGL* is a Javascript API that allows you to create 2D and 3D graphic rendering.
- A *canvas* is an HTML component that is part of the HTML5 specification and allows to display graphic rendering.

## What is WebGL ?
- WebGL was created in 2011.
- It was designed as a Web API to provide 2D and 3D drawing inside an HTML canvas element, without the use of a browser plug-in.

## Why using Three JS ?
- If it’s actually WebGL, why not write WebGL directly ?
- ThreeJS simplifies and shortens to the extreme the code needed to do whatever you want. ThreeJS does all the complex part for you. You just have to do simple Javascript on your side.
- ThreeJS gives you the power to do incredible things in 3D.

## How Does Three JS Works ?
To understand how ThreeJS works at a high level we need to put yourself in the shoes of a film director. And to shoot our movie in Javascript, we’re going to need to create and manipulate several key elements.
- **The Scene**
    - We can see the scene like the 3D world you’re going to work in. We're going to arrange objects in this scene. We’re going to create as many objects as we want in your scene via the meshes.
- **The Meshes**
    - Meshes are simply the objects that will be present in our scene. We will need to put light on these objects to see them. To see them, we will have to film them. To film them, we need a camera.
- **The Camera**
    - As in real life, the camera will show a point of view of our scene. We’re going to talk about field of view (fov), to be precise. By moving the camera, we’re going to move objects in or out of this field of view. It’s what you see in this field of view of this camera that will be sent to the rendering engine.
- **The Rendering Engine**
    - The rendering engine takes the scene and the camera as parameters. With that, it displays everything in the HTML5 canvas I was telling you about at the beginning. The rendering engine will produce an image each time your screen is refreshed. In general, 60 frames per second. That’s what gives life to your animation!

## Three JS Workflow

### 1️⃣ Create a Scene
Defines the 3D world where all objects, lights, and cameras exist.
```javascript
const scene = new THREE.Scene();
```

### 2️⃣ Add a Camera
Determines how users view the scene. The camera acts as the eye of the viewer.
```javascript
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
```

### 3️⃣ Add Objects
Creates 3D shapes such as cubes, spheres, and custom models.
```javascript
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

### 4️⃣ Add Materials & Textures
Gives color, appearance, and surface details to objects, making them look realistic.
```javascript
const texture = new THREE.TextureLoader().load('texture.jpg');
const texturedMaterial = new THREE.MeshBasicMaterial({ map: texture });
const texturedCube = new THREE.Mesh(geometry, texturedMaterial);
scene.add(texturedCube);
```

### 5️⃣ Add Lights
Illuminates the scene, affecting how objects appear based on light sources.
```javascript
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
```

### 6️⃣ Render the Scene
Uses a renderer (WebGL) to display objects on the screen, converting 3D scenes into 2D images.
```javascript
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
```

### 7️⃣ Animation & Interaction
Makes objects move dynamically and enables user interactions such as rotating, zooming, and clicking.
```javascript
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
```

## Animation
- Animation is like doing stop motion:
    - move the object
    - take a picture
    - move the object a bit more
    - take a picture
    - etc...
- Most screens run at 60 FPS, but not always.
- We need to update objects and do a render on each frame
- We are going to do that in a function and call this function with `window. requestAnimationFrame( ... )`.
- The purpose of *requestAnimationFrame* is to call the function provided on the next frame.
- We are going to call the same function on each new frame.
- The higher the framerate, the faster the rotation.
- We need to know how much time it's been since the last tick.
- Use `Date.now()` to get the current timestamp.
- Subtract the previous time to get the deltaTime.
- Use the deltaTime in the animation.
- We can also use library for animation i.e. GSAP.
- GreenSock Animation Platform (GSAP) allows you to effortlessly animate anything JS can touch. Delivering silky-smooth performance and unmatched support so you can focus on the fun stuff.

## Camera
- Abstract base class for cameras. This class should always be inherited when you build a new camera.
- There are different types of cameras:-
    - **Array Camera:** ArrayCamera render the scene from multiple cameras on specific areas of the render.
    - **Stereo Camera:** StereoCamera render the scene through two cameras that mimic the eyes to create a parallax effect. Use with devices like VR headset, red and blue glasses or cardboard.
    - **Cube Camera:** The CubeCamera do 6 renders, each one facing a different direction. Can render the surrounding for things like environment map, reflection or shadow map.
    - **Orthographic Camera:** OrthographicCamera render the scene without perspective.
    - **Perspective Camera:** PerspectiveCamera render the scene with perspective.

## Mouse Control
- First we qeed the mouse coordinates on the page
- Listen to the `mousemove` event with `addEventListener` and retrieve the `event.clientX` and `event.clientY`.
```js
window. addEventListener('mousemove', (event) => {
    console.log(event.clientX, event.clientY)
})
```
- The values were be in pixel and it's better to adjust them.

## No Notes
- I'm not making notes now becoz i have studied all the things from documentation and making projects from the help of three js documentation and many websites. 
- I will recommend that do not go for AI tools because it will give you direct answer and you will never learn or see the other students and developers perspective. 
- So study from google and explore different websites and community.
- **Documentation:** [Three JS](https://threejs.org/docs/index.html#manual/en/introduction/Installation)

---

**Thanks For Reading that much 😅**
