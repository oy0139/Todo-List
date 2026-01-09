export const taskArray = [];

export class Task {
    constructor(title, category, dueTime, dueDate) {
        this.title = title;
        this.category = category;
        this.dueTime = dueTime;
        this.dueDate = dueDate;
        this.id = crypto.randomUUID();
    }
}

export function repopulateTasks(data) {
    taskArray.length = 0;
    if (data && data.length > 0) {
        data.forEach(t => taskArray.push(t));
    }
}
