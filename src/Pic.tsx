/* eslint-disable no-extra-parens */
import React, { Fragment, useState } from "react";
import { useDrag } from "react-dnd";
import { tileItem } from "./interfaces";
import { Button, Form } from "react-bootstrap";
import "./Button.css";
// import { BackgroundImage } from "./image/img";
// import { image } from "html2canvas/dist/types/css/types/image";

type ObjectProp = {
    tile: tileItem;
    scale: number;
    updateSelectTile: (tile: tileItem) => void;
    //position: [number, number];
    //orientation: number;
    //size: number;
    //texture: string;
    //type: string;
};

const Pic: React.FC<ObjectProp> = (props) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: props.tile.snap, tile: props.tile },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    });
    const [preview, setPreview] = useState<boolean>(false);
    const [rotateLeft, setRotateLeft] = useState<boolean>(false);
    const [rotateRight, setRotateRight] = useState<boolean>(false);
    const [rotate] = useState<boolean>(false);
    const [isColor, setIsColor] = useState<boolean>(false);
    const update = (event: React.MouseEvent) => {
        if (event.button === 1 && props.tile.id >= 0) {
            props.updateSelectTile(props.tile);
        }
    };
    function ChangeImage(): void {
        setPreview(!preview);
    }
    function RotateLeft(): void {
        setRotateLeft(!rotateLeft);
        rotate === true;
    }
    function RotateRight(): void {
        setRotateRight(!rotateRight);
        rotate === true;
    }
    function chooseColor(): void {
        setIsColor(!isColor);
    }
    const [choseColor, setChoseColor] = useState<string>("red");
    const updateColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChoseColor(event.target.value);
    };
    const Color = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    return (
        <Fragment>
            <div
                ref={drag}
                onMouseDown={update}
                style={{
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 10,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center"
                }}
            >
                <div className="img">
                    <Button className="button" onClick={ChangeImage}></Button>
                    {preview ? (
                        <div>
                            <Button onClick={RotateLeft}>left</Button>
                            <Button onClick={RotateRight}>right</Button>
                            <Button onClick={chooseColor}>choose Color</Button>
                            {isColor && (
                                <div>
                                    <Form.Group>
                                        <Form.Label></Form.Label>
                                        {Color.map((color: string) => (
                                            <Form.Check
                                                key={color}
                                                onChange={updateColor}
                                                label={color}
                                                checked={choseColor === color}
                                                // style={{
                                                //     backgroundColor: color
                                                // }}
                                                inline
                                            />
                                        ))}
                                    </Form.Group>
                                    <img
                                        src={require("" + props.tile.src)}
                                        // background-color={choseColor}
                                        background-color="red"
                                    />
                                </div>
                            )}
                            {rotateRight ? (
                                <img
                                    className="rotateRight"
                                    src={require("" + props.tile.src)}
                                />
                            ) : (
                                ""
                            )}
                            {rotateLeft ? (
                                <img
                                    className="rotateLeft"
                                    src={require("" + props.tile.src)}
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    ) : (
                        <div>
                            <img
                                src={require("" + props.tile.src)}
                                width={props.scale + "%"}
                                height={props.scale + "%"}
                            />
                        </div>
                    )}
                </div>
                {/* {props.tile.color}
                <img
                    src={require("" + props.tile.src)}
                    width={props.scale + "%"}
                    height={props.scale + "%"}
                /> */}
            </div>
        </Fragment>
    );
};

export default Pic;
