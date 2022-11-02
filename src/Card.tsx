import React, { useState } from "react";
import { Task } from "./interfaces/task";
import { Button } from "react-bootstrap";
export function Card(): JSX.Element {
    const [currTask, setTask] = useState<Task>({
        title: "default",
        description: "default",
        priority: "1",
        thumbColor: "red"
    }); //default, does not really matter, just that it is initialized. Need to either make this meaningful or call updateTask as soon as it is created and pass in a new task
    //can make it so that you only click a card to modify it, going to currently have a button inside the card itself just for testing purposes
    //limiting to just the title for testing, fully working one SHOULD bring up a new create card interface? Or modify card interface?
    function updateTask(newTitle: string): void {
        const tmp: Task = { ...currTask, title: newTitle };
        setTask(tmp);
    }
    //this return is just for experimenting, not fully done yet
    return (
        <div style={{ backgroundColor: "white" }}>
            Title: {currTask.title}
            Description: {currTask.description}
            Priority: {currTask.priority}
            Thumbtack Color:{" "}
            <span style={{ color: "red" }}>{currTask.thumbColor}</span>
            <Button onClick={() => updateTask("New Title")}>
                Make it new!
            </Button>
        </div>
    );
}
