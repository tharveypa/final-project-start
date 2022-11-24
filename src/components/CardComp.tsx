import React from "react";
import { Task } from "../interfaces/task";
import { EditCard } from "./EditCard";
import Card from "react-bootstrap/Card";
import { ItemTypes } from "../constants";
import { useDrag } from "react-dnd";

function CardComp({
    task,
    id,
    editCard
}: {
    task: Task;
    id: number;
    editCard: (id: number, newTask: Task) => void;
}): JSX.Element {
    const [, drag] = useDrag({
        //type is Card; Type determines where it can be dropped
        item: { type: ItemTypes.Card, id: id }
    });

    return (
        <div>
            <Card
                style={{ width: "12rem" }}
                //ref makes the dragging of the Card Work
                ref={drag}
            >
                <EditCard id={id} editCard={editCard}></EditCard>
                <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                    <Card.Text>{task.description}</Card.Text>
                    <Card.Text>Priority: {task.priority}</Card.Text>
                    <Card.Text>Thumbtack Color: {task.thumbColor}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardComp;
