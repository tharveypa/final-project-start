import React from "react";
import ReactDOM from "react-dom";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
import NumSquareForm from "./NumSquareForm";
import { Menu } from "./Menu";

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
                FISHDOM: Shreeya, Daniel, Jason
            </h1>
            <div>
                <Menu></Menu>
            </div>
            <div>
                <NumSquareForm picPosition={picPosition}></NumSquareForm>
            </div>
            <div className="App"></div>
        </React.StrictMode>,
        document.getElementById("root")
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
