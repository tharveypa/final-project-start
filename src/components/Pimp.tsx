import React from "react";
// import ReactDOM from "react-dom";
// import Board from "../Board";
// import { observe } from "../game";
// //import reportWebVitals from "./reportWebVitals";
// //import App from "./App";

// observe((picPosition: [number, number]) => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <div
//                 style={{
//                     width: "500px",
//                     height: "500px",
//                     border: "1px solid gray"
//                 }}
//             >
//                 {
//                     //const tools=["Wipe Car","Shine Car","Fill Tires","Repair Windows","etc"];
//                 }
//                 <Board
//                     picPosition={picPosition}
// pics={[
//     "Wipe Car",
//     "Shine Car",
//     "Fill Tires",
//     "Repair Windows",
//     "etc"
// ]}
//                 />
//             </div>
//         </React.StrictMode>,
//         document.getElementById("root")
//     );
// });

const Pimp = () => {
    return (
        <div>
            <h1>Pimp Mode</h1>
            <p>
                Pimp Mode Options:
                <ul>
                    <li>Wipe Car</li>
                    <li>Shine Car</li>
                    <li>Fill Tires</li>
                    <li>Repair Windows</li>
                    <li>etc</li>
                </ul>
            </p>
        </div>
    );
};

export default Pimp;
