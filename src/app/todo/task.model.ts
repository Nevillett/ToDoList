class Task {
    title: string;
    description: string;
    dueDate: Date;
    status: string;

    constructor(){
        this.title = "";
        this.description = "";
        this.dueDate = new Date();
        this.status = "Pending";
    }
}
export default Task;