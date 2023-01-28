import {ITodo,Todo} from "./Todo";
import Swal from "sweetalert2";
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
        Swal.fire({
            title: "Todo added!",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        })
        taskInput.value=''
    }else{
        form.classList.add('was-validated')
    }
})

