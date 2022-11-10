import React from "react";
import { Button } from "react-bootstrap";

export const ShowFridgeButtons = () => {
    function ShowFridgePictures(name: string) {}

    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        ShowFridgePictures("Protein");
                    }}
                >
                    Protein
                </Button>
            </div>
        </div>
    );
};
export default ShowFridgeButtons;
