// Obtener elementos del DOM
const addTaskButton = document.getElementById('add-task'); // Botón para añadir una nueva tarea
const taskList = document.getElementById('task-list'); // Lista donde se mostrarán las tareas

// Función para agregar una nueva tarea
function addTask() {
    // Obtener el título y la descripción de la tarea desde los campos de entrada
    const taskTitle = document.getElementById('task-title').value.trim();
    const taskDesc = document.getElementById('task-desc').value.trim();

    // Verificar si el título o la descripción están vacíos
    if (taskTitle === '' || taskDesc === '') {
        alert('Por favor, ingresa un título y una descripción para la tarea.'); // Mostrar alerta si faltan datos
        return; // Salir de la función si los datos están incompletos
    }

    // Crear elementos HTML para la nueva tarea
    const taskItem = document.createElement('li'); // Elemento de lista para la tarea
    const taskTitleElement = document.createElement('h3'); // Elemento para el título de la tarea
    const taskDescElement = document.createElement('p'); // Elemento para la descripción de la tarea
    const actionsContainer = document.createElement('div'); // Contenedor para los botones de acción
    const completeButton = document.createElement('button'); // Botón para marcar la tarea como completada
    const editButton = document.createElement('button'); // Botón para editar la tarea
    const deleteButton = document.createElement('button'); // Botón para eliminar la tarea

    // Establecer el contenido de los elementos
    taskTitleElement.textContent = taskTitle; // Asignar el título a su elemento
    taskDescElement.textContent = taskDesc; // Asignar la descripción a su elemento
    completeButton.innerHTML = '<i class="fas fa-check"></i>'; // Icono de completar tarea
    editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>'; // Icono de editar tarea
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; // Icono de eliminar tarea

    // Asignar clases CSS a los botones para estilos específicos
    completeButton.className = 'complete-task'; 
    editButton.className = 'edit-task'; 
    deleteButton.className = 'delete-task'; 

    // Asignar clase CSS al contenedor de acciones
    actionsContainer.className = 'task-actions'; 

    // Agregar funcionalidad al botón de eliminar
    deleteButton.onclick = function() {
        taskItem.remove(); // Eliminar la tarea de la lista cuando se hace clic
    };

    // Agregar funcionalidad al botón de completar
    completeButton.onclick = function() {
        taskItem.classList.toggle('completed'); // Alternar la clase 'completed' para marcar o desmarcar la tarea
    };

    // Agregar funcionalidad al botón de editar
    editButton.onclick = function() {
        // Pedir al usuario que edite el título y la descripción
        const newTitle = prompt('Edita el título:', taskTitleElement.textContent);
        const newDesc = prompt('Edita la descripción:', taskDescElement.textContent);

        // Actualizar el título y la descripción si se proporciona nuevo contenido
        if (newTitle) taskTitleElement.textContent = newTitle.trim();
        if (newDesc) taskDescElement.textContent = newDesc.trim();
    };

    // Ensamblar la tarea: añadir elementos y botones al contenedor
    actionsContainer.appendChild(completeButton); // Añadir el botón de completar al contenedor de acciones
    actionsContainer.appendChild(editButton); // Añadir el botón de editar al contenedor de acciones
    actionsContainer.appendChild(deleteButton); // Añadir el botón de eliminar al contenedor de acciones
    taskItem.appendChild(taskTitleElement); // Añadir el título de la tarea al elemento de lista
    taskItem.appendChild(taskDescElement); // Añadir la descripción de la tarea al elemento de lista
    taskItem.appendChild(actionsContainer); // Añadir el contenedor de acciones al elemento de lista

    // Añadir el nuevo elemento de tarea a la lista de tareas
    taskList.appendChild(taskItem);

    // Limpiar los campos de entrada después de añadir la tarea
    document.getElementById('task-title').value = ''; // Vaciar el campo de título
    document.getElementById('task-desc').value = ''; // Vaciar el campo de descripción
}

// Añadir un event listener al botón de añadir tarea para ejecutar la función addTask cuando se hace clic
addTaskButton.addEventListener('click', addTask);
