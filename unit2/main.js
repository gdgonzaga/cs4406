/*
  Demo pyramid mesh, based on examples in:

  https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
  https://threejs.org/docs/index.html#api/en/core/BufferGeometry
*/

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 16/9, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const material = new THREE.MeshBasicMaterial({ color: 0x845ba4 });

const diamondVertices = new Float32Array([
  // front
  1, 2, 0,
  0, 0, 1,
  2, 0, 1,

  // left
  1, 2, 0,
  0, 0, -1,
  0, 0, 1,

  // right
  1, 2, 0,
  2, 0, 1,
  2, 0, -1,

  // rear
  1, 2, 0,
  2, 0, -1,
  0, 0, -1,

  // front left base
  0, 0, 1,
  0, 0, -1,
  2, 0, 1,

  // rear right base
  0, 0, -1,
  2, 0, -1,
  2, 0, 1,
]);

const diamondGeometry = new THREE.BufferGeometry();
diamondGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(diamondVertices, 3)
);

const diamondMesh = new THREE.Mesh(diamondGeometry, material);
scene.add(diamondMesh);

function animate() {
  diamondMesh.rotation.x += 0.015;
  diamondMesh.rotation.y += 0.015;
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
