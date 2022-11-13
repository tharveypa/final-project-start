/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { DropDown } from "./DropDown";

export function EditMode(): JSX.Element {
    // type ChangeEvent = React.ChangeEvent<
    //     HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    // >;
    const [editMode, setEditMode] = useState<boolean>(false);
    return (
        <div>
            <div>
                <Form.Check
                    inline
                    type="switch"
                    id="hider-check"
                    label="Show Selections"
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
                {editMode && (
                    <div
                        style={{
                            whiteSpace: "nowrap",
                            justifyContent: "space-between",
                            textAlign: "center"
                        }}
                    >
                        <DropDown
                            options={[
                                "",
                                "Charzaird",
                                "Bulbausar",
                                "Wartortle"
                            ]}
                        ></DropDown>
                        <DropDown
                            options={[
                                "",
                                "Charzaird",
                                "Bulbausar",
                                "Wartortle"
                            ]}
                        ></DropDown>
                        <DropDown
                            options={[
                                "",
                                "Charzaird",
                                "Bulbausar",
                                "Wartortle"
                            ]}
                        ></DropDown>
                        <DropDown
                            options={[
                                "",
                                "Charzaird",
                                "Bulbausar",
                                "Wartortle"
                            ]}
                        ></DropDown>
                        <DropDown
                            options={[
                                "",
                                "Charzaird",
                                "Bulbausar",
                                "Wartortle"
                            ]}
                        ></DropDown>
                        <DropDown
                            options={[
                                "",
                                "Charzaird",
                                "Bulbausar",
                                "Wartortle"
                            ]}
                        ></DropDown>
                    </div>
                )}
            </div>
        </div>
    );
}
