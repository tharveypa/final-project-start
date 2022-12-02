/* eslint-disable react/no-unknown-property */
/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-key */
import React, { createContext, useState } from "react";
import { Element } from "../interfaces/Element";
import { elements } from "../elementList";
import Object from "./Object";

import "./ElementList.css";
import Modal from "./Modal";
import Container from "./Container";

export const CardContext = createContext({
    // eslint-disable-next-line prettier/prettier
    markAsDone: (id: number) => {}
});

function ElementList() {
    const [inWorkSpace, addtoWorkSpace] = useState<Element[]>([]);
    const [proplist, setProplist] = useState<Element[]>(elements);

    function Alphabetical() {
        console.log("hi");
        const x = proplist.map((element: Element): Element => element);
        setProplist(x.sort((a, b) => a.name.localeCompare(b.name)));
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
                    <Object element={prop} />
                </div>
            </div>
        ));
    }
    function markAsDone(id: number) {
        const draggedElement = proplist.filter((task, i) => task.id === id)[0];
        const p = { ...draggedElement };
        p.shown = true;
        addtoWorkSpace(inWorkSpace.concat(p));
    }
    return (
        <CardContext.Provider value={{ markAsDone }}>
            <div>
                <div className="row-adj">
                    <div className="column-sidebar" background-color="primary">
                        <p>
                            <strong> Element List</strong>
                        </p>
                        <p>
                            <button onClick={() => Alphabetical()}></button>
                            <button onClick={() => ByAtomicNum()}></button>
                            <button onClick={() => Reset()}></button>
                        </p>
                        <ul className="scroll-bar">{generateList(proplist)}</ul>
                    </div>
                    <div className="column-center">
                        <img
                            className="logo"
                            src={require("../images/logo.png")}
                        />
                        <Container>
                            {inWorkSpace.map((task, i) => (
                                <Object element={task} />
                            ))}
                        </Container>
                    </div>
                </div>
            </div>
        </CardContext.Provider>
    );
}

export default ElementList;
