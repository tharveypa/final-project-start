import React from "react";
import { Container } from "react-bootstrap";
//import { useDrop } from "react-dnd";
import fish_data_json from "../data/fish.json";
//import { Fish } from "../interfaces/Fish";

const Menu: React.FC = () => {
    return (
        <div className="bg-blue border m-2 p-2">
            <Container>
                <b>Menu</b>
                {fish_data_json.map((f) => {
                    <img src={require(f.image)} width="100%" height="100%" />;
                })}
            </Container>
        </div>
    );
};
export default Menu;
