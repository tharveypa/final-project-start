/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Table } from "react-bootstrap";
import { allList } from "./interfaces/fishpics";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function Menu() {
    const viewList = ["All", "Saltwater", "Freshwater", "Predator", "Prey"];
    const [view, setView] = useState(viewList[0]);
    const [option, setOption] = useState(allList[0]);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    function changeOption() {
        if (view === "All") {
            setOption(allList[0]);
        } else if (view === "Saltwater") {
            setOption(allList[1]);
        } else if (view === "Freshwater") {
            setOption(allList[2]);
        } else if (view === "Predator") {
            setOption(allList[3]);
        } else {
            setOption(allList[4]);
        }
        handleCloseModal();
    }

    const changeView = (event: ChangeEvent) => {
        setView(event.target.value);
    };
    return (
        <div
            className="bg-grey border m-2 p-2"
            style={{
                height: "100%",
                width: "25%"
            }}
        >
            <Container>
                <h4>
                    <b>Menu</b>
                </h4>
            </Container>
            <Button
                variant="success"
                onClick={handleShowModal}
                data-testid="chooseOption"
            >
                Filter through Options
            </Button>
            <p></p>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title> Choose Fish Type </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col>
                        <Form.Select
                            data-testid="list"
                            value={view}
                            onChange={changeView}
                        >
                            {viewList.map((s: string) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={changeOption}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            <p></p>
            <div
                className="table-wrapper-scroll-y my-custom-scrollbar"
                style={{
                    position: "relative",
                    height: "200px",
                    overflow: "auto"
                }}
            >
                <Table className="table-fixed table table-responsive">
                    <thead>
                        <tr>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {option.map((s: string) => (
                            <tr key={s}>
                                <td>
                                    <Button
                                        style={{
                                            height: "50x"
                                        }}
                                    >
                                        <img
                                            src={require(s + "")}
                                            width="25%"
                                            height="25%"
                                        />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
