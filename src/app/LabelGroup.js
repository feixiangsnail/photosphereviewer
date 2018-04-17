import THREE from '../assets/js/three.min.js'
var LabelGroup = function (config) {
    THREE.Object3D.call(this);
    this.position.set(config.position.x, config.position.y, 0.2);
    this.scale.set(2,2,2);
    this.rotation.set(Math.PI / 2, 0, 0)
    //创建三个贴图
    var frontTex = THREE.ImageUtils.loadTexture("../assets/img/frontRow.png")
    var leftTex = THREE.ImageUtils.loadTexture("../assets/img/leftRow.png")
    var rightTex = THREE.ImageUtils.loadTexture("../assets/img/rightRow.png")
    //创建两种几何体，上，左右（公用一个)
    let frontGeometry = new THREE.BoxGeometry(.15, .3, .001);
    let leftRightGeometry = new THREE.BoxGeometry(.3, .15, .001);
    //创建材质
    let frontMat = new THREE.MeshBasicMaterial({
        map: frontTex, blending: 1, transparent: true,
        side: 2
    })
    let leftMat = new THREE.MeshBasicMaterial({ map: leftTex, blending: 1, transparent: true })
    let rightMat = new THREE.MeshBasicMaterial({ map: rightTex, blending: 1, transparent: true })
    //创建图标模型
    let frontLabel = new THREE.Mesh(frontGeometry, frontMat);
    frontLabel.name = 'frontLabel';
    let leftLabel = new THREE.Mesh(leftRightGeometry, leftMat);
    leftLabel.name = 'leftLabel';
    let rightLabel = new THREE.Mesh(leftRightGeometry, rightMat);
    rightLabel.name = 'rightLabel';
    leftLabel.position.x += 0.2;
    rightLabel.position.x -= 0.2;
    this.add(frontLabel)
    this.add(leftLabel)
    this.add(rightLabel)
};
LabelGroup.prototype = new THREE.Object3D;
LabelGroup.prototype.updatePosition = function (config) {
    this.position.set(config.position.x, config.position.y, config.position.z);
}
LabelGroup.prototype.changeColor = function (camera, containerDom, leftHandCallback) {
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    var intersection = new THREE.Vector3();
    var offset = new THREE.Vector3();
    var plane = new THREE.Plane();
    var objects = this.children;
    var INTERSECTED, SELECTED;
    var key = true;
    let that = this;
    containerDom.onmousemove = function (e) {
       
        if (!key) return;
        event.preventDefault();
        var x = event.clientX;
        var y = event.clientY;
        var rect = event.target.getBoundingClientRect();
        mouse.x = ((x - rect.left) - containerDom.clientWidth / 2) / (containerDom.clientWidth / 2);
        mouse.y = (containerDom.clientHeight / 2 - (y - rect.top)) / (containerDom.clientHeight / 2);
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(objects);
        if (intersects.length > 0) {
            if (INTERSECTED) INTERSECTED.material.color = new THREE.Color(0xffffff);
            INTERSECTED = intersects[0].object;
            INTERSECTED.material.color = new THREE.Color(0x00ff00);
        } else {
            if (INTERSECTED) INTERSECTED.material.color = new THREE.Color(0xffffff);
            INTERSECTED = null;
        }
    }
    containerDom.onmousedown = function (event) {
        key = false;
        event.preventDefault();
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(objects);
        if (intersects.length > 0) {
            SELECTED = intersects[0].object;
            SELECTED.material.color = new THREE.Color(0x00ff00);
            console.log(SELECTED.name);
        }
    }
    containerDom.onmouseup = function (event) {
        key = true;
        event.preventDefault();
    }
}
export default LabelGroup;