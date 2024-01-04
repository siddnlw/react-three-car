import React, {useEffect} from 'react';
import {useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {Mesh} from 'three';

export function Car() {
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + 'models/car/scene.gltf'
    )

    useEffect(() =>{
        gltf.scene.scale.set(1, 1, 1); // car5
        // gltf.scene.scale.set(0.001, 0.001, 0.001); // car4
        // gltf.scene.scale.set(1, 1, 1); // car3
        // gltf.scene.scale.set(2, 2, 2); // car2
        gltf.scene.scale.set(0.005, 0.005, 0.005); // car
        // gltf.scene.position.set(0, 0.6, 0); //car5 
        gltf.scene.position.set(0, -0.035, 0);
        gltf.scene.traverse((object) => {
            if(object instanceof Mesh){
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        })
    },[gltf]);
    return(<primitive object={gltf.scene}/>)
}