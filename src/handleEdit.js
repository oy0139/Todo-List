import { taskArray } from "./task";
import { formToggle } from "./formToggle";
import { setEditTaskId } from "./viewState";


export function handleEdit(e) {
    const editId = e.target.dataset.id;
    const task = taskArray.find(t => t.id === editId);

    if (!task) return;

    document.getElementById("title-input").value = task.title;
    document.getElementById("category-select").value = task.category;
    document.getElementById("dueTime").value = task.dueTime;
    document.getElementById("dueDate").value = task.dueDate;

    setEditTaskId(editId);

    formToggle();
}

