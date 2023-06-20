import { lists } from "./globals";
import { allTasksBtn, todayBtn, rightContainer, listBtns, iconsClicked } from ".";

function displayListView(e) {
    //if click on task count circle or in between buttons, do nothing
    if ((e.className === 'taskCount') || (e.className === 'listBtns')) {
        return;
    }
    todayBtn.classList.remove('selected');
    allTasksBtn.classList.remove('selected');
    for (let i = 0; i < listBtns.children.length; i++) {
        listBtns.children[i].firstChild.classList.remove('selected');
    }
    e.classList.add('selected');

    //clear the right side
    while (rightContainer.firstChild) {
        rightContainer.removeChild(rightContainer.lastChild);
    }
    
    //add header
    const header = document.createElement('div');
    header.className = 'header';
    rightContainer.appendChild(header);
    const listHeader = document.createElement('h2');
    listHeader.innerText = e.innerText;
    listHeader.style.color = e.nextElementSibling.style.backgroundColor;
    header.appendChild(listHeader);

    const tasksArea = document.createElement('div');
    tasksArea.classList.add('tasksArea')
    tasksArea.classList.add('tasksOnly');
    rightContainer.appendChild(tasksArea);

    const taskCard = document.createElement('div');
    taskCard.className = 'taskCard';
    tasksArea.appendChild(taskCard);

    //find the right list
    for (let j = 0; j < lists.length; j++) {
        if (lists[j].title === e.innerText) {
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
                    
                    //add event listener to icons
                    iconsClicked(lists[j].tasks[k]);
                }
            }
            
        }
    }

}

export { displayListView };