/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Element } from "../interfaces/Element";
import { elements } from "../elementList";
import Object from "./Object";

import "./ElementList.css";
import Modal from "./Modal";

function ElementList() {
    const [proplist, setProplist] = useState<Element[]>(elements);

    function generateList(prop: Element[]) {
        console.log(prop, "Generated");
        // eslint-disable-next-line no-extra-parens
        return prop.map((prop) => (
            <div key={prop.name} className="propcontainer">
                <li>
                    {prop.name + "             "}
                    <Modal temp={prop}></Modal>
                </li>
                <Object element={prop} />
            </div>
        ));
    }

    return (
        <div>
            <strong>Element List</strong>
            <ul className="scroll-bar">{generateList(proplist)}</ul>
        </div>
    );
}

export default ElementList;
