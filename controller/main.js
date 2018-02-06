
var module = angular.module("TODO",[]);

module.controller("todoController", todoController);
module.controller("doingController", doingController);
module.controller("doneController", doneController);

var doingList = [];
var doneList = [];

function todoController(){
    this.todoTasks = [];

    this.addTodoTask = function(){
        this.todoTasks.push({'todo':this.todoTask})
        this.todoTask = "";
    }

    this.process = function(index){
        doingList.push({'doing':this.todoTasks[index].todo})
        this.todoTasks.splice(index,1);
    }

    this.delete = function(index){
        this.todoTasks.splice(index,1);
    }
}

function doingController(){
    this.doingTasks = doingList;
    
    this.done = function(index){
        doneList.push({'done':this.doingTasks[index].doing})
        this.doingTasks.splice(index,1);
    }

    this.delete = function(index){
        this.doingTasks.splice(index,1);
        doingList.splice(index, 1);
    }
}

function doneController(){
    console.log(doneList);
    console.log(this.doneTasks);
    this.doneTasks = doneList;

    this.delete = function(index){
        this.doneTasks.splice(index,1);
        doneList.splice(index, 1);
    }
}