import {task, taskArray} from "./task.js";
import { taskcreation } from "./card.js";


export function formSubmission() {

    const titleInput = document.getElementById("title-input");
    const title = titleInput.value;

    const categoryInput = document.getElementById("category-select");
    const category = categoryInput.value;

    const timeInput = document.getElementById("dueTime");
    const dueTime = timeInput.value;

    const dueDateInput = document.getElementById("dueDate");
    const dueDate = dueDateInput.value;

    const newObject = new task(title, category, dueTime, dueDate).
    taskArray.push(newObject);

    taskcreation();

}