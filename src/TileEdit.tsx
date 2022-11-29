import React from "react";
import { tileItem } from "./interfaces";

type listProps = {
    tile: tileItem | null;
    //deleteTile: (index: number) => void;
};

const TileEdit: React.FC<listProps> = (props) => {
    return (
        <div>
            <div
                style={{
                    display: "inline-block",
                    width: "100%",
                    height: "10vw"
                }}
            >
                {props.tile?.position}
            </div>
        </div>
    );
};

export default TileEdit;
