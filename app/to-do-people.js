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
