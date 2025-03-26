# Create a starter Three.js file that implements a 3D rotating card scene
threejs_script = """
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.150.1/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, card, controls;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0e0e0e);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0x00ffd5, 1);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  // Card Geometry
  const geometry = new THREE.BoxGeometry(2, 3, 0.1);
  const material = new THREE.MeshStandardMaterial({
    color: 0x00ffd5,
    metalness: 0.3,
    roughness: 0.4
  });
  card = new THREE.Mesh(geometry, material);
  scene.add(card);

  // Orbit Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  window.addEventListener('resize', onWindowResize, false);

  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  card.rotation.y += 0.005;
  controls.update();
  renderer.render(scene, camera);
}

init();
"""

# Save the Three.js script file
threejs_path = os.path.join(base_path, "script.js")
with open(threejs_path, "w") as file:
    file.write(threejs_script)

threejs_path
