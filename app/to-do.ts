class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string) {}
  markDone() {
    this.done = true;
  }
}
class HomeTask extends Task {}

var tasks: Task[] = [];
tasks.push(new HomeTask("Do the dishes.", "high"));
tasks.push(new HomeTask("Buy chocolate.", "low"));
tasks.push(new HomeTask("Wash the laundry.", "high"));
tasks[0].markDone(); //mark the first task as done.
console.log(tasks);


class HobbyTask extends Task {
  constructor(public description: string) {
    super(description, "low");
  }
}
