import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import { cardData } from "../interfaces/cardData";
import trash from "../trash.png";

type deleteCardProps = {
    deleteNote: (id: number) => void;
};

const DeleteItem: React.FC<deleteCardProps> = (props) => {
    //Handles the dropping of things onto the trash can
    const [{ item }, drop] = useDrop({
        accept: [ItemTypes.Card],
        collect: (monitor) => ({
            item: monitor.getItem()
        }),
        drop: () => props.deleteNote(item.note.id)
    });
    return (
        <div ref={drop}>
            <img src={trash}></img>
        </div>
    );
};

export default DeleteItem;
