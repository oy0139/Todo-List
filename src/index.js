import "./styles.css";
import "./form.css";
import "./card.css";

import { filterByCategory } from "./categoryFilter.js";
import { renderTodayTasks } from "./today.js";
import { repopulateTasks } from "./task.js";
import { loadDataFromStorage } from "./storage.js";
import { formToggle } from "./formToggle.js";
import { formSubmission } from "./formSubmission.js";
import { setView } from "./viewState.js";
import { renderAllCards } from "./myprojects.js";

window.addEventListener("DOMContentLoaded", () => {
    const loadedData = loadDataFromStorage();
    repopulateTasks(loadedData);

    renderTodayTasks();

    document.getElementById("todayTab").addEventListener("click", (e) => {
        setView("today");
        e.preventDefault();
        renderTodayTasks();
    });

    document.getElementById("fitnessTab").addEventListener("click", (e) => {
        setView("category", "Fitness");
        e.preventDefault();
        filterByCategory("Fitness");
    });

    document.getElementById("socialTab").addEventListener("click", (e) => {
        setView("category", "Social");
        e.preventDefault();
        filterByCategory("Social");
    });

    document.getElementById("newsTab").addEventListener("click", (e) => {
        setView("category", "News");
        e.preventDefault();
        filterByCategory("News");
    });

    document.getElementById("allProjectsTab").addEventListener("click", (e) => {
        renderAllCards();
    })

    document.querySelectorAll(".addTaskToList").forEach(btn =>
        btn.addEventListener("click", formToggle)
    );
    
    document.getElementById("close-form-btn").addEventListener("click", formToggle);

    document.getElementById("my-form").addEventListener("submit", formSubmission);
});
