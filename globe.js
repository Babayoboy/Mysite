const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('globe-container').appendChild(renderer.domElement);

// Load texture
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load('earth_texture.png');

// Create the globe
const geometry = new THREE.SphereGeometry(10, 64, 64);
const material = new THREE.MeshBasicMaterial({
    map: earthTexture,
    transparent: true,
    opacity: 0.8 // Slightly transparent to blend with background
});

// Optional: Add atmosphere glow (simple version with slightly larger sphere behind)
const glowGeometry = new THREE.SphereGeometry(10.2, 64, 64);
const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.05,
    side: THREE.BackSide
});
const glow = new THREE.Mesh(glowGeometry, glowMaterial);
scene.add(glow);

const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

// Position camera
camera.position.z = 20;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    globe.rotation.y += 0.0015;
    // slightly tilt
    // globe.rotation.z = 0.41; // Earth's tilt roughly

    renderer.render(scene, camera);
}

animate();

// Handle resize
window.addEventListener('resize', () => {

    const container = document.getElementById('globe-container');
    const width = container.clientWidth;
    const height = container.clientHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Initial resize to fit container
const container = document.getElementById('globe-container');
renderer.setSize(container.clientWidth, container.clientHeight);
camera.aspect = container.clientWidth / container.clientHeight;
camera.updateProjectionMatrix();
