import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { globalNote } from "./MakeNote";
import Card from "react-bootstrap/Card";
//import "@coreui/react";

//export function Note({ task, id }: { task: Task; id: number }): JSX.Element {

function CardComp({ task, id }: { task: Task; id: number }): JSX.Element {
    //const card = globalNote;
    return (
        <Card style={{ width: "12rem" }}>
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Card.Text>Priority: {task.priority}</Card.Text>
                <Card.Text>Thumbtack Color: {task.thumbColor}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardComp;
