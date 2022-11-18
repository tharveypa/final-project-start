/* eslint-disable no-extra-parens */
import React from "react";
import DeleteBin from "./DeleteBin";
import { tileItem } from "./interfaces";
import Pic from "./Pic";

type listProps = {
    tiles: tileItem[];
    deleteTile: (index: number) => void;
};

const ListOb: React.FC<listProps> = (props) => {
    return (
        <div>
            <DeleteBin deleteTile={props.deleteTile} />
            {props.tiles.map((tile: tileItem, i: number) => (
                <div
                    key={i}
                    className="tileitem"
                    style={{ display: "inline-block", width: "50%" }}
                >
                    <Pic tile={tile} />
                </div>
            ))}
        </div>
    );
};

export default ListOb;
