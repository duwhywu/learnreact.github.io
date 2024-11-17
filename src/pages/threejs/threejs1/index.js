import React, { useRef, useEffect } from 'react';

import * as THREE from 'three';
// import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const Threejs1 = () => {
    const mountRef = useRef(null); // 用于挂载 Three.js 的容器

    useEffect(() => {
        let mixer;
        const clock = new THREE.Clock();

        // 确保 ref 被正确绑定
        const container = mountRef.current;
        if (!container) {
            console.error('Container ref is null');
            return;
        }

        // // 添加性能监控面板
        // const stats = new Stats();
        // container.appendChild(stats.dom);

        // 创建渲染器
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.clientWidth, container.clientHeight); // 使用容器尺寸
        container.appendChild(renderer.domElement);

        // 设置环境贴图
        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xbfe3dd);
        scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

        // 相机设置
        const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 1, 100);
        camera.position.set(5, 2, 8);

        // 控制器
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 0.5, 0);
        controls.update();
        controls.enablePan = false;
        controls.enableDamping = true;

        // 加载器配置
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/gltf/'); // 确保路径正确
        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);

        // 加载 GLTF 模型
        loader.load(
            '/models/LittlestTokyo.glb', // 模型路径，确保放在 public 目录
            (gltf) => {
                const model = gltf.scene;
                model.position.set(1, 1, 0);
                model.scale.set(0.01, 0.01, 0.01);
                scene.add(model);
                mixer = new THREE.AnimationMixer(model);
                mixer.clipAction(gltf.animations[0]).play();

                renderer.setAnimationLoop(animate); // 开始渲染循环
            },
            undefined,
            (error) => {
                console.error('Error loading model:', error.message, error);
            }
        );

        // 处理窗口大小调整
        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // 动画函数
        const animate = () => {
            const delta = clock.getDelta();
            mixer?.update(delta); // 更新动画
            controls.update(); // 更新控制器
            // stats.update(); // 更新性能监控
            renderer.render(scene, camera); // 渲染场景
        };

        // 清理函数
        return () => {
            renderer.dispose();
            container.removeChild(renderer.domElement);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
            }}
        />
    );
};

export default Threejs1;
