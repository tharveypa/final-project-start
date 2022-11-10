import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export function DeleteNote() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const deleteNote = () => {
        //here we would filter the cardlist to include every note WITHOUT the title entered
        handleClose();
        console.log("Deleted!");
    };

    return (
        <>
            <Button onClick={handleShow}>Delete Note</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete a Note:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="killNote">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="textarea"
                                placeholder="Note title..."
                                value={title}
                                onChange={titleHandler}
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={deleteNote}>Delete!</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
