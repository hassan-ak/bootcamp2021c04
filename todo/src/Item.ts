export class Item {
  public constructor(
    public taskId: number,
    public task: string,
    public done: boolean = false
  ) {
    // Code will be auto genrated
  }

  public printTask(): void {
    console.log(
      `ID : ${this.taskId}, \t\tTask : ${this.task}, \t\tDone : ${this.done}`
    );
  }
}
