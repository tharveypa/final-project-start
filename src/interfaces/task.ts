export interface Task {
    //title of the task, will go at the top of the note/card
    title: string;
    //description of the task, will be shortened in the render process if it's too long
    description: string;
    //set as a string, but should be chosen from a pre-made list of "high", "medium", or "low"
    //priority level of the task
    priority: string;
    //set as a string, but should be chosen from a pre-made list of colors (the default HTML/CSS colors)
    //color of the thumbtack when it's stuck to the corkboard
    thumbColor: string;
}