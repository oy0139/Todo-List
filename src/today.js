import { taskArray } from "./task";
import { taskcreation } from "./card";

function getFormattedToday() {
    const today = new Date();

    return today.toISOString().split('T')[0];
}

export function renderTodayTasks() {
    const todayString = getFormattedToday();

    const todayTasks = taskArray.filter(task => {
        return task.dueDate == todayString;
    })

    todayTasks.forEach(task => (taskcreation()));

}