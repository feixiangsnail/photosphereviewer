// import * as THREE from 'three';
// class PanoGroup extends THREE.Object3D {
//     public sphere: THREE.Mesh;
//     public box: THREE.Mesh;
//     constructor() {
//         super();
//         this.initSphere();

//     }
//     initSphere() {
//         let textureLoader = new THREE.TextureLoader();
//         let path = "textures/cube/SwedishRoyalCastle/";
//         let format = '.jpg';
//         let urls = [
//             path + 'px' + format, path + 'nx' + format,
//             path + 'py' + format, path + 'ny' + format,
//             path + 'pz' + format, path + 'nz' + format
//         ];
//         let reflectionCube = new THREE.CubeTextureLoader().load(urls);
//         reflectionCube.format = THREE.RGBFormat;
//         let sphereMap = textureLoader.load()
//         let planeGeometry = new THREE.SphereGeometry(1, 30, 30);
//         let planeMaterial = new THREE.MeshBasicMaterial({ 
//             //envMap: reflectionCube
//             map:textureLoader.load('../assets/img/street1.jpg')
//         });
//         this.sphere = new THREE.Mesh(planeGeometry, planeMaterial);
//         let boxGeometry = new THREE.BoxGeometry(.2, .2, .2);
//         let boxMat = new THREE.MeshPhongMaterial({ color: 0xff00ff })
//         this.box = new THREE.Mesh(boxGeometry, boxMat);
//         this.box.position.set(3, 0, 0);

//     }





// }
// export default PanoGroup;