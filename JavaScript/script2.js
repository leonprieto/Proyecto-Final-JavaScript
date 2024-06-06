class tareas {
    /*constructor(descripcion, color) { quiero ponerle color pero no me sale
        this.descripcion = descripcion;
        this.color = color;
        this.completado = false;
    }*/
    constructor(descripcion) {
        this.descripcion = descripcion;
        this.completado = false;
    }
}
class administrador {
    constructor(){
        this.lista = [];
    }
    /*agregarTarea(descripcion, color) {
        const tarea = new tareas (descripcion, color);
        this.lista.push(tarea);
    }*/
    agregarTarea(descripcion) {
        const tarea = new tareas (descripcion);
        this.lista.push(tarea);
        this.cargar();
    }
    eliminarTarea(numero){
        this.lista.splice(numero, 1); 
        this.cargar();
    }
    cambiarEstado(numero){
        this.lista[numero].completado = !this.lista[numero].completado;
        this.cargar();
    }
    cargar(){
        const listaDeTareas = document.getElementById("listaDeTareas");
        listaDeTareas.innerHTML = '';

        this.lista.forEach((tarea,numero)=>{
            const item = document.createElement("li");
            item.textContent = tarea.descripcion;
            /*item.style.backgroundColor = tarea.color;*/
            if(tarea.completado){
                item.style.textDecoration = 'line-through'; //no funciona
            }
            const botonEliminar = document.createElement("button");
            botonEliminar.innerHTML = 'Eliminar';
            botonEliminar.addEventListener('click',this.eliminarTarea(numero));
            item.addEventListener('click', ()=>this.cambiarEstado(numero));
            listaDeTareas.appendChild(item);
        })
    }
} //estoy frustrado

//BARRA DE NAVEGACION
const header = document.getElementById('header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

header.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);

navegacion.className = "navbar";

const enlaces = ["Index", "Tareas", "Contacto"];

for (const enlace of enlaces){
    const li = document.createElement("li");
    li.innerHTML = `<a href='${enlace.toLowerCase()}.html'>${enlace}</a>`;
    ul.appendChild(li);
}

//Iniciar un administrador
const administrador1 = new administrador();

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('input');
    administrador1.agregarTarea(input.value);
    input.value = '';
});