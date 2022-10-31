import React, { useState } from "react";

export function CorkBoard({
    notesAndPositionInfo
}: {
    notesAndPositionInfo: [number, number, number, number, number][];
}): JSX.Element {
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
                (noteAndPosition: [number, number, number, number, number]) => {
                    return (
                        <div
                            key={1}
                            style={{
                                height: noteAndPosition[0] + "%",
                                width: noteAndPosition[1] + "%",
                                backgroundColor: "yellow",
                                position: "absolute",
                                top: noteAndPosition[2] + "%",
                                left: noteAndPosition[3] + "%",
                                zIndex: noteAndPosition[4] + "%"
                            }}
                        ></div>
                    );
                }
            )}
        </div>
    );
}
