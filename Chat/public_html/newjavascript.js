import { saveTask, getTasks, onGetTasks } from './firebase.js'

const taskForm = document.getElementById('task-form')
const taskContainer = document.getElementById('task-container')

window.addEventListener('DOMContentLoaded', async () => {         //Ejecuta al arrancar la pestaña

    onGetTasks((querySnapshot) =>{
    
    taskContainer.innerHTML = ""

    querySnapshot.forEach(doc => {
        const task = doc.data()
        taskContainer.innerHTML += `
            <div>
                <h3>${task.title}</h3>
            </div>
        `       
    })
    } )


})


taskForm.addEventListener('submit', (e) => {

    e.preventDefault()
    const title = taskForm['task-title']
    saveTask(title.value)

})


