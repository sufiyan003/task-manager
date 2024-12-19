class TaskManager {
    constructor() {
        this.tasks = ['Game', 'Sleep', 'Lunch', 'Studying'];
    }

    addTask(task) {
        this.tasks.push(task);
        console.log("Task added: " + task);
    }

    updateTask(oldTask, updatedTask) {
        const index = this.tasks.indexOf(oldTask);
        index > -1 ? (this.tasks[index] = updatedTask) : console.log("Task not found: " + oldTask);
    }

    deleteTask(task) {
        const index = this.tasks.indexOf(task);
        index > -1 ? this.tasks.splice(index, 1) : console.log("Task not found: " + task);
    }

    getTasks() {
        console.log("Tasks:", ...this.tasks);
    }

    getTaskByName(taskName) {
        console.log(this.tasks.includes(taskName) ? "Task found: " + taskName : "Task not found: " + taskName);
    }
}

const myTaskManager = new TaskManager();
myTaskManager.addTask("Eating");
myTaskManager.getTasks();
myTaskManager.updateTask("Studying", "Reading");
myTaskManager.getTasks();
myTaskManager.deleteTask("Sleep");
myTaskManager.getTasks();
myTaskManager.getTaskByName("Game");
myTaskManager.getTaskByName("Exercise");
