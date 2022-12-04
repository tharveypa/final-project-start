/* eslint-disable no-extra-parens */
import React from "react";
import DeleteBin from "./DeleteBin";
import { Button } from "react-bootstrap";
import { tileItem } from "./interfaces";
import Pic from "./Pic";

type listProps = {
    setSourceTile: (newTile: tileItem[]) => void;
    sourceTile: tileItem[];
    tiles: tileItem[];
    deleteTile: (index: number) => void;
    updateSelectTile: (tile: tileItem) => void;
};

const ListOb: React.FC<listProps> = (props) => {
    const [search, setSearch]: [string, (search: string) => void] =
        React.useState("");
    const handleChange = (e: { target: { value: string } }) => {
        setSearch(e.target.value);
    };
    return (
        <div>
            <div
                style={{
                    display: "inline-block",
                    width: "100%",
                    height: "10vw"
                }}
            >
                <DeleteBin deleteTile={props.deleteTile} />
            </div>
            <div>
                <Button
                    onClick={() =>
                        props.setSourceTile(
                            props.sourceTile.sort((a, b) =>
                                a.name.localeCompare(b.name)
                            )
                        )
                    }
                >
                    Sort By Name
                </Button>
                <Button
                    onClick={() =>
                        props.setSourceTile(
                            props.sourceTile.sort((a, b) =>
                                a.snap.localeCompare(b.snap)
                            )
                        )
                    }
                >
                    Sort By Snap
                </Button>
            </div>
            <div>
                <input type="text" onChange={handleChange} />
                {props.sourceTile.map((sourceTile) => {
                    if (
                        search === "" ||
                        sourceTile.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    ) {
                        return (
                            <div
                                style={{
                                    display: "inline-block",
                                    width: "50%"
                                }}
                            >
                                <h3>{sourceTile.name}</h3>
                                <Pic
                                    tile={sourceTile}
                                    scale={100}
                                    updateSelectTile={props.updateSelectTile}
                                />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default ListOb;
