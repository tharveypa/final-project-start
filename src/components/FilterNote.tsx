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
        titles: string[],
        descriptions: string[],
        low: boolean,
        medium: boolean,
        high: boolean,
        coral: boolean,
        pink: boolean,
        orange: boolean,
        moccasin: boolean,
        plum: boolean
    ) => void;
}): JSX.Element {
    const [show, setShow] = useState(false);
    const [titleOpt, setTitleOpt] = useState<string[]>([]); //title, textbox
    const [descriptionOpt, setDescriptionOpt] = useState<string[]>([]); //description, textbox
    const [priorityOpt, setPriorityOpt] = useState<string[]>([]); //priorities, radio buttons checkbox
    const [colorOpt, setColorOpt] = useState<string[]>([]); //colors
    const [assignedOpt, setAssignedOpt] = useState<string[]>([]); //assigned, textbox

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function updateTitle(event: React.ChangeEvent<HTMLInputElement>) {
        const splitTitle: string[] = event.target.value.split(",");
        setTitleOpt(splitTitle);
    }

    function updateDescription(event: React.ChangeEvent<HTMLInputElement>) {
        const splitDescription: string[] = event.target.value.split(",");
        setDescriptionOpt(splitDescription);
    }

    function updatePriority(event: React.ChangeEvent<HTMLInputElement>) {
        const option = event.target.value;
        if (priorityOpt.includes(option)) {
            setPriorityOpt(
                priorityOpt.filter((o: string) => o !== event.target.value)
            );
        } else {
            setPriorityOpt([...priorityOpt, option]);
        }
    }

    function updateColor(event: React.ChangeEvent<HTMLInputElement>): void {
        const option = event.target.value;
        if (colorOpt.includes(option)) {
            setColorOpt(
                colorOpt.filter((o: string) => o !== event.target.value)
            );
        } else {
            setColorOpt([...colorOpt, option]);
        }
    }

    function updateAssigned(event: React.ChangeEvent<HTMLInputElement>) {
        const assignedSplit: string[] = event.target.value.split(",");
        setAssignedOpt(assignedSplit);
    }

    const filtIt = () => {
        handleClose();
        filterList(
            titleOpt,
            descriptionOpt,
            priorityOpt.includes("low"),
            priorityOpt.includes("medium"),
            priorityOpt.includes("high"),
            colorOpt.includes("coral"),
            colorOpt.includes("pink"),
            colorOpt.includes("orange"),
            colorOpt.includes("moccasin"),
            colorOpt.includes("plum")
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
                            <Form.Label>
                                Input a comma separated list of titles to filter
                                out
                            </Form.Label>
                            <Form.Control
                                value={titleOpt}
                                onChange={updateTitle}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="Description">
                            <Form.Label>
                                Input a comma separated list of descriptions to
                                filter out
                            </Form.Label>
                            <Form.Control
                                value={descriptionOpt}
                                onChange={updateDescription}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="PriorityBoxes">
                            <Form.Check
                                inline
                                type="checkbox"
                                id="priority-check-low"
                                label="low"
                                value="low"
                                checked={priorityOpt.includes("low")}
                                onChange={updatePriority}
                            ></Form.Check>
                            <Form.Check
                                inline
                                type="checkbox"
                                id="priority-check-medium"
                                label="medium"
                                value="medium"
                                checked={priorityOpt.includes("medium")}
                                onChange={updatePriority}
                            ></Form.Check>
                            <Form.Check
                                inline
                                type="checkbox"
                                id="priority-check-high"
                                label="high"
                                value="high"
                                checked={priorityOpt.includes("high")}
                                onChange={updatePriority}
                            ></Form.Check>
                        </Form.Group>
                        <Form.Group className="FilterBoxes">
                            <Form.Check
                                inline
                                type="checkbox"
                                id="opt-check-Coral"
                                label="Coral"
                                value="coral"
                                checked={colorOpt.includes("coral")}
                                onChange={updateColor}
                            ></Form.Check>
                            <Form.Check
                                inline
                                type="checkbox"
                                id="opt-check-Pink"
                                label="Pink"
                                value="pink"
                                checked={colorOpt.includes("pink")}
                                onChange={updateColor}
                            ></Form.Check>
                            <Form.Check
                                inline
                                type="checkbox"
                                id="opt-check-Orange"
                                label="Orange"
                                value="orange"
                                checked={colorOpt.includes("orange")}
                                onChange={updateColor}
                            ></Form.Check>
                            <Form.Check
                                inline
                                type="checkbox"
                                id="opt-check-Moccasin"
                                label="Moccasin"
                                value="moccasin"
                                checked={colorOpt.includes("moccasin")}
                                onChange={updateColor}
                            ></Form.Check>
                            <Form.Check
                                inline
                                type="checkbox"
                                id="opt-check-Plum"
                                label="Plum"
                                value="plum"
                                checked={colorOpt.includes("plum")}
                                onChange={updateColor}
                            ></Form.Check>
                        </Form.Group>
                        <Form.Group className="AssignedTextBox">
                            <Form.Label>
                                Input a comma separated list of assignees to
                                filter out
                            </Form.Label>
                            <Form.Control
                                value={assignedOpt}
                                onChange={updateAssigned}
                            ></Form.Control>
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
