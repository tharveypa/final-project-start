import React, { useState } from "react";
import { Form } from "react-bootstrap";
//import { arrayBuffer } from "stream/consumers";
//import { DragTile } from "../Interfaces/DragTile";
/*
function alphasort(arr: DragTile[]): DragTile[] {
    arr.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (b.name < b.name) return -1;
        return 0;
    });
    return arr;
}

function typesort(arr: DragTile[]): DragTile[] {
    arr.sort((a, b) => {
        if (a.type > b.type) return 1;
        if (b.type < b.type) return -1;
        return 0;
    });
    return arr;
}
*/
export function FilterDropdown({
    filterOptions
}: {
    filterOptions: string[];
}): JSX.Element {
    const default_option = filterOptions[0];
    const [choice, setChoice] = useState<string>(default_option);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>
                <b>Filter</b>
            </h3>
            <div
                className="bg-grey border m-2 p-2"
                style={{
                    bottom: "10%",
                    left: "0%",
                    height: "20%",
                    width: "100%"
                }}
            >
                <Form.Group controlId="formChoice">
                    <Form.Select value={choice} onChange={updateChoice}>
                        {/*eslint-disable-next-line no-extra-parens*/}
                        {filterOptions.map((option1: string) => (
                            <option key={option1} value={option1}>
                                {option1}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
        </div>
    );
}

export function SortDropdown({
    sortOptions
}: {
    sortOptions: string[];
}): JSX.Element {
    const default_option = sortOptions[0];
    const [choice, setChoice] = useState<string>(default_option);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>
                <b>Sort</b>
            </h3>
            <div
                className="bg-grey border m-2 p-2"
                style={{
                    bottom: "70%",
                    left: "0%",
                    height: "20%",
                    width: "100%"
                }}
            >
                <Form.Group controlId="formChoice">
                    <Form.Select value={choice} onChange={updateChoice}>
                        {/*eslint-disable-next-line no-extra-parens*/}
                        {sortOptions.map((option1: string) => (
                            <option key={option1} value={option1}>
                                {option1}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
        </div>
    );
}
