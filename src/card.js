import { taskArray } from "./task";
import { handleDelete } from "./deletecard";
import {handleEdit} from "./handleEdit";

export function rendertask(tasks = taskArray) {
    const container = document.querySelector(".cardDisplayArea");
    if (!container) return;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    function formatTime(timeString) {
        const [hour, minute] = timeString.split(":").map(Number);
        const suffix = hour >= 12 ? "PM" : "AM";
        const hour12 = hour % 12 || 12;
        return `${hour12}:${minute.toString().padStart(2, "0")} ${suffix}`;
    }

    tasks.forEach(task => {
        const card = document.createElement("div");
        card.classList.add("task-card");

        const title = document.createElement("h3");
        title.textContent = task.title;

        const category = document.createElement("p");
        category.textContent = `Category: ${task.category}`;

        const time = document.createElement("p");
        time.textContent = `Due: ${task.dueDate} at ${formatTime(task.dueTime)}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.dataset.id = task.id;
        deleteBtn.addEventListener("click", handleDelete);

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        editBtn.dataset.id = task.id;

        editBtn.addEventListener("click", handleEdit);

        card.setAttribute("data-id", task.id);
        card.setAttribute("data-category", task.category);

        card.appendChild(deleteBtn);
        card.appendChild(editBtn);
        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(time);

        container.appendChild(card);
    });
}

