import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { Button, Form } from "react-bootstrap";
//import { Card } from "./Card";
export function CardList(): JSX.Element {
    const [currList, modList] = useState<Task[]>([]); // going to use as a buffer to store the card before adding it (this way it should rerender after being given a new card)
    //FIXME make this be useState<Card[]>([]), just waiting to do so until I understand state
    const [sort, setSort] = useState<boolean>(true); // two modes for two types of sorts, sorts invoked by checkbox

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
        if (a.title > b.title) {
            return -1;
        }
        if (a.title < b.title) {
            return 1;
        }
        return 0;
    }

    function sortIt(event: React.ChangeEvent<HTMLInputElement>): void {
        // from a checkbox
        setSort(event.target.checked);
        if (sort) {
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
        listIt();
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
        listIt();
    }

    function resetList(): void {
        modList([]);
        listIt();
    }

    function listIt(): void {
        // code to make a list out of an array, just using task.title for right now
        //FIXME make this work for Cards (need to access their underlying interface / fields)
        let str = "<ul>";
        currList.forEach(function (task) {
            str += "<li>" + task.title + "</li>";
        });
        str += "</ul>";
        const element = document.getElementById("taskList");
        if (element != null) element.innerHTML = str; // want to ensure this runs
    }

    // MAKE SURE that it can display a list, even if incorrect
    return (
        // need to alter style, was not sure if we should make a Board.css to format the board (i.e, allocate a container of x% for each are of application)
        <div>
            <Button onClick={resetList}>Clear the list</Button>
            <Form.Check
                type="checkbox"
                id="sortingType"
                label="Check for priority, otherwise alphabetical"
                checked={sort}
                onChange={sortIt}
            />
            <div id="taskList"></div>
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
}
