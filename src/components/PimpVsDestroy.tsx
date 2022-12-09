import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Destroy from "./Destroy";
import Clean from "./Clean";
import Pimp from "./Pimp";
import Edit from "./Edit";

export function PimpVsDestroy(): JSX.Element {
    const [modeNum, setModeNum] = useState(0);
    return (
        <div>
            {modeNum == 0 && <div>{Edit()}</div>}
            {modeNum == 1 && <div>{Pimp()}</div>}
            {modeNum == 2 && <div>{Destroy()}</div>}
            {modeNum == 3 && <div>{Clean()}</div>}
            <Button onClick={() => setModeNum((modeNum + 1) % 4)}>
                Change Mode (Edit / Pimp / Destroy / Clean)
            </Button>
        </div>
    );
}

export default PimpVsDestroy;
