import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { Button } from "react-bootstrap";
import CardComp from "./CardComp";
import { MakeNote } from "./MakeNote";
import { FilterNote } from "./FilterNote";
import { cardData } from "../interfaces/cardData";

export function CardList(): JSX.Element {
    const [currList, modList] = useState<cardData[]>([]); // the entire list of tasks
    const [displayList, modDisList] = useState<cardData[]>([]); // what is going to be displayed (due to filter)

    //maintains the id of cards
    const [currentId, setCurrentId] = useState<number>(currList.length);

    function comparePriority(a: cardData, b: cardData): number {
        if (
            (a.task.priority === "high" && b.task.priority !== "high") ||
            (a.task.priority === "medium" && b.task.priority === "low")
        ) {
            return -1;
        }
        if (
            (a.task.priority === "low" && b.task.priority !== "low") ||
            (a.task.priority === "medium" && b.task.priority === "high")
        ) {
            return 1;
        }
        return 0;
    }

    function compareColor(a: cardData, b: cardData): number {
        if (a.task.thumbColor < b.task.thumbColor) {
            return -1;
        }
        if (a.task.thumbColor > b.task.thumbColor) {
            return 1;
        }
        return 0;
    }

    function sortIt(howTo: boolean): void {
        // sorts by priority
        if (howTo) {
            const sorted: cardData[] = currList.sort(comparePriority);
            const tmp: cardData[] = sorted.map(
                (cardData: cardData): cardData => ({
                    ...cardData,
                    task: { ...cardData.task },
                    id: cardData.id
                })
            );
            const sorted2: cardData[] = displayList.sort(comparePriority);
            const tmp2: cardData[] = sorted2.map(
                (cardData: cardData): cardData => ({
                    ...cardData,
                    task: { ...cardData.task },
                    id: cardData.id
                })
            );
            modList(tmp);
            modDisList(tmp2);
        } else {
            // sorts alphabetically by color
            const sorted: cardData[] = currList.sort(compareColor);
            const tmp: cardData[] = sorted.map(
                (cardData: cardData): cardData => ({
                    ...cardData,
                    task: { ...cardData.task },
                    id: cardData.id
                })
            );
            const sorted2: cardData[] = displayList.sort(compareColor);
            const tmp2: cardData[] = sorted2.map(
                (cardData: cardData): cardData => ({
                    ...cardData,
                    task: { ...cardData.task },
                    id: cardData.id
                })
            );
            modList(tmp);
            modDisList(tmp2);
        }
    }

    function addCard(inTask: Task): void {
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
        const tmp2: cardData[] = displayList.map(
            (cardData: cardData): cardData => ({ ...cardData })
        );
        tmp2.push({ task: newTask, id: currentId });
        setCurrentId(currentId + 1);
        modList(tmp);
        modDisList(tmp2);
    }

    function removeCard(inID: number): void {
        //removes a card from the list by id

        //filter out all cards that match the input ID
        const newNotes: cardData[] = currList.filter(
            (cardData: cardData) => cardData.id != inID
        );
        const newNotes2: cardData[] = displayList.filter(
            (cardData: cardData) => cardData.id != inID
        );
        modList(newNotes);
        modDisList(newNotes2);
    }

    function editCard(id: number, newTask: Task) {
        //overwrites the task of all cards matching id to newTask
        modList(
            currList.map((cardData: cardData): cardData => {
                if (cardData.id === id) return { task: newTask, id: id };
                return cardData;
            })
        );
        modDisList(
            displayList.map((cardData: cardData): cardData => {
                if (cardData.id === id) return { task: newTask, id: id };
                return cardData;
            })
        );
    }

    function resetList(): void {
        modList([]);
        modDisList([]);
    }

    /*
        Returns true if the card is supposed to be filtered. Needed to know when a filter relaxed if a card should be added back to displayList
    */
    function isFiltered(
        card: cardData,
        low: boolean,
        medium: boolean,
        high: boolean,
        coral: boolean,
        pink: boolean,
        orange: boolean,
        moccasin: boolean,
        plum: boolean
    ): boolean {
        return (
            (card.task.priority === "low" && low) ||
            (card.task.priority === "medium" && medium) ||
            (card.task.priority === "high" && high) ||
            (card.task.thumbColor === "Coral" && coral) ||
            (card.task.thumbColor === "Pink" && pink) ||
            (card.task.thumbColor === "Orange" && orange) ||
            (card.task.thumbColor === "Moccasin" && moccasin) ||
            (card.task.thumbColor === "Plum" && plum)
        );
    }

    function filterList(
        low: boolean,
        medium: boolean,
        high: boolean,
        coral: boolean,
        pink: boolean,
        orange: boolean,
        moccasin: boolean,
        plum: boolean
    ): void {
        // filters the list based on modal input
        let newList = displayList.map(
            (mapcard: cardData): cardData => ({
                ...mapcard,
                task: { ...mapcard.task },
                id: mapcard.id
            })
        );
        //filters the priorities
        if (low) {
            newList = newList.filter(
                (cd: cardData) => cd.task.priority !== "low"
            );
        } else {
            // ensures that if a priority is unfiltered it will appear back in the list
            currList.map((cardD: cardData) =>
                cardD.task.priority === "low" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : console.log("")
            );
        }
        if (medium) {
            newList = newList.filter(
                (cd: cardData) => cd.task.priority !== "medium"
            );
        } else {
            // ensures that if a priority is unfiltered it will appear back in the list
            currList.map((cardD: cardData) =>
                cardD.task.priority === "medium" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : console.log("")
            );
        }
        if (high) {
            newList = newList.filter(
                (cd: cardData) => cd.task.priority !== "high"
            );
        } else {
            // ensures that if a priority is unfiltered it will appear back in the list
            currList.map((cardD: cardData) =>
                cardD.task.priority === "high" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : console.log("")
            );
        }
        //filters the colors
        if (coral) {
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Coral"
            );
        } else {
            // ensures that if a color is unfiltered it will appear back in the list
            currList.map((cardD: cardData) =>
                cardD.task.thumbColor === "Coral" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : console.log("")
            );
        }
        if (pink) {
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Pink"
            );
        } else {
            currList.map((cardD: cardData) =>
                cardD.task.thumbColor === "Pink" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : console.log("")
            );
        }
        if (orange) {
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Orange"
            );
        } else {
            currList.map((cardD: cardData) =>
                cardD.task.thumbColor === "Orange" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : console.log("")
            );
        }
        if (moccasin) {
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Moccasin"
            );
        } else {
            currList.map((cardD: cardData) =>
                cardD.task.thumbColor === "Moccasin" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : console.log("")
            );
        }
        if (plum) {
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Plum"
            );
        } else {
            currList.map((cardD: cardData) =>
                cardD.task.thumbColor === "Plum" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : console.log("")
            );
        }
        modDisList(newList);
    }

    // FIXME Part 2: Electric Boogalo, modify the CSS to have overflow-y: auto rule for this div
    return (
        <div>
            <MakeNote addCard={addCard}></MakeNote>
            <FilterNote filterList={filterList}></FilterNote>
            <Button onClick={resetList}>Clear the list</Button>
            <Button onClick={() => sortIt(true)}>Sort by Priority</Button>
            <Button onClick={() => sortIt(false)}>Sort by Color</Button>
            <div id="CardList">
                {displayList.map((cardData: cardData) => {
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
}
