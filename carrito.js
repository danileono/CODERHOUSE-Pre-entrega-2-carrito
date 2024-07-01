document.addEventListener('DOMContentLoaded', function() {
    // obtencion del div del html donde se renderizaran los notebooks agregados
    const carritoContainer = document.getElementById('carrito');


    // obtencion notebooks del localStorage con array vacio
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


    // función para renderizar notebooks del carrito
    function renderizarCarrito() {
        carritoContainer.innerHTML = '';

        // verificar si el carrito esta vacio
        if (carrito.length === 0) {
            carritoContainer.innerHTML = '<p>El carrito está vacío :( </p>';
        } else {
            // renderizar cada card en carrito con forEach
            carrito.forEach(notebook => {
                if (notebook) {
                    const notebookHTML = `
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card h-100">
                                <img class="card-img-top" src="${notebook.img}" alt="${notebook.nombre}">
                                <div class="card-body">
                                    <h4 class="card-title">${notebook.nombre}</h4>
                                    <p class="card-text">Marca: ${notebook.marca}</p>
                                    <p class="card-text">Precio: ${notebook.precio.toLocaleString("es-CL", {style: "currency", currency: "CLP"})}</p>
                                    <!-- Aquí puedes añadir más detalles o funcionalidades -->
                                </div>
                            </div>
                        </div>
                    `;
                    carritoContainer.innerHTML += notebookHTML;
                }
            });
        }
    }

    // llamado función
    renderizarCarrito();


    // evento btn para vaciar el carrito
    const vaciarCarritoBtn = document.getElementById('vaciarCarrito');
    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', () => {
            // eliminar datos del localStorage y del array carrito
            localStorage.removeItem('carrito');
            carrito = [];
            // reiniciar el carrito vacío
            renderizarCarrito();
        });
    } 

});
