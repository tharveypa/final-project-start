import React from "react";

type OverlayProps = {
    color: string;
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
                opacity: 0.5,
                backgroundColor: props.color
            }}
        />
    );
};

export default Overlay;
