const form = document.getElementById('form')
const input = document.getElementById('input')
const todos = document.getElementById('todos')
const addbtn = document.getElementById('addbtn')
const clearbtn = document.getElementById('clearbtn')

form.addEventListener("submit",(e) => {
    e.preventDefault();

    const todoText = input.value;

    if (todoText) {
        const todoEl = document.createElement("li");
        todoEl.innerText = todoText;

        todoEl.addEventListener('click',() => {
            todoEl.classList.toggle('completed');
        });

        todoEl.addEventListener("contextmenu",(e) => {
            e.preventDefault();

            todoEl.remove();
        })

        todos.appendChild(todoEl);

        input.value = '';
    }
})

/* addbtn.addEventListener("click",() =>{
    
    const todoText = input.value;

    const todoElement = document.createElement("li");
    todoElement.innerText = todoText; 
    todos.appendChild(todoElement);
    input.value = '';       
})


clearbtn.addEventListener("click",() => {
todos.remove();
})
 */