/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-key */
import React, { createContext, useCallback, useState } from "react";
import { Element } from "../interfaces/Element";
import { elements } from "../elementList";
import ElementObject from "./ElementObject";

import "./ElementList.css";
import Modal from "./Modal";
import Container from "./Container";
import { Button, Form } from "react-bootstrap";
import Trashbin from "./Trashbin";
import { XYCoord } from "react-dnd";

const AlphabeticalAtZFuncAtZ = "1";
const AlphabeticalAtZFuncZtA = "4";
const ByAtomicNumFunc = "2";
const ResetFunc = "3";

export const CardContext = createContext({
    // eslint-disable-next-line prettier/prettier
    putInWorkSpace: (id: number, monitor: any) => {},
    removefromScreen: (id: number) => {}
});

function ElementList() {
    const [inWorkSpace, addtoWorkSpace] = useState<Element[]>([]);
    const [proplist, setProplist] = useState<Element[]>(elements);
    const [numRep, setFunction] = useState<string>();
    const [search, changeSearch] = useState<string>("");

    // This is the Control
    function updateFunction(event: React.ChangeEvent<HTMLSelectElement>) {
        console.log(event.target.value);
        setFunction(event.target.value);
        if (event.target.value == AlphabeticalAtZFuncAtZ) {
            AlphabeticalAtZ();
        } else if (event.target.value == ByAtomicNumFunc) {
            ByAtomicNum();
        } else if (event.target.value == ResetFunc) {
            Reset();
        } else if (event.target.value == AlphabeticalAtZFuncZtA) {
            AlphabeticalAtZZtA();
        }
    }

    function Filter() {
        const foundElement = elements.filter((task, i) => task.name == search);
        if (search == "") {
            setProplist(elements);
        } else {
            setProplist(foundElement);
        }
    }

    function AlphabeticalAtZ() {
        const x = proplist.map((element: Element): Element => element);
        setProplist(x.sort((a, b) => a.name.localeCompare(b.name)));
    }

    function AlphabeticalAtZZtA() {
        const x = proplist.map((element: Element): Element => element);
        setProplist(x.sort((a, b) => a.name.localeCompare(b.name)).reverse());
    }

    function ByAtomicNum() {
        const x = proplist.map((element: Element): Element => element);
        setProplist(x.sort((a, b) => a.atomicNum - b.atomicNum));
    }

    function Reset() {
        setProplist(elements);
    }

    function generateList(prop: Element[]) {
        return prop.map((prop) => (
            <div>
                <div key={prop.name} className="propcontainer">
                    <li>
                        {prop.name + "             "}
                        <Modal temp={prop}></Modal>
                    </li>
                    <ElementObject element={prop} />
                </div>
            </div>
        ));
    }

    function moveElement(id: number, left: number, top: number) {
        const draggedElement = inWorkSpace.filter(
            (task, i) => task.id === id
        )[0];
        draggedElement.left = left;
        draggedElement.top = top;
        console.log(inWorkSpace);
    }
    function putInWorkSpace(id: number, monitor: any) {
        const draggedElement = proplist.filter((task, i) => task.id === id)[0];
        const p = { ...draggedElement };
        if (draggedElement == undefined) {
            const draggedElement = inWorkSpace.filter(
                (task, i) => task.id === id
            )[0];
            const p = { ...draggedElement };
            const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
            const left = Math.round(p.left + delta.x);
            const top = Math.round(p.top + delta.y);
            moveElement(p.id, left, top);
        } else if (draggedElement.shown == false) {
            p.shown = true;
            p.id = Math.random();
            addtoWorkSpace(inWorkSpace.concat(p));
        }
    }

    function removefromScreen(id: number) {
        const draggedElement = inWorkSpace.filter((task, i) => task.id != id);
        addtoWorkSpace(draggedElement);
    }
    return (
        <CardContext.Provider value={{ putInWorkSpace, removefromScreen }}>
            <div>
                <div className="row-adj">
                    <div className="column-sidebar">
                        <p>
                            <strong> Element List</strong>
                        </p>
                        <p>
                            <Form.Group controlId="Sorting/Filtering">
                                <Form.Select
                                    value={numRep}
                                    onChange={updateFunction}
                                >
                                    <option>Sort/Filter</option>
                                    <option value="1">Alphabetical(A-Z)</option>
                                    <option value="4">Alphabetical(Z-A)</option>
                                    <option value="2">By Atomic Number</option>
                                    <option value="3">Reset</option>
                                </Form.Select>
                                <Form.Group controlId="formQuizId">
                                    <Form.Control
                                        placeholder="Search"
                                        value={search}
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => changeSearch(e.target.value)}
                                    ></Form.Control>
                                    <Button onClick={() => Filter()}></Button>
                                </Form.Group>
                            </Form.Group>
                        </p>
                        <ul className="scroll-bar">{generateList(proplist)}</ul>
                    </div>
                    <div className="column-center">
                        <img
                            className="logo"
                            src={require("../images/logo.png")}
                        />
                        <div>
                            <Container>
                                {inWorkSpace.map((task, i) => (
                                    <ElementObject element={task} />
                                ))}
                            </Container>
                        </div>
                    </div>
                    <div className="column-right">
                        <Trashbin>{}</Trashbin>
                    </div>
                </div>
            </div>
        </CardContext.Provider>
    );
}

export default ElementList;
