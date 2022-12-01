import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import { Task } from "../interfaces/task";

export function Note({ task, id }: { task: Task; id: number }): JSX.Element {
    //handles the dragging of the Note
    const [, drag] = useDrag({
        //type is note; Type determines where it can be dropped
        item: { type: ItemTypes.Card, id: id, shouldAdd: false, task: task }
    });

    return (
        <div
            //makes the dragging of the note work
            ref={drag}
            //style controls how the note looks
            style={{
                height: "100%",
                width: "100%",
                backgroundColor: "yellow"
            }}
        >
            Title: {task.title}
            <br />
            Description: {task.description}
            <br />
            Priortity: {task.priority}
        </div>
    );
}
