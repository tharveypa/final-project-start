import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Destroy from "./Destroy";
import Pimp from "./Pimp";

export function PimpVsDestroy(): JSX.Element {
    const [isPimp, setIsPimp] = useState(true);
    return (
        <div className="toolkit">
            {isPimp && <div>{Pimp()}</div>}
            {isPimp || <div>{Destroy()}</div>}
            <Button onClick={() => setIsPimp(!isPimp)}>Pimp Vs Destroy</Button>
        </div>
    );
}

export default PimpVsDestroy;
