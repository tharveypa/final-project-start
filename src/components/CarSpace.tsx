import React, { useState, useEffect, useRef } from "react";
import Car from "./Car";
import type { ToolPos } from "./interfaces";
type CarChanges = Record<string, ToolPos>;
type CarSpaceProps = {
    saveCar: (car: number, toolname: string, changes: CarChanges) => void;
};

// function renderDestroy(x: number, y: number, [dirtX, dirtY]: number[]) {
//     const isDirtHere = dirtX === x && dirtY === y;
//     const piece = isDirtHere ? <DirtTool /> : null;
//     return <span>{piece}</span>;
// }
export const CarSpace: React.FC<CarSpaceProps> = (props) => {
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
            <div ref={containerRef} className="container">
                <Car
                    saveCar={props.saveCar}
                    color={0}
                    clean={true}
                    tirefill={true}
                    window={true}
                ></Car>
            </div>
            <div>
                {pos.map(
                    // eslint-disable-next-line no-extra-parens
                    (e: number): JSX.Element => (
                        <div key={e}> {e} </div>
                    )
                )}
            </div>
        </>
        <div>
            <Car color={0} clean={true} tirefill={0} window={true}></Car>
            <div></div>
            {renderDestroy(1000, 1000, props.DirtPosition)}
        </div>
    );
};
export default CarSpace;
