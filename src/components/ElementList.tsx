/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Element } from "../interfaces/Element";
import { elements } from "../elementList";
import Object from "./Object";

import "./ElementList.css";
import Modal from "./Modal";

function ElementList() {
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
        console.log(prop, "Generated");
        // eslint-disable-next-line no-extra-parens
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

    return (
        <div>
            <strong> Element List </strong>
            <button onClick={() => Alphabetical()}></button>
            <button onClick={() => ByAtomicNum()}></button>
            <button onClick={() => Reset()}></button>
            <ul className="scroll-bar">{generateList(proplist)}</ul>
        </div>
    );
}

export default ElementList;
