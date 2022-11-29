import React from "react";
import { Button } from "react-bootstrap";
import { tileItem } from "./interfaces";
export function SortingItems({
    setSourceTile,
    sourceTile
}: {
    setSourceTile: (newTile: tileItem[]) => void;
    sourceTile: tileItem[];
}): JSX.Element {
    return (
        <Button
            onClick={() =>
                setSourceTile(
                    sourceTile.sort((a, b) => a.color.localeCompare(b.color))
                )
            }
        >
            Sort By Color
        </Button>
    );
}
