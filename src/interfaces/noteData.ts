import { Task } from "./task";

export interface noteData {
    //The task being represented
    task: Task;

    //The id of the noteData
    id: number;

    //How tall the Note is
    height: number;

    //How wide the Note is
    width: number;

    //Where the top of the Note is positioned
    top: number;

    //Where the left of the Note is positioned
    left: number;

    //The layer which the note is on. If two notes overlap, the note on the higher layer is shown over the note on the lower layer.
    zIndex: number;
}
