// // Save the task list to localstorage
// function saveTaskListToLocalStorage() {
//     const taskListHTML = document.querySelector("#taskList").innerHTML;
//     localStorage.setItem("taskList", taskListHTML);
// }

// // Print the task list from localstorage
// function printTaskListFromLocalStorage() {
//     const taskListHTML = localStorage.getItem("taskList");
//     if (taskListHTML) {
//         document.querySelector("#taskList").innerHTML = taskListHTML;
//     }
// }

// // Add a new task to the task list
// function addTask() {
//     const taskText = document.querySelector("#task").value;
//     // Add the task to the task list
//     const listItem = document.createElement("li");
//     listItem.textContent = taskText;
//     document.querySelector("#taskList").appendChild(listItem);

//     // Save the task list to localstorage
//     saveTaskListToLocalStorage();
// }

// // Print the task list from localstorage when the page loads
// printTaskListFromLocalStorage();



// Short-Hand Version👇👇👇👇


// Save task list to localStorage
function saveTaskList() {
    localStorage.setItem("taskList", document.querySelector("#taskList").innerHTML);
    localStorage.setItem("textareaInput", document.querySelector("#task").value);
}

// Load and display task list from localStorage
function loadAndDisplayTaskList() {
    // I've used the || '' to provide an empty string as a default if localStorage.getItem("taskList") is null or undefined.
    document.querySelector("#taskList").innerHTML = localStorage.getItem("taskList") || '';
}
// Load and display textarea input from localStorage
function loadTextareaInput() {
    document.querySelector("#task").value = localStorage.getItem("textareaInput") || '';
}
// Add a new task to the list and save it
function addTask() {
    const taskText = document.querySelector("#task").value;
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    // const taskList = document.querySelector("#taskList");
    // taskList.innerHTML += `<li>${taskText}</li>`;
    document.querySelector("#taskList").appendChild(newTask);
    saveTaskList();
}

// Load and display the task list and textarea input when the page loads
loadTextareaInput();
loadAndDisplayTaskList();
