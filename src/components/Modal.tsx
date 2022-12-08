import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Element } from "../interfaces/Element";

import "./Modal.css";

function Moddal({ temp }: { temp: Element }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="HelpButton" onClick={handleShow}></Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Let{"'"}s Learn about {temp.name}!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="column">
                            <img className="info-box" src={temp.image} />
                        </div>
                        <div className="column">
                            <h1> {temp.name} </h1>
                            <div>
                                <strong>Chemical Formula: </strong>
                                {temp.chemAbr}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default Moddal;
