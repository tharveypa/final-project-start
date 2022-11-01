import React from "react";
import { Form } from "react-bootstrap";

const GridEdit = ({
    changeX,
    changeY
}: {
    changeX: (x: number) => void;
    changeY: (y: number) => void;
}) => {
    function updateX(event: React.ChangeEvent<HTMLInputElement>) {
        changeX(parseInt(event.target.value));
    }

    function updateY(event: React.ChangeEvent<HTMLInputElement>) {
        changeY(parseInt(event.target.value));
    }

    return (
        <div>
            <div>Change Grid size</div>
            <Form.Group controlId="formShortAnswer">
                <Form.Label>X:</Form.Label>
                <Form.Control type="number" onChange={updateX} />
                <Form.Label>Y:</Form.Label>
                <Form.Control type="number" onChange={updateY} />
            </Form.Group>
        </div>
    );
};

export default GridEdit;
