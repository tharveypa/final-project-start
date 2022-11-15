/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function BDropDown({ options }: { options: string[] }): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: ChangeEvent) {
        setChoice(event.target.value);
    }

    return (
        <span style={{ display: "inline-flex", margin: "auto" }}>
            <Form.Check inline>
                <Form.Group controlId="formSelectOptions">
                    <Form.Label>choose a Background</Form.Label>
                    <Form.Select value={choice} onChange={updateChoice}>
                        {options.map((currentOption: string) => (
                            <option key={currentOption} value={currentOption}>
                                {currentOption}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Form.Check>
        </span>
    );
}
