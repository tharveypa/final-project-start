import { Pokemon } from "./Interface/Pokemon";
import React from "react";

export function PokemonCard({ name, type }: Pokemon): JSX.Element {
    return (
        <div>
            <h3>Pokemon Card</h3>
            <p>
                Name: <span>{name}</span>
            </p>
            <p>
                Type: <span>{type}</span>
            </p>
        </div>
    );
}
