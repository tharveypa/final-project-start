import React, { useState, useEffect, useRef } from "react";
import Car from "./Car";
import Pic from "../Pic";
import Board from "../Board";
import type { ToolPos } from "./interfaces";
type CarChanges = Record<string, ToolPos>;
type CarSpaceProps = {
    tools: string[];
    saveCar: (car: number, toolname: string, changes: CarChanges) => void;
};

// function renderDestroy(x: number, y: number, [dirtX, dirtY]: number[]) {
//     const isDirtHere = dirtX === x && dirtY === y;
//     const piece = isDirtHere ? <DirtTool /> : null;
//     return <span>{piece}</span>;
// }
export const CarSpace: React.FC<CarSpaceProps> = (props) => {
    const { tools } = props;
    const [pos, setPos] = useState<number[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const MouseTracker = (e: MouseEvent) => {
            setPos([e.clientX, e.clientY]);
        };
        container.addEventListener("mousemove", MouseTracker);

        const cleanup = () => {
            container.removeEventListener("mousemove", MouseTracker);
        };

        return cleanup;
    }, []);
    return (
        <>
            {/* <div ref={containerRef} className="container">
                <Car
                    saveCar={props.saveCar}
                    color={0}
                    clean={true}
                    tirefill={true}
                    window={true}
                ></Car> 
            </div> */}
            <div>{/* <Board tools={tools} /> */}</div>
            {/* <div ref={containerRef} className="container">
                <Board tools={tools} />
            </div> */}
            <div>
                {pos.map(
                    // eslint-disable-next-line no-extra-parens
                    (e: number): JSX.Element => (
                        <div key={e}> {e} </div>
                    )
                )}
            </div>
            {/* <div>
                Choose a pic
                {tools.map(
                    // eslint-disable-next-line no-extra-parens
                    (p: string): JSX.Element => (
                        <Pic key={p} pic={p} top={400} left={0} title={p} />
                    )
                )}
            </div> */}
        </>
    );
};
export default CarSpace;
