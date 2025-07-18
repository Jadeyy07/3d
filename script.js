
// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1e1e1e);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('labCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 10, 5);
scene.add(pointLight);

// Floor
const floorGeometry = new THREE.PlaneGeometry(50, 50);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x303030 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Lab table
const tableGeometry = new THREE.BoxGeometry(4, 1, 2);
const tableMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 });
const table = new THREE.Mesh(tableGeometry, tableMaterial);
table.position.set(0, 0.5, 0);
scene.add(table);

// Beaker (cylinder)
const beakerGeometry = new THREE.CylinderGeometry(0.3, 0.3, 1, 32);
const beakerMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffff });
const beaker = new THREE.Mesh(beakerGeometry, beakerMaterial);
beaker.position.set(0.5, 1.2, 0);
scene.add(beaker);

// Animate
function animate() {
  requestAnimationFrame(animate);
  beaker.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Handle resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
