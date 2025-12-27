const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Enter your task");
        return;
    }

    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.className = "task-text";
    span.innerText = taskText;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;

    const saveBtn = document.createElement("button");
    saveBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    saveBtn.style.display = "none";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    actions.appendChild(editBtn);
    actions.appendChild(saveBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);

    taskInput.value = "";

    editBtn.addEventListener("click", () => {
        span.contentEditable = true;
        span.focus();
        editBtn.style.display = "none";
        saveBtn.style.display = "inline-block";
    });

    saveBtn.addEventListener("click", () => {
        span.contentEditable = false;
        editBtn.style.display = "inline-block";
        saveBtn.style.display = "none";
    });

    deleteBtn.addEventListener("click", () => {
        li.style.opacity = "0";
        li.style.transform = "translateX(30px)";
        setTimeout(() => li.remove(), 300);
    });
}
                