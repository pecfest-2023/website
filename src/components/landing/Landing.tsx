import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "../Loader";
import Ocean from "./Ocean";
import Sky from "./Sky";
import { Layers } from "./util/LayerComponent";
import logo from "./assets/logo.png";
import * as THREE from "three";
import { useWindowSize } from "usehooks-ts";
import { Ship, Ship2, Ship3 } from "./util/Ship";
import { OrbitControls } from "@react-three/drei";

function Rig() {
    const { camera, mouse } = useThree();
    const vec = new THREE.Vector3();
    return useFrame(() =>
        camera.position.lerp(
            vec.set(mouse.x * 0.25, camera.position.y, camera.position.z),
            0.05
        )
    );
}

function Landing() {
    const { width } = useWindowSize();
    return (
        <div
            style={{
                height: "100vh",
                zIndex: 0,
            }}
        >
            <Canvas
                camera={{ position: [0, 5, 100], fov: 60, near: 1, far: 20000 }}
                gl={{
                    powerPreference: "default",
                    antialias: false,
                    alpha: false,
                }}
            >
                <pointLight position={[100, 0, 100]} intensity={100} />
                <pointLight position={[-100, -100, -100]} />

                <ambientLight intensity={5} position={[0, 0, 0]} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={100} />

                <Suspense fallback={<Loader />}>
                    <Sky />
                    <Ocean />
                    {width > 720 ? (
                        <Layers
                            pos={[0, 15, -30]}
                            args={[100, 100]}
                            img={logo.src}
                        />
                    ) : (
                        <Layers
                            pos={[0, 8, -30]}
                            args={[50, 50]}
                            img={logo.src}
                        />
                    )}
                    <Rig />
                    {width > 720 ? (
                        <>
                            <Ship pos={[-10, 0, 80]} onClick={() => {}} />
                            <Ship2 pos={[0, 0, 90]} onClick={() => {}} />
                            <Ship3 pos={[10,0,80]} onClick={()=>{}} />
                        </>
                    ) : (
                        <>
                            <Ship pos={[-10, 0, 60]} onClick={() => {}} />
                            <Ship2 pos={[0, 0, 70]} onClick={() => {}} />
                            <Ship3 pos={[10,0,60]} onClick={()=>{}} />
                        </>
                    )}
                    {/* <OrbitControls /> */}
                </Suspense>
            </Canvas>
        </div>
    );
}

export default Landing;
