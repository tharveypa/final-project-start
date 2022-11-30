import React from "react";
import ReactDOM, { render } from "react-dom";
//import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
import NumSquareForm from "./NumSquareForm";
import { Menu } from "./Menu";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Example from "./Example";

observe((picPosition: [number, number]) => {
    ReactDOM.render(
        <React.StrictMode>
            <h1
                className="text-center"
                style={{
                    fontStyle: "Bold",
                    fontFamily: "Impact",
                    fontSize: "80px"
                }}
            >
                FISHDOM
            </h1>
            <h2
                style={{
                    fontSize: "45px"
                }}
            >
                Shreeya, Daniel, Jason
            </h2>
            <div>
                <Menu></Menu>
            </div>
            <div>
                <NumSquareForm picPosition={picPosition}></NumSquareForm>
            </div>
            <div className="App">
		</div>
        </React.StrictMode>,
        document.getElementById("root")
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
