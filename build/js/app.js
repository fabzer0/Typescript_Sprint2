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
var ToDoList;
(function (ToDoList) {
    var Task = /** @class */ (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = /** @class */ (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            var _this = _super.call(this, description, priority) || this;
            _this.description = description;
            _this.priority = priority;
            _this.assignedTo = assignedTo;
            return _this;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = /** @class */ (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            var _this = _super.call(this, description, priority, assignedTo) || this;
            _this.dueDate = dueDate;
            _this.description = description;
            _this.priority = priority;
            _this.assignedTo = assignedTo;
            return _this;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = /** @class */ (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            var _this = _super.call(this, description, "low") || this;
            _this.description = description;
            return _this;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
/// <reference path = "to-do-classes-interfaces.ts"/>
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "[email protected]"
    };
    var thor = {
        name: "Thor Son of Odin",
        email: "[email protected]"
    };
    var loki = {
        name: "God of mischief",
        email: "loki@geocities.com",
        phone: "555-666-7777"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
/// <reference path = "to-do-classes-interfaces.ts"/>
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
})(ToDoList || (ToDoList = {}));
/// <reference path = "to-do-classes-interfaces.ts"/>
/// <reference path = "to-do-people.ts"/>
/// <reference path="to-do-listing-functions.ts" />
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "high"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "high"));
tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask(today, "Update blog.", "high", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "high", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "low", people.loki));
console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks");
for (var _i = 0, thorTasks_1 = thorTasks; _i < thorTasks_1.length; _i++) {
    var task = thorTasks_1[_i];
    console.log(task);
}
