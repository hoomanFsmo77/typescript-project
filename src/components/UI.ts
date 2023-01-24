import {ITodo} from "./Todo";
import {storage} from "./Storage";


function ShowInitialTodos(prop:any) {
    let ui=new prop()
    ui.showTodo(storage.getItem)
}




@ShowInitialTodos
class UI {
    public todoContainer=document.querySelector('#todo-list')!;

    showTodo(data:ITodo[]){
        // @ts-ignore
        this.todoContainer?.innerHTML=''
        let target=data.map(item=>{
            return `<tr>
                        <th scope="row">${item.id}</th>
                        <td>${item.value}</td>
                        <td><input type="checkbox"  class="form-check-input"></td>
                        <td>
                            <button class="btn btn-sm btn-outline-danger">delete</button>
                        </td>
                    </tr>`
        }).join('');
        this.todoContainer?.insertAdjacentHTML('beforeend',target)
    }

}
let ui=new UI()

export {ui}