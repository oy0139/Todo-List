import { taskArray } from "./task";
import { Task } from "./task";


export function saveToStorage() {
    const plainTasks = taskArray.map(task => {
        return {
            title: task.title,
            category: task.category,
            dueTime: task.dueTime,
            dueDate: task.dueDate
        }
    })
    const jsonString = JSON.stringify(plainTasks);

    localStorage.setItem('taskdata', jsonString);
}

export function loadDataFromStorage() {
    const raw = localStorage.getItem("taskdata");

    if (!raw) {
        console.warn("No taskdata found in storage.");
        return [];
    }

    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch (e) {
        console.error("Corrupted storage, clearing.", e);
        localStorage.removeItem("taskdata");
        return [];
    }

    return parsed.map(obj =>
        new Task(obj.title, obj.category, obj.dueTime, obj.dueDate)
    );
}
