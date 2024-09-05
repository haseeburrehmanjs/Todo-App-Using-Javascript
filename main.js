// let list = document.querySelector('#list')
// let input = document.querySelector('#input')
// let form = document.querySelector('#form')
// let addTodo = []

// function renderScreen() {
//     list.innerHTML = ''
//     for (let i = 0; i < addTodo.length; i++) {
//         list.innerHTML += `
//         <li class="list-style d-flex justify-content-between mt-2">
//             ${addTodo[i]}
//            <div>
//            <button onclick='deleteTodo(${i})'>Delete</button>
//            <button onclick="editTodo(${i})">Edit</button>
//            </div>
//         </li>
//         `
//     }
// }

// function submitData() {
//     if (input.value === '') {
//         alert('Enter Your list Items')
//     } else {
//         addTodo.push(input.value)
//         input.value = ''
//         renderScreen()
//     }
// }


// function deleteTodo(index) {
//     addTodo.splice(index , 1)
//     renderScreen()
// }

// function editTodo(index){
//     let ubdateValue = prompt('Ubdate List')
//     addTodo.splice(index,1,ubdateValue)
//     renderScreen()
// }





















let list = document.querySelector('#list')
let input = document.querySelector('#input')
let form = document.querySelector('#form')
let addTodo = []

function renderScreen() {
    list.innerHTML = ''
    addTodo.map((item, index) => {
        // console.log(item);
        list.innerHTML += `
        <li class="list-style d-flex justify-content-between align-items-center mt-2 ">
            ${item}
           <div>
           <button onclick='deleteTodo(${index})'>Delete</button>
           <button onclick="editTodo(${index})">Edit</button>
           </div>
        </li>
        `
    })
}

form.addEventListener('submit', event => {
    event.preventDefault()
    if(input.value === ''){
        alert('please add todo!')
    }else {
        addTodo.push(input.value)
    console.log(addTodo);
    renderScreen()
    input.value = ''
    }
})

let deleteTodo = (index) => {
    addTodo.splice(index, 1)
    renderScreen()
}

let editTodo = (index) => {
    let newTodo = prompt('Enter New Todo', addTodo[index])
    if(newTodo === ''){
        renderScreen()
    }else {
        addTodo.splice(index, 1, newTodo)
        renderScreen()
    }
}