import React, { useState } from "react";
import { useDrop } from "react-dnd";
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
        drop: () => addNoteData(item, 50, 75, 30, 70, 1)
    }); // task, height, width, top, left, zindex

    //state for holding our note and position info
    const [notesAndPositionInfo, setNotesAndPositionInfo] = useState<
        noteData[]
    >(startingNotesAndPositionInfo);

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
        >
            {/* This is the part that puts every note in the list of notes onto the corkboard*/}
            {notesAndPositionInfo.map((noteData: noteData) => {
                return (
                    <div
                        key={noteData.id}
                        style={{
                            height: noteData.height + "px",
                            width: noteData.width + "px",
                            backgroundColor: "yellow",
                            position: "absolute",
                            top: noteData.top + "%",
                            left: noteData.left + "%",
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
