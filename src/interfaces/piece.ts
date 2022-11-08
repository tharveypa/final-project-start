export interface Piece {
    id: number; //unique id for each piece to track it
    angle: number; // angle of rotation used for margin of error
    width: number; //width of image
    height: number; //height of image
    top: number; //y position of image
    left: number; //x position of image
    onBoard: boolean; //whether or not you can freely drag the piece. If it is still in bank, this is false.
}
