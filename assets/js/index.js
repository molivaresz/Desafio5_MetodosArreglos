const InputNuevaTarea = document.getElementById("InputNuevaTarea")
const btnAgregarNuevaTarea = document.getElementById("btnAgregarNuevaTarea")
const TotalTarea = document.getElementById("TotalTarea")
const RealizadasTarea = document.getElementById("RealizadasTarea")
const listadoTareas = document.getElementById("listadoTareas")


const todo_list = [
    {
        id: 1234,
        tarea: 'Hacer el aseo',
        realizado: false
    },
    {
        id: 1235,
        tarea: 'Realizar compras',
        realizado: false
    },
    {
        id: 1236,
        tarea: 'Limpiar el auto',
        realizado: false
    },
]

const visualizar = () => {
    listadoTareas.innerHTML = ""
    todo_list.forEach((elemento) => {
        const botonx = `<button type="button" class="btn btn-outline-dark btn-sm" onclick="eliminar_tarea(${elemento['id']})">X</button>`
        const chkrealizado = `<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onclick="updcheck(${elemento['id']})" ${elemento['realizado'] ? "checked" : ""}>`
        listadoTareas.innerHTML += `<tr><td>${elemento['id']}</td><td>${elemento['tarea']}</td><td>${chkrealizado}</td><td>${botonx}</td></tr>`
    })
    TotalTarea.innerHTML = todo_list.length

    const todo_list_realizado = todo_list.filter((elem) => elem['realizado'] == true)
    RealizadasTarea.innerHTML = todo_list_realizado.length
}

const agregar_tarea = () => {
    if (InputNuevaTarea.value != "") {
        let nuevatarea = {id: Date.now(), tarea: InputNuevaTarea.value, realizado: false}
        todo_list.push(nuevatarea)
        InputNuevaTarea.value = ""
    } else {
        alert("Debe ingresar una tarea.")
    }
    visualizar()
}

const eliminar_tarea = (id) => {
    const index = todo_list.findIndex((ele) => ele.id == id)
    todo_list.splice(index, 1)

    visualizar()
}

const updcheck = (id) => {
    let updobj = ""
    const index = todo_list.findIndex((ele) => ele.id == id)
    if (todo_list[index]['realizado']) {
        updobj = {id: todo_list[index]['id'], tarea: todo_list[index]['tarea'], realizado: false}
    } else {
        updobj = {id: todo_list[index]['id'], tarea: todo_list[index]['tarea'], realizado: true}
    }

    todo_list.splice(index, 1, updobj)

    console.log(todo_list)

    visualizar()
}

visualizar()

btnAgregarNuevaTarea.addEventListener("click", () => { agregar_tarea()})






