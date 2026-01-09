import { taskArray } from "./task";
import { rendertask } from "./card";

function getFormattedToday() {
    const today = new Date();

    return today.toISOString().split('T')[0];
}

export function renderTodayTasks() {
    const todayString = getFormattedToday();

    const todayTasks = taskArray.filter(task => task.dueDate === todayString);

    rendertask(todayTasks);
}