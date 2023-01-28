import {ITodo,todoLists} from "./Todo";
import {storage} from "./Storage";
import Swal from "sweetalert2";



function ShowInitialTodos(prop:any) {
    let ui=new prop()
    ui.showTodo(storage.getItem)
}

@ShowInitialTodos
class UI {
    public todoContainer=document.querySelector('#todo-list')!;
    constructor() {

    }
    showTodo(data:ITodo[]){
        // @ts-ignore
        this.todoContainer?.innerHTML=''
        let target=data.map(item=>{
            return `<tr>
                        <th scope="row">${item.id}</th>
                        <td>${item.value}</td>
                        <td><input type="checkbox" id="check"  data-status="${item.status ? 1 : 0}" data-id="${item.id}"  class="form-check-input"></td>
                        <td>
                            <button data-id="${item.id}" class="btn btn-sm btn-outline-danger">delete</button>
                        </td>
                    </tr>`
        }).join('');
        this.todoContainer?.insertAdjacentHTML('beforeend',target)
        document.querySelectorAll('#check').forEach((item:any,index:number)=>{
            if(data[index].status){
                item.setAttribute('checked','')
            }else{
                item.removeAttribute('checked')
            }
        })

    }
    todoListEvents=(e:any)=>{
        if(e.target.classList.contains('btn-outline-danger')){
            this.removeTodo(e)
        }else if(e.target.classList.contains('form-check-input')){
            this.changeStatus(e)
        }
    }
    removeFromStorage(id:number){
        let targetIndex=todoLists.findIndex(item=>item.id===Number(id))
        if(targetIndex>-1){
            todoLists.splice(targetIndex,1)
            storage.setItem(todoLists)
        }

    }
    removeTodo=(e:any)=>{
        this.removeFromStorage(e.target.dataset.id)
        e.target.parentElement.parentElement.remove()
        Swal.fire({
            title: "Todo removed!",
            icon: "error",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        })
    }
    changeStatus=(e:any)=>{
        Swal.fire({
            title: "Todo updated",
            icon: "info",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        })
        let index=todoLists.findIndex(item=>item.id===Number(e.target.dataset.id))
        if(e.target.dataset.status==='1'){
            todoLists[index].status=false
            e.target.dataset.status='0'
        }else{
            todoLists[index].status=true
            e.target.dataset.status='1'
        }
        storage.setItem(todoLists)
    }
}
let ui=new UI()
document.querySelector('#todo-list')?.addEventListener('click',ui.todoListEvents)
export {ui}