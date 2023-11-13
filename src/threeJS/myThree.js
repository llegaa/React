import * as THREE from "https://unpkg.com/three/build/three.module.js";
let n = 0
export default function modelView (canvasWrapper, typeGeometry, colorGeometry, sizeGeometry){
    console.log(colorGeometry)
    let geometry
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("white");

        let camera = new THREE.PerspectiveCamera(
            60,
            canvasWrapper.clientWidth / canvasWrapper.clientHeight,
            1,
            1000
        );

        let cameraTarget = new THREE.Vector3(0, 0, 0);
        camera.position.x = 10;
        camera.position.y = 10;
        camera.position.z = -10;
        camera.lookAt(cameraTarget);
        scene.add(camera);

        if(typeGeometry === "cube") {
            geometry = new THREE.BoxGeometry(sizeGeometry, sizeGeometry, sizeGeometry);

        }else if(typeGeometry==="sphere") {geometry = new THREE.SphereGeometry(sizeGeometry/2);}
        else{
            geometry = new THREE.ConeGeometry( Math.sqrt(Math.pow(sizeGeometry,2)/2), Math.sqrt(Math.pow(sizeGeometry,2)/2), 4 );
        }

        let material = new THREE.MeshPhongMaterial({
            color: colorGeometry,
            dithering: true,
            specular: 0x111111,
            shininess: 200,
            side: THREE.DoubleSide
        });
        let figure = null;
        figure = new THREE.Mesh(geometry, material);
        figure.position.y = 0;
        figure.position.x = 0;
        figure.position.z = 0;
        figure.castShadow = true;
        scene.add(figure);

// let material3 = new THREE.MeshPhongMaterial({ color: "BlueViolet", dithering: true, side: THREE.DoubleSide });
// let triangle = new THREE.Mesh(geometry3, material3);
// triangle.position.set(-4, 0.5, -2);
// triangle.castShadow = true;
// scene.add(triangle);

        const light = new THREE.PointLight( "#fff", 1, 100);
        light.position.set(0, 6, -15);
        light.castShadow = true;
        scene.add(light);

        const spotLight = new THREE.SpotLight("#ffffff");
        spotLight.position.set(0, 10, 0);
        spotLight.castShadow = true;
        spotLight.intensity = 2;
        spotLight.shadow.camera.near = 1;
        spotLight.shadow.camera.far = 25;
        spotLight.shadow.mapSize.width = 2048;
        spotLight.shadow.mapSize.height = 2048;
        spotLight.shadow.bias = -0.01;
        spotLight.target.position.set(0, 0, 0);
        scene.add(spotLight)

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(canvasWrapper.clientWidth, canvasWrapper.clientHeight);
        n++
        if (n===3){canvasWrapper.appendChild(renderer.domElement);
            n=0}
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

        renderer.shadowMap.enabled = true;

        function animate() {
            requestAnimationFrame(animate)
            renderer.render(scene, camera);
        }
        animate()
}


//sceneRef.current.appendChild(threeObjects.renderer.domElement);