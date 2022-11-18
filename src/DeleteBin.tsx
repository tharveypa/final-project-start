import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { tileItem } from "./interfaces";
import Overlay from "./Overlay";

type DeleteBinProps = {
    deleteTile: (index: number) => void;
};

const DeleteBin: React.FC<DeleteBinProps> = (props) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: [ItemTypes.free, ItemTypes.snap],
        canDrop: () => true,
        drop: (item: { type: string; tile: tileItem }) =>
            props.deleteTile(item.tile.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });
    return (
        <div
            ref={drop}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                border: "1px solid gray"
            }}
        >
            Discard
            {isOver && canDrop && <Overlay color="grey" />}
        </div>
    );
};

export default DeleteBin;
