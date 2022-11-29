import React from "react";
import { Button /*Form*/ } from "react-bootstrap";
import { tileItem } from "./interfaces";

type listProps = {
    tile: tileItem | null;
    tileList: tileItem[];
    resetMiddle: () => void;
    updateTile: (tile: tileItem) => void;
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
                <Button className="resetMiddle" onClick={props.resetMiddle}>
                    Done
                </Button>
            </div>
        </div>
    );
};

export default TileEdit;
