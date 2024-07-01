//cargar titulo
let titulo = document.getElementById("titulo-header")
titulo.innerText = "Venta de Notebooks"
titulo.classList.add('p-5', 'text-center', 'bg-primary', 'text-white');



// declaración global de notebooks
let notebooks = [];

// funcion para cargar notebooks desde json con fecth
function cargarNotebooks() {
    return fetch("notebooks.json")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error al cargar el archivo json');
            }
        })
        .then(data => {
            notebooks = data; // asignar datos a la variable global notebooks
        })
        .catch(error => {
            console.error('Error:', error);
            return null;
        });
}

// funcion para renderizar cards en cardsContainer
function renderizarNotebooks() {
    let cardsContainer = document.getElementById('cardsContainer');



    notebooks.forEach((notebook) => {
        let card = document.createElement('div');
        card.classList.add('col-lg-4', 'col-md-6', 'text-center', 'mb-3');

        card.innerHTML = `
            <div class="card">
                <img src="${notebook.img}" class="card-img-top" alt="${notebook.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${notebook.nombre}</h5>
                    <p class="card-text">Marca: ${notebook.marca}</p>
                    <p class="card-text">Precio: ${notebook.precio.toLocaleString("es-CL", {style: "currency", currency: "CLP"})}</p>
                    <button class="btn btn-primary btnAgregar" data-id="${notebook.id}">Agregar al carrito</button>
                </div>
            </div>
        `;

        // aregar la card al contenedor
        cardsContainer.appendChild(card);
    });

    // llamar funcion despues de renderizar todas las cards
    AgregarAlCarrito();
}




// funcion para agregar los notebooks al carrito
function AgregarAlCarrito() {
    const agregarBtns = document.querySelectorAll(".btnAgregar");

    agregarBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            const notebookId = e.currentTarget.getAttribute('data-id');
            const selectedNotebook = notebooks.find(notebook => notebook.id == notebookId);


            // obtener carrito del localStorage o inicializar si no existe
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            // agregar el notebook al carrito
            carrito.push(selectedNotebook);

            // guardar el carrito actualizado en el localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));

            // alerta de se agregó producto 
            alert('El notebook se ha añadido al carrito');
        });
    });
}



// lgica para ejecutar dependiendo de la pagina actual
document.addEventListener('DOMContentLoaded', function() {
    // verificar si estamos en el home
    if (document.getElementById('cardsContainer')) {
        // Llamar funcion para cargar cards
        cargarNotebooks().then(() => {
            renderizarNotebooks();
        })

    }
});


//FIN