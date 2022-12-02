import React from "react";
import { tileItem } from "./interfaces";

type listProps = {
    setSourceTile: (newTile: tileItem[]) => void;
    sourceTile: tileItem[];
};
const Searching: React.FC<listProps> = (props) => {
    const [search, setSearch]: [string, (search: string) => void] =
        React.useState("");
    const handleChange = (e: { target: { value: string } }) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} />
            {props.sourceTile.map((sourceTile) => {
                if (
                    search === "" ||
                    sourceTile.name.toLowerCase().includes(search.toLowerCase())
                ) {
                    return (
                        <li key={sourceTile.id}>
                            <h3>{sourceTile.name}</h3>
                            <p>{sourceTile.tags}</p>
                        </li>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default Searching;
