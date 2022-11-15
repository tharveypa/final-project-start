// import React from "react";
// import { useDrag, useDrop } from "react-dnd";
// import { ItemTypes } from "./constants";
// import { canMovePic } from "./game";
// import { Food } from "./Interfaces/food";
// import Overlay from "./Overlay";

// type PlateProps = {
//     x: number;
//     y: number;
//     portions: Food[];
//     setPortions: () => void;
// };

// const Plate: React.FC<PlateProps> = (props) => {
//     const { x, y, portions, setPortions } = props;
//     const [{ isDragging }, drag] = useDrag({
//         item:
//         canDrop: () => canMovePic(x, y, portions),
//         collect: (monitor) => ({
//             isDragging: !!monitor.isDragging()
//         })
//     });
//     return (
//         <div
//             ref={drag}
//             style={{
//                 display: "inline-block",
//                 position: "relative",
//                 width: "100%",
//                 height: "100%"
//             }}
//         ></div>
//     );
// };

// export default Plate;
