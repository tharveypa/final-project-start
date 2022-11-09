import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { Button } from "react-bootstrap";
import { Card } from "./Card";

// MAKE IT SO THAT CARDS ARE MADE HERE, SO TAKE IN AN ARRAY OF TASK AND MAKE CARDS FROM THEM
export function CardList(): JSX.Element {
    const [currList, modList] = useState<Task[]>([]); // going to use as a buffer to store the card before adding it (this way it should rerender after being given a new card)

    function comparePriority(a: Task, b: Task): number {
        if (parseInt(a.priority) > parseInt(b.priority)) {
            return -1;
        }
        if (parseInt(a.priority) < parseInt(b.priority)) {
            return 1;
        }
        return 0;
    }

    function compareTitle(a: Task, b: Task): number {
        // can make this compare color too since both are strings and it will sort the same
        if (a.title > b.title) {
            return -1;
        }
        if (a.title < b.title) {
            return 1;
        }
        return 0;
    }

    function sortIt(howTo: boolean): void {
        // going to just make two buttons, sounds more user friendly
        if (howTo) {
            // by priority
            const sorted: Task[] = currList.sort(comparePriority); // should compare based on priority
            const tmp: Task[] = sorted.map((task: Task): Task => ({ ...task }));
            modList(tmp);
            listIt();
        } else {
            // alphabetically by title
            const sorted: Task[] = currList.sort(compareTitle);
            const tmp: Task[] = sorted.map((task: Task): Task => ({ ...task }));
            modList(tmp);
            listIt();
        }
    }

    function addCard(inTask: Task): void {
        // need to set conditional based on creation of card, invoke with the card creation
        const newTask: Task = {
            title: inTask.title,
            description: inTask.description,
            priority: inTask.priority,
            thumbColor: inTask.thumbColor
        };
        const tmp: Task[] = currList.map((task: Task): Task => ({ ...task }));
        tmp.push(newTask);
        modList(tmp);
        //listIt();
    }

    function removeCard(inTask: Task): void {
        //need to make it so that arg is a Card
        const newNotes: Task[] = currList.filter(
            (task: Task) =>
                task.title !== inTask.title &&
                task.description !== inTask.description &&
                task.priority !== inTask.priority &&
                task.thumbColor != inTask.thumbColor
        );
        modList(newNotes);
        //listIt();
    }

    function resetList(): void {
        modList([]);
        //listIt();
    }

    function listIt(): void {
        // code to make a list out of an array, just using task.title for right now
        /*
        let str = "<ul>";
        currList.forEach(function (task) {
            str += "<li>" + task.title + "</li>";
        });
        str += "</ul>";
        const element = document.getElementById("taskList");
        if (element != null) element.innerHTML = str; // want to ensure this runs
        */
        currList.map((task: Task) => Card(task));
    }

    // MAKE SURE that it can display a list, even if incorrect
    return (
        // need to alter style, was not sure if we should make a Board.css to format the board (i.e, allocate a container of x% for each are of application)
        <div>
            <Button onClick={resetList}>Clear the list</Button>
            <Button onClick={() => sortIt(true)}>Sort by Priority</Button>
            <Button onClick={() => sortIt(false)}>Sort by Title</Button>
            <div id="taskList">
                <script>listIt();</script>
            </div>
            <Button
                onClick={() =>
                    addCard({
                        title: "test",
                        description: "test",
                        priority: "1",
                        thumbColor: "red"
                    })
                }
            >
                Add Card
            </Button>
            <Button
                onClick={() =>
                    removeCard({
                        title: "test",
                        description: "test",
                        priority: "1",
                        thumbColor: "red"
                    })
                }
            >
                Remove Card
            </Button>
        </div>
    );
    // FIXME need to make adding and removing based on events, namely creation of one from MakeNote and delete from however we delete
}
