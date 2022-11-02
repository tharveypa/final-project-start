import React, { useState } from "react";
import { Task } from "./interfaces/task";
import { Button, Form } from "react-bootstrap";

export function Card(task: Task): JSX.Element {
    return (
        <div style={{ backgroundColor: "white" }}>
            Title: {task.title}
            Description: {task.description}
            Priority: {task.priority}
            Thumbtack Color: {task.thumbColor}
        </div>
    );
}
