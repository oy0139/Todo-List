import { taskArray } from "./task";
import { saveToStorage } from "./storage";
import { rendertask } from "./card";
import { renderTodayTasks } from "./today.js";
import { currentView, currentCategory } from "./viewState.js";

export function handleDelete(e) {
    const card = e.target.closest(".task-card");
    if (!card) return;

    const deleteId = e.target.dataset.id;
    const cardCategory = card.dataset.category;

    const updated = taskArray.filter(t => t.id !== deleteId);

    taskArray.splice(0, taskArray.length, ...updated);

    console.log("deleteId =", deleteId);
    console.log("cardCategory =", cardCategory);

    saveToStorage();

    if (currentView === "category") {
        const remaining = updated.filter(t => t.category === currentCategory);
        rendertask(remaining);
        return;
    }

    if (currentView === "today") {
        renderTodayTasks();
        return;
    }

    if (currentView === "all") {
        rendertask(taskArray);
        return;
    }
}