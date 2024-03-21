let input = document.querySelector('input');
let ol = document.querySelector('ol');
let emptyArray = [];

function renderScreen(){
    ol.innerHTML = ' '
    emptyArray.push(input.value)
    console.log(emptyArray);
    input.value = ''

    for (let i = 0; i < emptyArray.length; i++){
        ol.innerHTML += `<li>${emptyArray[i]}
        <button>Delete</button>
        <button>Edit</button>
        </li>`
    }
}