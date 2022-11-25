import React from "react";
import { render, screen } from "@testing-library/react";
import { CorkBoard } from "./CorkBoard";

const testNote = [
    {
        task: {
            title: "Complete CISC 275 Project",
            description: "Just do it",
            priority: "medium",
            thumbColor: "purple",
            assigned: ["Fred"]
        },
        id: 1,
        height: 50,
        width: 75,
        top: 60,
        left: 60,
        zIndex: 2
    }
];

const testNotes = [
    {
        task: {
            title: "Complete CISC 275 Project",
            description: "Just do it",
            priority: "medium",
            thumbColor: "purple",
            assigned: ["Fred"]
        },
        id: 1,
        height: 50,
        width: 75,
        top: 60,
        left: 60,
        zIndex: 2
    },
    {
        task: {
            title: "Walk the Dog",
            description:
                "I need to walk my dog if I don't walk him he will be sad so I should do that",
            priority: "high",
            thumbColor: "yellow",
            assigned: ["Fredling"]
        },
        id: 2,
        height: 80,
        width: 80,
        top: 20,
        left: 20,
        zIndex: 1
    },
    {
        task: {
            title: "Perform open heart surgery",
            description: "It's filthy in there",
            priority: "low",
            thumbColor: "red",
            assigned: ["Medic TF2"]
        },
        id: 3,
        height: 50,
        width: 50,
        top: 70,
        left: 20,
        zIndex: 0
    }
];

describe("CorkBoard Component tests", () => {
    test("CorkBoard displays a note", () => {
        render(<CorkBoard startingNotesAndPositionInfo={testNote}></CorkBoard>);

        const firstNote = screen.getByText("Complete CISC 275 Project");
        expect(firstNote).toBeInTheDocument();
    });
    test("CorkBoard displays multiple notes", () => {
        render(
            <CorkBoard startingNotesAndPositionInfo={testNotes}></CorkBoard>
        );
        const firstNote = screen.getByText("Complete CISC 275 Project");
        expect(firstNote).toBeInTheDocument();
        const secondNote = screen.getByText("Walk the Dog");
        expect(secondNote).toBeInTheDocument();
        const thirdNote = screen.getByText("Walk the Dog");
        expect(thirdNote).toBeInTheDocument();
    });
});
