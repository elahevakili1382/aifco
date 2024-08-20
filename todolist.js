document.addEventListener("DOMContentLoaded", () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (storedTasks) {
        storedTasks.forEach((task) => tasks.push(task));
        updateTasksList();
        updateStatus();

    }
});

let tasks = [];

const updateStatus = () => {
    const completeTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = (completeTasks / totalTasks) * 100;
    const progressBar = document.getElementById('progress');

    progressBar.style.width = `${progress}%`;
    document.getElementById('numbers').innerText = `${completeTasks} / ${totalTasks}`;

    // Check if all tasks are completed
    if (totalTasks > 0 && completeTasks === totalTasks) {
        stars(); // Trigger the star animation
    }
};

const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        updateTasksList();
        updateStatus();
        saveTasks();
    }
};

const toggleTaskcomplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
    updateStatus();
    saveTasks();
};

const deletecheck = () => {
    const deleteButtons = document.querySelectorAll('.deletebtn');

    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    const taskItem = button.closest('.taskItem');

                    // Add animation classes to the task item
                    taskItem.classList.add('animate__animated', 'animate__rotateOutDownRight');

                    // Wait for the animation to end before removing the task
                    taskItem.addEventListener('animationend', () => {
                        deleteTask(index);
                        updateTasksList(); // Update the task list after deletion
                    });

                    Swal.fire("Deleted!", "Your task has been deleted.", "success");
                }
            });
        });
    });
};

const updateTasksList = () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
        <div class="taskItem">
            <div class="task ${task.completed ? 'completed' : ''}">
                <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}>
                <p>${task.text}</p>
            </div>
            <div class="icons">
                <i class="bi bi-trash3 deletebtn"></i>
                <i class="bi bi-pencil-square" onclick="editTask(${index})"></i>
            </div>
        </div>
        `;

        listItem.querySelector(".checkbox").addEventListener("change", () => toggleTaskcomplete(index));
        taskList.append(listItem);
    });

    // Call deletecheck here to attach the event listeners to the new delete buttons
    deletecheck();
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTasksList();
    updateStatus();
    saveTasks();
};

const editTask = (index) => {
    const taskInput = document.getElementById("taskInput");
    taskInput.value = tasks[index].text;

    tasks.splice(index, 1);
    updateTasksList();
    updateStatus();
    saveTasks();
};

const buttonEl = document.getElementById("newTask");
buttonEl.addEventListener("click", function (e) {
    e.preventDefault();
    addTask();
});


// 
const stars = ()=>{
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});


}
