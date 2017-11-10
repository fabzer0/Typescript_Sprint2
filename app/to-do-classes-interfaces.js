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
