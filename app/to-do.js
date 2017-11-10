var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Task = /** @class */ (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var HomeTask = /** @class */ (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HomeTask;
}(Task));
var WorkTask = /** @class */ (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(dueDate, description, priority) {
        var _this = _super.call(this, description, priority) || this;
        _this.dueDate = dueDate;
        _this.description = description;
        _this.priority = priority;
        return _this;
    }
    return WorkTask;
}(Task));
var HobbyTask = /** @class */ (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        var _this = _super.call(this, description, "low") || this;
        _this.description = description;
        return _this;
    }
    return HobbyTask;
}(Task));
var tasks = [];
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
