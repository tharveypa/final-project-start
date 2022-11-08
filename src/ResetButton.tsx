import React from "react";
import { Button } from "react-bootstrap";
export function ResetButton(): JSX.Element {
    return (
        <span>
            <Button
            //onClick={} This should reset the pieces back
            >
                Reset
            </Button>
        </span>
    );
}
