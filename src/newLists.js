import { lists, dim } from './globals';
import { addListDropdown, dropDownHelper } from './newTasks';
import { displayHomeTaskArea } from '.';

//list object constructor
class ListObj {
    constructor(title, color, tasks) {
        this.title = title;
        this.color = color;
        this.tasks = tasks;
    }
}

//store lists
const listBtns = document.querySelector('.listBtns');
createList('Personal', '#71CD50', []);
createList('Work', '#FB9535', []);
createList('Grocery', '#F173BF', []);

//create new list objects
function createList(title, color, tasks) {
    let newList = new ListObj(title, color, tasks);
    lists.push(newList);
}

//display lists
for (let i = 0; i < lists.length; i++) {
    displayList(lists[i]);
}

function displayList(listObject){
    const listDiv = document.createElement('div');
    listDiv.className = 'listButton';
    const listNameBtn = document.createElement('button');
    listNameBtn.innerText = listObject.title;
    listDiv.appendChild(listNameBtn);
    const taskCount = document.createElement('div');
    taskCount.className = 'taskCount';
    taskCount.style.backgroundColor = listObject.color;
    taskCount.innerText = '0';
    listDiv.appendChild(taskCount);

    listBtns.appendChild(listDiv);
}

//New List popup functionality

//Add new list
const addListBtn = document.getElementById('addBtn');
const newListPopup = document.getElementById('newList');
const newListCancel = document.querySelector('.newListCancel');
const newListAdd = document.querySelector('.newListAdd');
const newListName = document.getElementById('newListName');
addListBtn.addEventListener('click', displayNewList);
newListCancel.addEventListener('click', hideNewList);

const colors = document.querySelectorAll('input[name=color]')
function displayNewList() {
    newListPopup.style.display = 'flex';
    dim.style.display = 'block';
}

function hideNewList() {
    newListName.value = '';
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].checked) {
            colors[i].checked = false;
        }
    }
    colors[0].checked = true;
    newListPopup.style.display = 'none';
    dim.style.display = 'none';
}

const listOfColors = ['#71CD50', '#FB9535', '#F173BF', '#F6D14B', '#EF543F', '#67C7C1', '#9C69DE', '#505050'];

newListAdd.addEventListener('click', function() {
    let colorNum = document.querySelector('input[name="color"]:checked');
    let colorSelected = listOfColors[Number(colorNum.value)];
    createList(newListName.value, colorSelected, []);
    hideNewList();
    displayList(lists[lists.length - 1]);
    addListDropdown();
    dropDownHelper();
})

export {listBtns};