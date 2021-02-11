//Selector
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);

//Event Handlers
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
    input.value = ''
}

function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'checkButton')
        checkTodo(e);
    if (e.target.name == 'deleteButton')
        deleteTodo(e);
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML ='';
}

function playsound(){
    var audio = new Audio("sound.mp3");
    audio.play();
}


//Helpers
function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class="todo-item"> ${todo} </span>
        <button name="checkButton"> <i class="fas fa-check-square" id="countButton"></i> </button>
        <button name="deleteButton"> <i class="fas fa-trash"></i> </button>
    `;

    li.classList.add('todo-list-item');
    ul.appendChild(li);

}

function checkTodo(e) {
    confetti.start(1200, 50, 150);
    playsound();
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}
/*
function checkTodo(e) {
    
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'none')
        item.style.textDecoration = 'line-through';
        confetti.start(1200, 50, 150);
        playsound();
}
*/
function deleteTodo(e) {
    let item = e.target.parentNode;

    item.addEventListener('transitionend', function () {
        item.remove();
    })

    item.classList.add('todo-list-item-fall');

}

var count = 0;
var countButton = document.getElementById.innerHTML("countButton");
var displayCount = document.getElementById("displayCount");
countButton.onclick = function(){
  count++;
  displayCount.innerHTML = count;
}


