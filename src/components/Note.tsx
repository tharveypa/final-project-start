import "../Note.css";
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
            //className="flexchild"
            style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#ee964d",
                //wordBreak: "break-word",
                wordBreak: "break-all",
                wordWrap: "break-word",
                whiteSpace: "initial",
                border: "2px solid white",
                borderRadius: "5px"
                //flex: "1 0 0"
            }}
        >
            <b>Title</b>: {task.title}
            <br />
            <b>Description</b>: {task.description}
            <br />
            <b>Priority</b>: {task.priority}
            <br />
            <b>Assignees</b>: {task.assigned.join(", ")}
            <br />
        </div>
    );
}
