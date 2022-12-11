/* eslint-disable react/no-unknown-property */
/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-key */
import React, { createContext, useState } from "react";
import { Clothing } from "../interfaces/Clothing";
import { clothing } from "../clothingList";
import ClothingObject from "./ClothingObject";

import "./ClothingList.css";
import Container from "./Container";

export const CardContext = createContext({
    // eslint-disable-next-line prettier/prettier
    markAsDone: (id: number) => {}
});

function ElementList() {
    const [inWorkSpace, addtoWorkSpace] = useState<Clothing[]>([]);
    const [proplist, setProplist] = useState<Clothing[]>(clothing);

    function Alphabetical() {
        console.log("hi");
        const x = proplist.map((element: Clothing): Clothing => element);
        setProplist(x.sort((a, b) => a.name.localeCompare(b.name)));
    }

    function Reset() {
        setProplist(clothing);
    }

    function generateList(prop: Clothing[]) {
        return prop.map((prop) => (
            <div>
                <div key={prop.name} className="propcontainer">
                    <ClothingObject clothing={prop} />
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
                            <strong> Clothing Selection</strong>
                        </p>
                        <p>
                            <button onClick={() => Alphabetical()}>
                                Accessories First List
                            </button>
                            <button onClick={() => Reset()}>
                                {" "}
                                Reset List{" "}
                            </button>
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
                                <ClothingObject clothing={task} />
                            ))}
                        </Container>
                    </div>
                </div>
            </div>
        </CardContext.Provider>
    );
}

export default ElementList;
