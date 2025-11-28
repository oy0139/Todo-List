import { taskArray } from "./task";


export function taskcreation() {
    taskArray.forEach(task => {
        
        const card = document.createElement('div');
        card.classList.add('task-card');

        const titleElement = document.createElement('h3');
        titleElement.textContent = task.title;

        const categoryElement = document.createElement('p');
        categoryElement.textContent = `Category: ${task.category}`;

        const dueTimeElement = document.createElement('span');
        dueTimeElement.textContent = `Due at ${task.dueTime}`;
    })
};
