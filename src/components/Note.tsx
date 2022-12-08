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
                backgroundColor: "yellow",
                //wordBreak: "break-word",
                wordBreak: "break-all",
                wordWrap: "break-word",
                whiteSpace: "initial"
                //flex: "1 0 0"
            }}
        >
            Title: {task.title}
            <br />
            Description: {task.description}
            <br />
            Priority: {task.priority}
            <br />
            Assignees: {task.assigned.join(", ")}
            <br />
        </div>
    );
}
