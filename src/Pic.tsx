import React, { Fragment } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./constants";

const Pic: React.FC = () => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PIC },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    });

    // return (
    //     <Fragment>
    //         <div
    //             ref={drag}
    //             style={{
    //                 opacity: isDragging ? 1 : 0.5,
    //                 fontSize: 50,
    //                 fontWeight: "bold",
    //                 cursor: "move",
    //                 textAlign: "center"
    //             }}
    //         >
    //             {/*♘*/}
    //             <img
    //                 src={require("./Clothing/cropTop1.png")}
    //                 width="100"
    //                 height="100"
    //             />
    //             {/*♘*/}
    //             <img
    //                 src={require("./Clothing/jacket1.png")}
    //                 width="100"
    //                 height="100"
    //             />
    //         </div>
    //         <div
    //             ref={drag}
    //             style={{
    //                 opacity: isDragging ? 1 : 0.5,
    //                 fontSize: 50,
    //                 fontWeight: "bold",
    //                 cursor: "move",
    //                 textAlign: "center"
    //             }}
    //         >
    //             {/*♘*/}
    //             <img
    //                 src={require("./Clothing/sweatshirt1.png")}
    //                 width="100"
    //                 height="100"
    //             />
    //             {/*♘*/}
    //             <img
    //                 src={require("./Clothing/top1.png")}
    //                 width="110"
    //                 height="110"
    //             />
    //             {/*♘*/}
    //             <img
    //                 src={require("./Clothing/top2.png")}
    //                 width="100"
    //                 height="100"
    //             />
    //         </div>
    //         <div
    //             ref={drag}
    //             style={{
    //                 opacity: isDragging ? 1 : 0.5,
    //                 fontSize: 50,
    //                 fontWeight: "bold",
    //                 cursor: "move",
    //                 textAlign: "center"
    //             }}
    //         >
    //             {/*♘*/}
    //             <img
    //                 src={require("./Clothing/skirt1.png")}
    //                 width="100"
    //                 height="130"
    //             />
    //             {/*♘*/}
    //             <img
    //                 src={require("./Clothing/skirt2.png")}
    //                 width="100"
    //                 height="100"
    //             />
    //             {/*♘*/}
    //             <img
    //                 src={require("./Clothing/skirt3.png")}
    //                 width="100"
    //                 height="100"
    //             />
    //         </div>
    //         <div
    //             ref={drag}
    //             style={{
    //                 opacity: isDragging ? 1 : 0.5,
    //                 fontSize: 50,
    //                 fontWeight: "bold",
    //                 cursor: "move",
    //                 textAlign: "center"
    //             }}
    //         >
    //             {/*♘*/}
    //             <img
    //                 src={require("./Clothing/pants1.png")}
    //                 width="130"
    //                 height="170"
    //             />
    //             {/*♘*/}
    //             <img
    //                 src={require("./Clothing/sweats1.png")}
    //                 width="150"
    //                 height="180"
    //             />
    //             {/*♘*/}
    //             <img
    //                 src={require("./Clothing/pants2.png")}
    //                 width="130"
    //                 height="170"
    //             />
    //         </div>
    //     </Fragment>
    // );

    return (
        <Fragment>
            <div
                ref={drag}
                style={{
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 50,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center"
                }}
            >
                {/*♘*/}
                <img
                    src={require("./Clothing/cropTop1.png")}
                    width="100"
                    height="100"
                />
                {/*♘*/}
                <img
                    src={require("./Clothing/jacket1.png")}
                    width="100"
                    height="100"
                />
            </div>
            <div
                ref={drag}
                style={{
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 50,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center"
                }}
            ></div>
        </Fragment>
    );
};

export default Pic;
