import React, { useState } from "react";
import { Task } from "../interfaces/task";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export function EditCard({
    // input parameter from CardList ; is used within editCard so that CardList knows what card is being changed
    id,
    // input parameter from CardList ; Used for the editing of a card so that it gets changed in CardList
    editCard
}: {
    id: number;
    editCard: (id: number, inTask: Task) => void;
}): JSX.Element {
    // used to manage visibility of editCard modal
    const [show, setShow] = useState(false);

    // state that holds the title the user input
    const [title, setTitle] = useState("");
    // state that holds the description the user input
    const [description, setDesc] = useState("");
    // state that holds the color the user selected
    const [color, setColor] = useState("red");
    // state that holds the priority the user selected
    const [priority, setPriority] = useState("low");

    // list of colors the user can select
    const colors = ["red", "pink", "orange", "blue", "black"];
    // list of colors the user can select
    const priorities = ["low", "medium", "high"];

    // function that sets the modal to be hidden
    const handleClose = () => setShow(false);
    // function that sets the modal to be shown
    const handleShow = () => setShow(true);

    // function that handles a color being selected
    const colorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    // function that handles a priority being selected
    const priorityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriority(event.target.value);
    };

    // function that handles a title being typed
    const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    // function that handles a description being typed
    const descHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDesc(event.target.value);
    };

    // function that handles submitting the edits to the Card to CardList
    const sendEdit = () => {
        handleClose();

        // Calls the function passed in from CardList to add the created card to CardList
        editCard(id, {
            title: title,
            description: description,
            priority: priority,
            thumbColor: color
        });
    };

    return (
        <>
            {/* Button that opens the editCard Modal */}
            <Button onClick={handleShow}>🖉</Button>
            {/* Modal that facilitates the editing of cards */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Card:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* Text entry box for title */}
                        <Form.Group className="makeNoteTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="textarea"
                                placeholder="Card title..."
                                value={title}
                                onChange={titleHandler}
                                autoFocus
                            />
                        </Form.Group>

                        {/* Text entry box for description */}
                        <Form.Group className="makeNoteDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Card description..."
                                rows={3}
                                value={description}
                                onChange={descHandler}
                            />
                        </Form.Group>

                        {/* Radio buttons for priority */}
                        <Form.Label>Priority</Form.Label>
                        <Form.Group className="MakeNoteButtons">
                            {/* eslint-disable-next-line no-extra-parens */}
                            {priorities.map((p: string) => (
                                <>
                                    <Form.Check
                                        inline
                                        type="radio"
                                        id="priorityButtons"
                                        value={p}
                                        label={p}
                                        onChange={priorityHandler}
                                        checked={priority === p}
                                    />
                                </>
                            ))}
                        </Form.Group>

                        {/* Radio buttons for thumbtack color */}
                        <Form.Label>Thumbtack Color</Form.Label>
                        <Form.Group className="MakeNoteButtons">
                            {/* eslint-disable-next-line no-extra-parens */}
                            {colors.map((c: string) => (
                                <>
                                    <Form.Check
                                        inline
                                        type="radio"
                                        id="colorButtons"
                                        value={c}
                                        label={c}
                                        onChange={colorHandler}
                                        checked={color === c}
                                    />
                                </>
                            ))}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {/* Button that closes the modal without saving */}
                    <Button onClick={handleClose}>Close</Button>
                    {/* Button that saves changes to the card and closes the modal */}
                    <Button onClick={sendEdit}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
