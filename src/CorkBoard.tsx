import React, { useState } from "react";
import { NotEmittedStatement } from "typescript";

export function CorkBoard({
    startingNotesAndPositionInfo
}: {
    startingNotesAndPositionInfo: [
        Note,
        number,
        number,
        number,
        number,
        number
    ][];
}): JSX.Element {
    //state for holding our note and pos info
    const [notesAndPositionInfo, setnotesAndPositionInfo] = useState<
        [Note, number, number, number, number, number][]
    >(startingNotesAndPositionInfo);

    //edits a note and position info using the Notes id
    function editNoteAndPosition(
        noteId: number,
        newNote: Note,
        height: number,
        width: number,
        top: number,
        left: number,
        zIndex: number
    ) {
        setnotesAndPositionInfo(
            notesAndPositionInfo.map(
                (
                    noteAndPosition: [
                        Note,
                        number,
                        number,
                        number,
                        number,
                        number
                    ]
                ): [Note, number, number, number, number, number] =>
                    noteAndPosition[0].id === noteId
                        ? [newNote, height, width, top, left, zIndex]
                        : noteAndPosition
            )
        );
    }

    function addNote(
        newNote: Note,
        height: number,
        width: number,
        top: number,
        left: number,
        zIndex: number
    ) {
        setnotesAndPositionInfo([
            ...notesAndPositionInfo,
            [
                { ...newNote, id: notesAndPositionInfo.length + 1 },
                height,
                width,
                top,
                left,
                zIndex
            ]
        ]);
    }

    return (
        <div
            style={{
                height: "600px",
                width: "600px",
                backgroundColor: "#7E481C",
                position: "absolute",
                top: "100px",
                left: "100px"
            }}
        >
            {/* This is the part that puts every note in the list of notes onto the corkboard*/}
            {notesAndPositionInfo.map(
                (
                    noteAndPosition: [
                        Note,
                        number,
                        number,
                        number,
                        number,
                        number
                    ]
                ) => {
                    return (
                        <div
                            key={1}
                            style={{
                                height: noteAndPosition[1] + "%",
                                width: noteAndPosition[2] + "%",
                                backgroundColor: "yellow",
                                position: "absolute",
                                top: noteAndPosition[3] + "%",
                                left: noteAndPosition[4] + "%",
                                zIndex: noteAndPosition[5] + "%"
                            }}
                        ></div>
                    );
                }
            )}
        </div>
    );
}
