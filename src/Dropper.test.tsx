import React from "react";
import { render, screen } from "@testing-library/react";
import { Dropper } from "./Dropper";

describe("Dropper Tests", () => {
    beforeEach(() => {
        render(<Dropper />);
    });

    test("Users can reset all pieces", () => {
        //find correct button
        const button = screen.getByText("Reset");
        //click button
        button.click();
        //now expect the pieces position to be 150, 100, etc.
        const piece = screen.getByTestId("pieces");
        expect(piece.clientTop).toEqual(150);
        expect(piece.clientLeft).toEqual(100);
    });

    test("Pieces Exist", () => {
        const piece = screen.getByTestId("pieces");
        expect(piece).toBeInTheDocument();
    });

    test("Background Puzzle Exists", () => {
        //find correct button
        const button = screen.getByText("Randomize Puzzle");
        expect(button).toBeInTheDocument();
    });
    /*
    test("Background Puzzle Button Works", () => {
        //find correct button
        const button = screen.getByText("Randomize Puzzle");
        //click button
        button.click();
        //the id of the puzzle should be different now
        expect(screen.queryByLabelText("Title:")).toBeInTheDocument();
    });
    */
});
