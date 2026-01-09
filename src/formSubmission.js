import {Task, taskArray} from "./task.js";
import { rendertask } from "./card.js";
import { saveToStorage } from "./storage.js";
import { formToggle } from "./formToggle.js";
import { currentView, currentCategory, setEditTaskId, editingTaskID } from "./viewState.js";
import { filterByCategory } from "./categoryFilter.js";
import { renderTodayTasks } from "./today.js";


export function formSubmission(e) {

    e.preventDefault();

    console.log("Raw input value =", document.getElementById("dueDate").value);
    console.log("Input element =", document.getElementById("dueDate"))

    const titleInput = document.getElementById("title-input");
    const title = titleInput.value;

    const categoryInput = document.getElementById("category-select");
    const category = categoryInput.value;

    const timeInput = document.getElementById("dueTime");
    const dueTime = timeInput.value;

    const dueDateInput = document.getElementById("dueDate");
    const dueDate = dueDateInput.value;


    if (editingTaskID) {
        const task = taskArray.find(t => t.id === editingTaskID);
        if (task) {
            task.title = title;
            task.category = category;
            task.dueTime = dueTime;
            task.dueDate = dueDate;
        }
        setEditTaskId(null);
    }

    else {
        const newTask = new Task(title, category, dueTime, dueDate);
        taskArray.push(newTask);
    }

    saveToStorage();
    
    console.log("Render decision:");
    console.log("currentView =", currentView);
    console.log("currentCategory =", currentCategory);
     
    if (currentView === "today") {
    renderTodayTasks();

    } else if (currentView === "category") {
    filterByCategory(currentCategory);

   } else {

    rendertask(taskArray); 
   }

   console.log("editingTaskID imported value =", editingTaskID);

    formToggle();
}