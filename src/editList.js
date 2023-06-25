import { dim, lists } from './globals';
import { listOfColors } from './newLists';
import { displayHomeTaskArea, rightContainer } from '.';
import { iconsClicked } from './editTask';
import { addListDropdown, dropDownHelper, sBtn_text } from './newTasks';

const editList = document.getElementById('editList');
const editListName = document.getElementById('editListName');
const editColor = document.getElementsByName('editColor');
const editListAdd = document.querySelector('.editListAdd');
const editListCancel = document.querySelector('.editListCancel');

function listIconsClicked(listIcons, currentList) {
    listIcons.addEventListener('click', (e)=> {
        if (e.target.classList[1] === 'bx-info-circle') {
            //display info pop up
            editList.style.display = 'flex';
            dim.style.display = 'block';
            editListName.value = currentList.title;
            //remove checked color
            for (let i = 0; i < editColor.length; i++) {
                editColor[i].checked = false;
            }
            //make checked color same as list color
            let colorIndex = listOfColors.indexOf(currentList.color);
            editColor[colorIndex].checked = true;
            editListAdd.addEventListener('click', editListAddHandler);
        }
        if (e.target.classList[1] === 'bx-trash') {
            //delete the list
            deleteList(currentList);
        }
    })

    //cancel update to list, reset
    editListCancel.addEventListener('click', ()=> {
        editListAdd.removeEventListener('click', editListAddHandler);
        hideEditList();
    });

    function editListAddHandler() {
        currentList.title = editListName.value;
        //find which color is checked
        let editColorNum = document.querySelector('input[name="editColor"]:checked');
        let editColorSelected = listOfColors[Number(editColorNum.value)];
        currentList.color = editColorSelected;
        let selectedList = document.querySelector('.selected');
        selectedList.innerText = editListName.value;
        selectedList.nextElementSibling.style.backgroundColor = editColorSelected;
        updateListView(currentList);
        hideEditList();
        addListDropdown();
        dropDownHelper();
        editListAdd.removeEventListener('click', editListAddHandler);
    }
}

function hideEditList() {
    editList.style.display = 'none';
    dim.style.display = 'none';
}

function deleteList(currentList) {
    let removeIndex = lists.indexOf(currentList);
    lists.splice(removeIndex, 1);
    //remove from listBtns
    let selectedList = document.querySelector('.selected');
    selectedList.parentElement.remove();
    sBtn_text.innerText = lists[0].title;
    addListDropdown();
    dropDownHelper();
    displayHomeTaskArea();
    console.log(lists);
}

function updateListView(currentList) {
    //clear the right side
    while (rightContainer.firstChild) {
        rightContainer.removeChild(rightContainer.lastChild);
    }
    
    //add header
    const header = document.createElement('div');
    header.className = 'header';
    rightContainer.appendChild(header);
    const listHeader = document.createElement('h2');
    listHeader.innerText = currentList.title;
    listHeader.style.color = currentList.color;
    header.appendChild(listHeader);
    const listIcons = document.createElement('div');
    const listInfo = document.createElement('i');
    const listDelete = document.createElement('i');
    listInfo.classList = 'bx bx-info-circle';
    listDelete.classList = 'bx bx-trash';
    listIcons.appendChild(listInfo);
    listIcons.appendChild(listDelete);
    listIcons.className = 'listIcons';
    listIcons.style.setProperty('--checkedColor', currentList.color);
    header.appendChild(listIcons);

    const tasksArea = document.createElement('div');
    tasksArea.classList.add('tasksArea')
    tasksArea.classList.add('tasksOnly');
    rightContainer.appendChild(tasksArea);

    const taskCard = document.createElement('div');
    taskCard.className = 'taskCard';
    tasksArea.appendChild(taskCard);

    //find the right list
    for (let j = 0; j < lists.length; j++) {
        if (lists[j].title === currentList.title) {
            //add event listener to list icons
            listIconsClicked(listIcons, lists[j]);
            if (lists[j].tasks.length === 0) {
                const noTasks = document.createElement('p');
                noTasks.className = 'noTasks';
                noTasks.innerText = 'No Tasks Here'
                taskCard.appendChild(noTasks);
            }
            else {
                //add individual tasks under the correct list name
                for (let k = 0; k < lists[j].tasks.length; k++) {
                    const taskLabel = document.createElement('div');
                    taskLabel.className = 'task';
                    taskCard.appendChild(taskLabel);

                    const taskContainer = document.createElement('label');
                    taskContainer.className = 'taskContainer';
                    taskLabel.appendChild(taskContainer);

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.className = 'strike';
                    checkbox.name = 'checkbox';
                    taskContainer.appendChild(checkbox);
                    const taskSpan = document.createElement('span');
                    taskSpan.innerText = lists[j].tasks[k].taskName;
                    taskContainer.appendChild(taskSpan);
                    const checkmark = document.createElement('span');
                    checkmark.className = 'checkmark';
                    checkmark.style.setProperty('--checkedColor', lists[j].color);
                    taskContainer.appendChild(checkmark);

                    const iconContainer = document.createElement('div');
                    iconContainer.className = 'iconContainer';
                    const infoIcon = document.createElement('i');
                    infoIcon.className = 'bx bx-info-circle';
                    const deleteIcon = document.createElement('i');
                    deleteIcon.className = 'bx bx-trash';
                    iconContainer.appendChild(infoIcon);
                    iconContainer.appendChild(deleteIcon);
                    taskLabel.appendChild(iconContainer);

                    //check if task is checked/completed
                    if (lists[j].tasks[k].completed === 'true') {
                        checkbox.checked = true;
                    }
                    if (lists[j].tasks[k].completed === 'false') {
                        checkbox.checked = false;
                    }
                    taskLabel.addEventListener('input', ()=> {
                        if (lists[j].tasks[k].completed === 'true') {
                            lists[j].tasks[k].completed = 'false';
                        }
                        else if (lists[j].tasks[k].completed === 'false') {
                            lists[j].tasks[k].completed = 'true';
                        }
                    })
                    
                    //add event listener to task icons
                    iconsClicked(iconContainer, lists[j].tasks[k]);
                }
            }
            
        }
    }

}

export { listIconsClicked };