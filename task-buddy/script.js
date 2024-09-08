// Referências dos elementos do DOM
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Função para adicionar tarefa
function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    // Criando novo item de tarefa (li)
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Botão de excluir
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Limpar o campo de entrada de texto
    taskInput.value = '';
}

// Adicionando evento de clique ao botão de adicionar tarefa
addTaskButton.addEventListener('click', addTask);

// Permitir adicionar tarefa pressionando "Enter"
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
