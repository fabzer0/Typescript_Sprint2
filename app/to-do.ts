class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string) {}
  markDone() {
    this.done = true;
  }
}
class HomeTask extends Task {}

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string) {
    super(description, priority);
  }
}

class HobbyTask extends Task {
  constructor(public description: string) {
    super(description, "low");
  }
}


var tasks: Task[] = [];
tasks.push(new HomeTask("Do the dishes.", "high"));
tasks.push(new HomeTask("Buy chocolate.", "low"));
tasks.push(new HomeTask("Wash the laundry.", "high"));
tasks[0].markDone(); //mark the first task as done.
console.log(tasks);

tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));

var today = new Date(); //get the current date and store it in the variable called 'today'
var tomorrow = today; //set the variable tomorrow equal to the current date, but then reset it to today's date plus 1.
tomorrow.setDate(today.getDate() + 1);
var nextDay = today; //create another date object and set it to today's date plus 2.
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update blog.", "high"));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "medium"));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "low"));

console.log(tasks);
