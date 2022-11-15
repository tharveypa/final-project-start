/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { BDropDown } from "./BackgroundDD";
import { DropDown } from "./DropDown";

export function PopUpSlider(): JSX.Element {
    // type ChangeEvent = React.ChangeEvent<
    //     HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    // >;
    const [Pop, setPop] = useState<boolean>(false);
    return (
        <div>
            <div>
                <Form.Check
                    inline
                    type="switch"
                    id="hider-check"
                    label="Show Selections"
                    checked={Pop}
                    onChange={() => setPop(!Pop)}
                />
                {Pop && (
                    <>
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
                        <BDropDown
                            options={["", "Forest", "Volcano", "Waterfall"]}
                        ></BDropDown>
                    </>
                )}
            </div>
        </div>
    );
}
