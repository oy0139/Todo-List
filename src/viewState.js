export let currentView = "all";
export let currentCategory = null;
export let editingTaskID = null;

export function setEditTaskId(id) {
    editingTaskID = id;
}

export function setView(viewName, category = null) {
    currentView = viewName;
    currentCategory = category;
}