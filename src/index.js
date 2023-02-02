document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById('tasks')
  
  const newTaskForm = document.getElementById('create-task-form')
  const newTaskDescription = document.getElementById("new-task-description");

  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = document.createElement('div');
    newTask.textContent = newTaskDescription.value
    taskList.appendChild(newTask)
  })
});
