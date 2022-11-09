import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { Button } from "react-bootstrap";
import { CardListProps } from "../interfaces/CardListProps.ts";
export function Card(inputTask: Task): JSX.Element {
    const [currTask, setTask] = useState<Task>(inputTask);
    //default, does not really matter, just that it is initialized. Need to either make this meaningful or call updateTask as soon as it is created and pass in a new task
    //can make it so that you only click a card to modify it, going to currently have a button inside the card itself just for testing purposes
    //limiting to just the title for testing, fully working one SHOULD bring up a new create card interface? Or modify card interface?
    function updateTask(newTask: Task): void {
        // FIXME: Make work for full Task recreation, potentially use some of Blade's HTML to display a form. Need to make this also affect
        // CardList Task[]
        const tmp: Task = { ...newTask };
        setTask(tmp);
        const arrTmp: Task[] = [...currTaskArr];
        if (arrTmp.indexOf(inputTask) !== -1)
            arrTmp[arrTmp.indexOf(inputTask)] = { ...tmp };
        modList(arrTmp);
        // I think these errors are caused because they are not in the same file (like how they were in Task 9)
        // If no workaround I can move some of this stuff to App.tsx
    }

    return (
        <div style={{ backgroundColor: "white", border: "1 px black" }}>
            Title: {currTask.title} <br></br>
            Description: {currTask.description} <br></br>
            Priority: {currTask.priority} <br></br>
            Thumbtack Color:{currTask.thumbColor}
            <span style={{ color: currTask.thumbColor }}>
                {currTask.thumbColor}
            </span>
            <br></br>
            <Button
                onClick={() =>
                    updateTask({
                        title: "Testing Title",
                        description: "Testing Description",
                        priority: "1",
                        thumbColor: "red"
                    })
                }
            >
                Make it new!
            </Button>
        </div>
    );
    // FIXME the actual "Make it new!" button is going to onClick pop up a Modal like how Blade's MakeNote does but instead of a MakeNote
    // component, it will actually just be the HTML of the return and will instead modify the current Task in the Card
    // This code will have some problems for unused functions as of now, but adding that in should be fairly simple, at which point I will 
    // remoe this silly 4 comments for a single block (just came out of Notepad so didn't even register /**/)
}
