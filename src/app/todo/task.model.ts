class Task {
    title: string;
    description: string;
    dueDate: Date;
    status: string;
    editFlag: boolean;

    constructor(){
        this.title = "";
        this.description = "";
        this.dueDate = new Date();
        this.status = "Pending";
        this.editFlag = false;
    }
}
export default Task;