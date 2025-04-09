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


    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
               <li class="list__item${task.done ? " list__item--done" : ""}">
                  <button class="js-completedTaskButton">Completed?</button>
                  ${task.content}
                  <button class="js-removeTaskButton">Remove task</button>
               </li>
            `;
        }

        document.querySelector(".js-taskList").innerHTML = htmlString;

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

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}