import type { FC } from "react";
import React from "react";
import { useCallback, useState } from "react";
import { Place } from "./Place";
import sample from "./Places.json";
import { Container } from "./Container";

export const Example: FC = () => {
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
    const PLACES = sample.map((place): Place => ({ ...place }));
    const toggle = useCallback(
        () => setHideSourceOnDrag(!hideSourceOnDrag),
        [hideSourceOnDrag]
    );

    return (
        <div>
            <div>
                <Container
                    hideSourceOnDrag={hideSourceOnDrag}
                    places={PLACES}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: 750
                }}
            >
                <p>
                    <label htmlFor="hideSourceOnDrag">
                        <input
                            id="hideSourceOnDrag"
                            type="checkbox"
                            role="checkbox"
                            checked={hideSourceOnDrag}
                            onChange={toggle}
                        />
                        <small>Hide the source item while dragging</small>
                    </label>
                </p>
            </div>
        </div>
    );
};
