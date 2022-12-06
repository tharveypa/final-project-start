export interface DragTile {
    type: string;
    design: string;
    pos: [number, number];
    graphic: string; //file name
    name: string;
    size: [number, number];
    id: number;
    hasFurniture: boolean;
    hasPainting: boolean;
    placeOnWall: boolean;
    isFill: boolean;
    comments: string[];
}
