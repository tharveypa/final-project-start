import React from "react";
import DeleteBin from "./DeleteBin";
import { tileItem } from "./interfaces";
import Pic from "./Pic";

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
                hello
            </div>
        </div>
    );
};

export default TileEdit;
