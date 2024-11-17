import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useRef, useEffect } from 'react';

const Threejs1 = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // 创建场景
        const scene = new THREE.Scene();

        // 创建相机
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;

        // 创建渲染器
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);



        // 创建几何体
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);



        
        // 添加OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // 动画循环
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        // 清理函数
        return () => {
            // 在清理之前，确保mountRef.current存在
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            // 释放资源
            controls.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <>
            {/* <div>Threejs1</div> */}
            <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
        </>
    );
};

export default Threejs1;
