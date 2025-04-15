{
    const tasks = [
        {
            content: "First task",
            done: false,
        },
        {
            content: "Second task",
            done: true,
        },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-removeTaskButton");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleTaskDoneButtons = document.querySelectorAll(".js-completedTaskButton");

        toggleTaskDoneButtons.forEach((toggleTaskDoneButton, index) => {
            toggleTaskDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                    <li class="tasks__item"> 
                        <button class="tasks__button ${task.done ? "tasks__button--done" : ""} js-completedTaskButton">
                           ${task.done ? "✓" : ""}
                        </button>
                        <span class="tasks__content ${task.done ? "tasks__content--done" : ""}">
                           ${task.content}
                        </span>                
                        <button class="tasks__button tasks__button--remove js-removeTaskButton">🗑</button>
                    </li>
            `;
        }

        document.querySelector(".js-taskList").innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();
        if (newTaskContent === "") {
            newTaskElement.focus();
            return;
        }

        newTaskElement.focus();
        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}