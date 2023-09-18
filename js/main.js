(function(){
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	// Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a");
			

		if (tarea === "") {
            alert("Agregar una tarea valida");
			tareaInput.className = "error";
			return false;
		}

        enlace.textContent = tarea;
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
			    this.remove();
			});
		}

	};
	var comprobarInput = function(){
		tareaInput.className = "";
	};

	var eleminarTarea = function(){
		this.remove();
	};

	// Eventos

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);

	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());