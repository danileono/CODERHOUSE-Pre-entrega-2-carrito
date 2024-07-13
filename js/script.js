    // se cargan notebooks desde el JSON con fetch
    fetch("./db/notebooks.json")
    .then(response => {
        if (response.ok) {
        return response.json();
        } else {
        throw new Error('Error al cargar el archivo json');
        }
    })
    .then(data => {
        notebooks = data; // Asignar datos a la variable global notebooks
        renderizarNotebooks();
    })
    .catch(error => {
        console.error('Error:', error);
    });



    // funcion para renderizar cards en cardsContainer
    function renderizarNotebooks() {
    let cardsContainer = document.getElementById('cardsContainer');

    notebooks.forEach(notebook => {
        let card = document.createElement('div');
        card.classList.add('col-lg-3', 'col-md-6', 'text-center', 'mb-3');
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
        cardsContainer.appendChild(card);
    });

    // Llamar función para agregar notebooks al carrito después de renderizar
    AgregarAlCarrito();
    }

    // Se agrega los notebooks al carrito OK
    function AgregarAlCarrito() {
    const agregarBtns = document.querySelectorAll(".btnAgregar");

    agregarBtns.forEach(button => {
        button.addEventListener('click', (e) => {
        const notebookId = e.currentTarget.getAttribute('data-id');
        const selectedNotebook = notebooks.find(notebook => notebook.id == notebookId);



        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // agregar el notebook al carrito
        carrito.push(selectedNotebook);

        // guardar el carrito actualizado en el localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));


        alert('El notebook se ha añadido al carrito');
        });
    });
    }


