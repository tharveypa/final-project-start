import React from "react";
import { Button } from "react-bootstrap";
export function RandomizeButton(): JSX.Element {
    return (
        <span>
            <Button
            //onClick={} This should randomize the puzzle to a different one.
            >
                Reset
            </Button>
        </span>
    );
}
