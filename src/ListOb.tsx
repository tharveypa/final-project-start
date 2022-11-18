/* eslint-disable no-extra-parens */
import React from "react";
import { tileItem } from "./interfaces";
import Pic from "./Pic";

type listProps = {
    tiles: tileItem[];
};

const ListOb: React.FC<listProps> = (props) => {
    return (
        <div>
            <div
                style={{
                    display: "inline-block",
                    width: "100%"
                }}
            >
                trash!!!!
            </div>

            {props.tiles.map((tile: tileItem, i: number) => (
                <div
                    key={i}
                    className="tileitem"
                    style={{ display: "inline-block", width: "50%" }}
                >
                    <Pic tile={tile} scale={100} />
                </div>
            ))}
        </div>
    );
};

export default ListOb;
