import THREE from '../assets/js/three.min.js'
window.THREE = THREE;
import PhotoSphereViewer from '../assets/js/photoSphereViewer';
import LabelGroup from './LabelGroup';
var PSV = new PhotoSphereViewer({
	panorama: '../assets/img/street2.jpg',
	container: document.getElementById('app'),
	time_anim: false,
	navbar: true,
	size: {
		width: '100%',
		height: '100%'
	}
});
let loops = setInterval(function () {
	if (PSV.scene) {
		clearInterval(loops);
		let scene = PSV.scene;
		let labelGroup = new LabelGroup({ position: PSV.point })
		PSV.cusMethods = function () {
			let camera = scene.children[0];
			labelGroup.position.set(PSV.point.x, PSV.point.y * 0.5 - 0.6, PSV.point.z);
		}
		labelGroup.changeColor(scene.children[0], document.getElementById('app'))
		scene.add(labelGroup);
	}
})
// import *as THREE from '../assets/js/three.min.js'
// import * as Orbit from 'three-orbit-controls';
// import *as PanoGroup from './PanoGroup';
// import LightGroup from './LightGroup';
// let OrbitControls = Orbit(THREE);
// class MainGame {
// 	public renderer:THREE.WebGLRenderer;
// 	public scene:THREE.Scene;
// 	public camera:THREE.PerspectiveCamera;
// 	public panoGroup:PanoGroup = new PanoGroup();
// 	public lightGroup:LightGroup = new LightGroup();
// 	constructor(container) {
// 		this.init(container);
// 		this.run();
// 	}
// 	init(container) {
// 		let renderer = new THREE.WebGLRenderer({ antialias: true });
// 		renderer.setPixelRatio(window.devicePixelRatio);
// 		renderer.setSize(container.offsetWidth, container.offsetHeight);
// 		renderer.setClearColor(0xF5F5F5)
// 		container.appendChild(renderer.domElement);
// 		let scene = new THREE.Scene();
// 		let camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 600);
// 		camera.position.z = 5;
// 		scene.add(camera);
// 		let orbitControls = new OrbitControls(camera, renderer.domElement);
// 		let planeGeometry = new THREE.BoxGeometry(1, 1, 1);
// 		let planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff * Math.random(), emissive: 0x666666, opacity: 0.9, transparent: true });
// 		let plane = new THREE.Mesh(planeGeometry, planeMaterial);
// 		plane.name = "floor";
// 		//scene.add(plane);
// 		scene.add(this.lightGroup.ambientLight);
// 		scene.add(this.panoGroup.sphere);
// 		scene.add(this.panoGroup.box);
// 		this.renderer = renderer;
// 		this.scene = scene;
// 		this.camera = camera;
// 	};
// 	run() {
// 		let that = this;
// 		this.renderer.render(this.scene, this.camera);
// 		requestAnimationFrame(function () { that.run() });
// 	}
// }
// export default MainGame;
// //  run = function(){
// //     renderer.render(scene,camera);
// //     requestAnimationFrame(run);
// // }
