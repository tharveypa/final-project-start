export {};
import React from "react";
import ReactDOM from "react-dom";

type DropDownProps = {
    black: boolean;
};

const DropDown: React.FC<DropDownProps> = (props) => {
    const fill = props.black ? "black" : "white";
    return (
        <nav>
            <li className="hov">
                Furniture
                <ul className="main">
                    <li>Beds</li>
                    <li>Chairs</li>
                    <li>Couches</li>
                    <li>Tables</li>
                    <li>Decoration</li>
                </ul>
                {props.children};
            </li>
        </nav>
    );
};

export default DropDown;
