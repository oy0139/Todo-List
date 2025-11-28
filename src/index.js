import "./styles.css"


//import {taskCreation} from "./card.js"
import {calendarPage} from "./calendarpage.js"
//import {viewProject} from "./viewproject.js"
import {formToggle} from "./formToggle.js"
import { formSubmission } from "./formSubmission.js";
import { renderTodayTasks } from "./today.js";

window.addEventListener('DOMContentLoaded', renderTodayTasks);

const container = document.querySelector("Projects-list");

const addTaskButton = document.querySelector(".addTaskToList");
addTaskButton.addEventListener('click', formToggle);

const saveSubmissionButton = document.getElementById("save-task-btn");
saveSubmissionButton.addEventListener('click', formSubmission);

