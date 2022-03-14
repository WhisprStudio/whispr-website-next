import React, { useEffect, useState, useRef } from "react";
import { Html } from "drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

export function Model() {
    /* Refs */
    const group = useRef();

    /* State */
    const [model, setModel] = useState(null);

    /* Mixer */

    /* Load model */
    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load("eip3.gltf", async (gltf) => {
            const nodes = await gltf.parser.getDependencies("node");
            setModel(nodes[0]);
        });
    }, []);
    return (
        <>
            {model ? (
                <group ref={group} position={[0, -150, 0]} dispose={null}>
                    <primitive ref={group} name="Object_0" object={model} />
                </group>
            ) : (
                <Html>Loading...</Html>
            )}
        </>
    );
};
