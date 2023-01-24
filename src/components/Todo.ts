import {ui} from "./UI";
import {storage} from "./Storage";
let todoLists:ITodo[]=storage.getItem

interface ITodo {
    id:number,
    value:string,
    status:boolean
}

class Todo implements ITodo{
    public id:number
    public value:string
    public status:boolean
    constructor(todo:ITodo) {
        this.id=todo.id
        this.value=todo.value
        this.status=todo.status
    }
    add(todo:ITodo){
        todoLists.push(todo)
        ui.showTodo(todoLists)
        storage.setItem(todoLists)
    }
}


export {ITodo,Todo,todoLists}