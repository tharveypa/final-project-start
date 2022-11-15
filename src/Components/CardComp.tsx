import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { globalNote } from "./MakeNote";
import Card from "react-bootstrap/Card";
//import "@coreui/react";

function CardComp() {
    const card = globalNote;
    return (
        <Card style={{ width: "12rem" }}>
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Card.Text>{card.priority}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardComp;
