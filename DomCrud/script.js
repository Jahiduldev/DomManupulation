// 
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUI = document.querySelector('#items');
let completeUI = document.querySelector('.complete-list ul');


//function
let createTask = function (task) {

    let listItem = document.createElement('li')
    let checkbox = document.createElement('input')
    let label = document.createElement('label')


    label.innerText = task;
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;


}



let addTask = function (event) {

    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUI.appendChild(listItem);
    newTask.value = ''


}

form.addEventListener('submit', addTask);