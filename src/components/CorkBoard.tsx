import React, { useEffect, useState } from "react";
import { useDragLayer, useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import { noteData } from "../interfaces/noteData";
import { Task } from "../interfaces/task";
import { Note } from "./Note";

export function CorkBoard({
    startingNotesAndPositionInfo
}: {
    startingNotesAndPositionInfo: noteData[];
}): JSX.Element {
    //Handles the dropping of things onto the corkboard
    // NOTE FOR ME the fields 50, 75, blah blah blah, will need to be passed from the drag (last position, etc.) No grids like chess
    const [{ item }, drop] = useDrop({
        accept: ItemTypes.Card,
        collect: (monitor) => ({
            item: monitor.getItem()
        }),
        drop: () => {
            addNoteData(
                {
                    title: "Test",
                    description: "TEST",
                    priority: "low",
                    thumbColor: "pink",
                    assigned: ["someone"]
                },
                50,
                75,
                currentOffset.y -
                    boardTop +
                    (grabOffset?.y - sourceOffset?.y + 10), //+ scrollPositionY,
                currentOffset.x -
                    boardLeft +
                    (grabOffset?.x - sourceOffset?.x - 100), //+ scrollPositionX,
                1
            );
        }
    }); // task, height, width, top, left, zindex

    //this is the the state the keeps track of the position since use Drop is blithering useless
    const { currentOffset, grabOffset, sourceOffset } = useDragLayer(
        (monitor) => ({
            currentOffset: monitor.getSourceClientOffset(),
            grabOffset: monitor.getInitialClientOffset(),
            sourceOffset: monitor.getInitialSourceClientOffset()
        })
    );

    // variable to access scroll offset (pain & agony)
    const [scrollPositionY, setScrollPositionY] = useState(0);
    const [scrollPositionX, setScrollYPositionX] = useState(0);

    const handleScroll = () => {
        const positionY = window.pageYOffset;
        setScrollPositionY(positionY);
        const positionX = window.pageXOffset;
        setScrollYPositionX(positionX);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    /* 
    HAHA MICHAEL IS RIGHT TERNARYS ARE IMPOSSIBLE I LOVE THIS!! Need to set zindex based on low medium or high

    code for top: document.getElementById(item.id).getBoundingClientRect().y
    code for left: document.getElementById(item.id).getBoundingClientRect().y

    
    */

    //state for holding our note and position infos
    const [notesAndPositionInfo, setNotesAndPositionInfo] = useState<
        noteData[]
    >(startingNotesAndPositionInfo);

    //state that will be needed for when the board scales
    const [boardTop, setBoardTop] = useState<number>(50);
    const [boardLeft, setBoardLeft] = useState<number>(700);

    ///*
    //maintains the id of noteDatas as they get added to the list of notesAndPositionInfo
    const [currentId, setCurrentId] = useState<number>(
        notesAndPositionInfo.length
    );

    //*/
    //edits a note and position data associated with that note based on the parameters passed in
    //see noteData.ts for what these parameters are
    // function editNoteData(
    //     noteId: number,
    //     newTask: Task,
    //     height: number,
    //     width: number,
    //     top: number,
    //     left: number,
    //     zIndex: number
    // ) {
    //     setNotesAndPositionInfo(
    //         notesAndPositionInfo.map((noteAndPosition: noteData): noteData => {
    //             // DO NOT TURN THIS INTO A TERNARY PRETTIER AND ESLINT WILL HAVE AN ENDLESS WAR IF YOU DO
    //             if (noteAndPosition.id === noteId)
    //                 return {
    //                     ...noteAndPosition,
    //                     task: newTask,
    //                     height: height,
    //                     width: width,
    //                     top: top,
    //                     left: left,
    //                     zIndex: zIndex
    //                 };
    //             return noteAndPosition;
    //         })
    //     );
    // }

    //adds a note and position data associuated with that note based on the parameters passed in
    //see noteData.ts for what these parameters mean
    function addNoteData(
        newTask: Task,
        height: number,
        width: number,
        top: number,
        left: number,
        zIndex: number
    ) {
        setCurrentId(currentId + 1);
        console.log(
            /*
            "WHAT WE ARE PASSING TO addNoteData: newTask = " +
                newTask +
                ", height = " +
                height +
                ", width = " +
                width +
                ", top = " +
                top +
                ", top - boardTop = " +
                (top - boardTop) +
                ", left = " +
                left +
                ", left - boardLeft = " +
                (left - boardLeft) +
                ", zIndex = " +
                zIndex +
                "\n" +
                scrollPositionX +
                " " +
                scrollPositionY +
                "\n"
                */
            "x: " +
                currentOffset?.x +
                "\n" +
                "y: " +
                currentOffset?.y +
                "\n" +
                "grabX: " +
                (grabOffset?.x - sourceOffset?.x) +
                "\n" +
                "grabY: " +
                (grabOffset?.y - sourceOffset?.y) +
                "\n"
        );

        setNotesAndPositionInfo([
            ...notesAndPositionInfo,
            {
                task: newTask,
                id: currentId,
                height: height,
                width: width,
                top: top,
                left: left,
                zIndex: zIndex
            }
        ]);
    }

    //deletes a note and position data associated with that note based on the id
    // function deleteNoteAndPosition(noteId: number) {
    //     setNotesAndPositionInfo(
    //         notesAndPositionInfo.filter(
    //             (noteData: noteData): boolean => noteId !== noteData.id
    //         )
    //     );
    // }

    return (
        <div
            ref={drop}
            style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#7E481C",
                position: "relative"
            }}
            id={"CorkBoard"}
        >
            {/* This is the part that puts every note in the list of notes onto the corkboard*/}
            {notesAndPositionInfo.map((noteData: noteData) => {
                return (
                    <div
                        key={"note: " + noteData.id}
                        style={{
                            height: noteData.height + "px",
                            width: noteData.width + "px",
                            backgroundColor: "yellow",
                            position: "absolute",
                            top: noteData.top + "px",
                            left: noteData.left + "px",
                            zIndex: noteData.zIndex + "%"
                        }}
                    >
                        <Note task={noteData.task} id={noteData.id}></Note>
                    </div>
                );
            })}
        </div>
    );
}
