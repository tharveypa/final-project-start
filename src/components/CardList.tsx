import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { Button } from "react-bootstrap";
import CardComp from "./CardComp";
import { MakeNote } from "./MakeNote";
import { FilterNote } from "./FilterNote";
import { cardData } from "../interfaces/cardData";

export function CardList(): JSX.Element {
    // REMOVE THIS COMMENT  const [currList, modList] = useState<cardData[]>([]);

    const [currList, modList] = useState<cardData[]>([
        {
            task: {
                title: "Top with Priority",
                description: "test1",
                priority: "3",
                thumbColor: "Pink",
                assigned: []
            },
            id: 1
        },
        {
            task: {
                title: "Top with Color / Filtered",
                description: "test2",
                priority: "1",
                thumbColor: "Orange",
                assigned: []
            },
            id: 2
        }
    ]);

    //maintains the id of cards
    const [currentId, setCurrentId] = useState<number>(currList.length);

    function comparePriority(a: cardData, b: cardData): number {
        // FIXME low medium high priority (strings) l m h
        if (parseInt(a.task.priority) > parseInt(b.task.priority)) {
            return -1;
        }
        if (parseInt(a.task.priority) < parseInt(b.task.priority)) {
            return 1;
        }
        return 0;
    }

    function compareColor(a: cardData, b: cardData): number {
        // can make this compare color too since both are strings and it will sort the same
        if (a.task.thumbColor > b.task.thumbColor) {
            return -1;
        }
        if (a.task.thumbColor < b.task.thumbColor) {
            return 1;
        }
        return 0;
    }

    function sortIt(howTo: boolean): void {
        // sorts by priority
        if (howTo) {
            const sorted: cardData[] = currList.sort(comparePriority); // should compare based on priority
            const tmp: cardData[] = sorted.map(
                (cardData: cardData): cardData => ({ ...cardData })
            );
            modList(tmp);
        } else {
            // sorts alphabetically by color
            const sorted: cardData[] = currList.sort(compareColor);
            const tmp: cardData[] = sorted.map(
                (cardData: cardData): cardData => ({ ...cardData })
            );
            modList(tmp);
        }
    }

    function addCard(inTask: Task): void {
        // need to set conditional based on creation of card, invoke with the card creation
        const newTask: Task = {
            title: inTask.title,
            description: inTask.description,
            priority: inTask.priority,
            thumbColor: inTask.thumbColor,
            assigned: inTask.assigned
        };
        const tmp: cardData[] = currList.map(
            (cardData: cardData): cardData => ({ ...cardData })
        );

        tmp.push({ task: newTask, id: currentId });
        setCurrentId(currentId + 1);

        modList(tmp);
    }

    function removeCard(inID: number): void {
        //removes a card from the list by id

        //filter out all cards that match the input ID
        const newNotes: cardData[] = currList.filter(
            (cardData: cardData) => cardData.id != inID
        );
        modList(newNotes);
    }

    function editCard(id: number, newTask: Task) {
        //overwrites the task of all cards matching id to newTask
        modList(
            currList.map((cardData: cardData): cardData => {
                if (cardData.id === id) return { task: newTask, id: id };
                return cardData;
            })
        );
    }

    function resetList(): void {
        modList([]);
    }

    function filterList(
        coral: boolean,
        pink: boolean,
        orange: boolean,
        moccasin: boolean,
        plum: boolean
    ): void {
        // filters the list based on modal input
        let newList = { ...currList };
        if (coral)
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Coral"
            );
        if (pink)
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Pink"
            );
        if (orange)
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Orange"
            );
        if (moccasin)
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Moccasin"
            );
        if (plum)
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Plum"
            );
        modList(newList);
    }

    // FIXME Part 2: Electric Boogalo, modify the CSS to have overflow-y: auto rule for this div
    console.log(currList.length);
    console.log(currList[0]);
    console.log(currList[1]);
    console.log(currList[2]);
    return (
        <div>
            <MakeNote addCard={addCard}></MakeNote>
            <FilterNote filterList={filterList}></FilterNote>
            <Button onClick={resetList}>Clear the list</Button>
            <Button onClick={() => sortIt(true)}>Sort by Priority</Button>
            <Button onClick={() => sortIt(false)}>Sort by Color</Button>
            <div id="taskList">
                {currList.map((cardData: cardData) => {
                    return (
                        <CardComp
                            key={"card #" + cardData.id}
                            task={cardData.task}
                            id={cardData.id}
                            editCard={editCard}
                            deleteCard={removeCard}
                        ></CardComp>
                    );
                })}
            </div>
        </div>
    );
    // FIXME need to make adding and removing based on events, namely creation of one from MakeNote and delete from however we delete
}
