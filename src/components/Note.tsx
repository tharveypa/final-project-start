import React from "react";
import { Task } from "../interfaces/task";

export function Note({ task, id }: { task: Task; id: number }): JSX.Element {
    return (
        <div
            style={{
                height: "100%",
                width: "100%",
                backgroundColor: "yellow"
                //position: "relative"
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
