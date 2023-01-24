import {ITodo} from "./Todo";




class Store {
    setItem(data:ITodo[]){
        localStorage.setItem('_todo_x',JSON.stringify(data))
    }
    get getItem(){
        if(JSON.parse(<string>localStorage.getItem('_todo_x'))){
            return JSON.parse(<string>localStorage.getItem('_todo_x'))
        }else{
            return  [
                {
                    id:1,
                    value:'Lorem ipsum dolor si ',
                    status:false
                },{
                    id:2,
                    value:'Lorem ipsum ',
                    status:false
                }
            ]
        }
    }
}
let storage=new Store()

export {storage}