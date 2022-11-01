import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function Dropdown({
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
            <h3>Filter Dropdown</h3>
            <div>
                <Form.Group controlId="formChoice">
                    <Form.Label>Choice:</Form.Label>
                    <Form.Select value={choice} onChange={updateChoice}>
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
