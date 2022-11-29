import React from "react";
import { useDrag } from "react-dnd";

function ToolDrop({ id, pic }) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
        }),
    }));
    return <img ref={drag} src={pic} />;
}

export default ToolDrop;
