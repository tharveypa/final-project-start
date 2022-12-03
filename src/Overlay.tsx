import React from "react";

type OverlayProps = {
    color: string;
    opacity: number;
};

const Overlay: React.FC<OverlayProps> = (props) => {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                zIndex: 1,
                opacity: props.opacity,
                backgroundColor: props.color
            }}
        />
    );
};

export default Overlay;
