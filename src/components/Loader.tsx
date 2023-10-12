import { Html } from "@react-three/drei";
import React from "react";

function Loader() {
    return (
        <Html
            center
            style={{
                height: "100vh",
                width: "100vw",
                background: "wheat",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                style={{
                    width: "100vw",
                    height: "100vh",
                    objectFit: "contain",
                }}
                src={"/assets/loader/Loader-BG_3.gif"}
                alt="loading..."
            />
        </Html>
    );
}

export default Loader;
