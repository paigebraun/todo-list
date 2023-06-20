import { lists } from "./globals";
import { allTasksBtn, todayBtn, rightContainer, listBtns, iconsClicked } from ".";

function displayAllTasks() {
    todayBtn.classList.remove('selected');
    allTasksBtn.classList.add('selected');
    for (let i = 0; i < listBtns.children.length; i++) {
        listBtns.children[i].firstChild.classList.remove('selected');
    }

    //clear the right side
    while (rightContainer.firstChild) {
        rightContainer.removeChild(rightContainer.lastChild);
    }
    
    //add header
    const header = document.createElement('div');
    header.className = 'header';
    rightContainer.appendChild(header);
    const allTasks = document.createElement('h2');
    allTasks.innerText = 'All Tasks';
    header.appendChild(allTasks);

    const tasksArea = document.createElement('div');
    tasksArea.className = 'tasksArea';
    rightContainer.appendChild(tasksArea);

    for (let i = 0; i < lists.length; i++) {
        //add list names to display
        const taskCard = document.createElement('div');
        taskCard.className = 'taskCard';
        const listName = document.createElement('h2');
        listName.className = 'listName';
        listName.innerText = lists[i].title;
        listName.style.color = lists[i].color;

        taskCard.appendChild(listName);
        tasksArea.appendChild(taskCard);

        if (lists[i].tasks.length === 0) {
            const noTasks = document.createElement('p');
            noTasks.className = 'noTasks';
            noTasks.innerText = 'No Tasks Here'
            taskCard.appendChild(noTasks);
        }
        else {
            //add individual tasks under the correct list name
            for (let k = 0; k < lists[i].tasks.length; k++) {
    
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
                taskSpan.innerText = lists[i].tasks[k].taskName;
                taskContainer.appendChild(taskSpan);
                const checkmark = document.createElement('span');
                checkmark.className = 'checkmark';
                checkmark.style.setProperty('--checkedColor', lists[i].color);
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
                if (lists[i].tasks[k].completed === 'true') {
                    checkbox.checked = true;
                }
                if (lists[i].tasks[k].completed === 'false') {
                    checkbox.checked = false;
                }
                taskLabel.addEventListener('input', ()=> {
                    if (lists[i].tasks[k].completed === 'true') {
                        lists[i].tasks[k].completed = 'false';
                    }
                    else if (lists[i].tasks[k].completed === 'false') {
                        lists[i].tasks[k].completed = 'true';
                    }
                })
                //add event listener to info & delete icons
                iconsClicked(lists[i].tasks[k]);
            }
        }
    }
}

export { displayAllTasks };