import {ITodo,Todo} from "./Todo";

const form=document.querySelector('form')!;
const taskInput=document.querySelector('#task') as HTMLInputElement;


window.addEventListener('load',()=>{
    taskInput.value=''
})

form.addEventListener('submit',(e:SubmitEvent)=>{
    e.preventDefault()
    let task=taskInput.value.trim()
    if(task.length>0){
        let newTodo:ITodo={
            id:Math.floor(Math.random()*100),
            value:task,
            status:false
        }
        let todo=new Todo(newTodo)
        todo.add(newTodo)
        taskInput.value=''
    }else{
        form.classList.add('was-validated')
    }
})

