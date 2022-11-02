import React from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { Button } from "react-bootstrap";

const printScreen = () => {
    const map = document.getElementById("map");
    if (map !== null) {
        html2canvas(map).then(function (canvas) {
            canvas.toBlob(function (blob) {
                if (blob !== null) {
                    saveAs(blob, "pretty image.png");
                }
            });
        });
    }
};

const ImageDownload = () => {
    return (
        <Button
            className="image_button"
            onClick={() => {
                printScreen();
            }}
        >
            Save Map
        </Button>
    );
};

export default ImageDownload;
