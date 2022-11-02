import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export function MakeNote() {
    const [show, setShow] = useState(false);
    //FIXME: Use color to set thumbtack color when modal is made
    const [color, setColor] = useState("red");
    const colors = ["red", "pink", "orange", "blue", "black"];
    const [newNote, setNote] = useState();

    const [priority, setPriority] = useState("low");
    const priorities = ["low", "medium", "high"];

    const colorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    const priorityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriority(event.target.value);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow}>Make Note</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Make a New Note:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="makeNoteTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="textarea"
                                placeholder="Note title..."
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="makeNoteDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Label>Priority</Form.Label>
                        <Form.Group className="MakeNoteButtons">
                            {/* Radio buttons and all of their options!! Also disabling eslint because infinite loop */}
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
                                    />
                                </>
                            ))}
                        </Form.Group>
                        <Form.Label>Thumbtack Color</Form.Label>
                        <Form.Group className="MakeNoteButtons">
                            {/* Radio buttons and all of their options!! */}
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
                                    />
                                </>
                            ))}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleClose}>Create!</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
