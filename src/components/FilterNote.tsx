import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

// Modified MakeNote that will instead be used to filter the CardList

export function FilterNote({
    // CardList function that filters the list
    filterList
}: {
    filterList: (
        coral: boolean,
        pink: boolean,
        orange: boolean,
        moccasin: boolean,
        plum: boolean
    ) => void;
}): JSX.Element {
    const [show, setShow] = useState(false);
    const [opt, setOpt] = useState<string[]>([]); //colors
    const [prioOpt, setPriorityOpt] = useState<string>(""); //priorities, radio buttons exclusive
    const [titleOpt, setTitleOpt] = useState<string>(""); //title, textbox
    const [descriptionOpt, setDescriptionOpt] = useState<string>(""); //description, textbox
    const [assignedOpt, setAssignedOpt] = useState<string[]>([]); //assigned, textbox

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function updateOpt(event: React.ChangeEvent<HTMLInputElement>): void {
        const option = event.target.value;
        if (opt.includes(option)) {
            setOpt(opt.filter((o: string) => o !== event.target.value));
        } else {
            setOpt([...opt, option]);
        }
    }

    function updateTitle(event: React.ChangeEvent<HTMLInputElement>) {
        setTitleOpt(event.target.value);
    }

    function updateDescription(event: React.ChangeEvent<HTMLInputElement>) {
        setDescriptionOpt(event.target.value);
    }

    function updatePriority(event: React.ChangeEvent<HTMLInputElement>){
        setPriorityOpt(event.target.value);
    }

    function updateAssignedOpt(event: React.ChangeElement<HTMLInputElement>){
        setAssignedOpt(["TEST FOR NOW"]); //need to split these by , as MakeNote does
    }

    const filtIt = () => {
        handleClose();
        filterList(
            opt.includes("coral"),
            opt.includes("pink"),
            opt.includes("orange"),
            opt.includes("moccasin"),
            opt.includes("plum")
        );
    };

    return (
        <>
            <Button onClick={handleShow}>Filter List</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Filter the List:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>
                            Specify what you would like to have filtered out!
                        </Form.Label>
                        <Form.Group className="TitleTextBox">
                            
                        </Form.Group>
                        <Form.Group className="FilterBoxes">
                            <Form.Check
                                inline
                                type="checkbox"
                                id="opt-check-Coral"
                                label="Coral"
                                value="coral"
                                checked={opt.includes("coral")}
                                onChange={updateOpt}
                            ></Form.Check>
                            <Form.Check
                                inline
                                type="checkbox"
                                id="opt-check-Pink"
                                label="Pink"
                                value="pink"
                                checked={opt.includes("pink")}
                                onChange={updateOpt}
                            ></Form.Check>
                            <Form.Check
                                inline
                                type="checkbox"
                                id="opt-check-Orange"
                                label="Orange"
                                value="orange"
                                checked={opt.includes("orange")}
                                onChange={updateOpt}
                            ></Form.Check>
                            <Form.Check
                                inline
                                type="checkbox"
                                id="opt-check-Moccasin"
                                label="Moccasin"
                                value="moccasin"
                                checked={opt.includes("moccasin")}
                                onChange={updateOpt}
                            ></Form.Check>
                            <Form.Check
                                inline
                                type="checkbox"
                                id="opt-check-Plum"
                                label="Plum"
                                value="plum"
                                checked={opt.includes("plum")}
                                onChange={updateOpt}
                            ></Form.Check>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={filtIt}>Filter!</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
