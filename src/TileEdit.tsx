import React from "react";
import { Button } from "react-bootstrap";
import { tileItem } from "./interfaces";

type listProps = {
    tile: tileItem | null;
    tileList: tileItem[];
    resetMiddle: () => void;
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
                {
                    props.tileList.find(
                        (item: tileItem) => item.id === props.tile?.id
                    )?.position
                }
            </div>
        </div>
    );
};

export default TileEdit;
