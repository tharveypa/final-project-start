import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export function MakeNote() {
    const [show, setShow] = useState(false);

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
                        <Form.Group className="makeNote">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="textarea"
                                placeholder="Note title..."
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="makeNote">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
