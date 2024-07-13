//traer header solo le puse clases desde aqui
let header = document.getElementById("header")
header.classList.add('d-flex', 'bg-primary', 'justify-content-center', 'align-items-center')


//////////////////////////// creacion logo ////////////////////////////

//cargar logo en header
let logo = document.getElementById("logo-header")
logo.classList.add('w-25')
let img = document.createElement('img');
img.src = './imgs/logo-lapstore.svg';
img.classList.add('img-fluid', 'w-100');
logo.classList.add('p-3');

logo.appendChild(img);



//////////////////////////// creacion input search ////////////////////////////

// se crean los elementos del input y el boton buscar
let input = document.createElement('input');
input.classList.add('form-control', 'me-2');
input.setAttribute('type', 'search');
input.setAttribute('placeholder', 'Buscar');
input.setAttribute('aria-label', 'Buscar');

let button = document.createElement('button');
button.classList.add('btn', 'btn-outline-light', 'bg-secondary');
button.setAttribute('type', 'submit');
button.textContent = 'Buscar';

// Obtener el formulario donde se insertará el input y el botón
let form = document.getElementById('searchBar');

// Agregar el input y el botón al formulario
form.appendChild(input);
form.appendChild(button);





//////////////////////////// creacion del navBar ////////////////////////////

let nav = document.createElement('nav');
nav.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-primary');

let containerFluid = document.createElement('div');
containerFluid.classList.add('container-fluid');

// boton de hamburguesa toggle para responsive
let navbarToggler = document.createElement('button');
navbarToggler.classList.add('navbar-toggler');
navbarToggler.type = 'button';
navbarToggler.setAttribute('data-bs-toggle', 'collapse'); 
navbarToggler.setAttribute('data-bs-target', '#navbarNav'); 
navbarToggler.setAttribute('aria-controls', 'navbarNav');
navbarToggler.setAttribute('aria-expanded', 'false');
navbarToggler.setAttribute('aria-label', 'Toggle navigation');

let navbarTogglerIcon = document.createElement('span');
navbarTogglerIcon.classList.add('navbar-toggler-icon');
navbarToggler.appendChild(navbarTogglerIcon);

// div para contener los elementos colapsables
let navbarCollapse = document.createElement('div');
navbarCollapse.classList.add('collapse', 'navbar-collapse');
navbarCollapse.setAttribute('id', 'navbarNav');

let ul = document.createElement('ul');
ul.classList.add('navbar-nav');

// creacion elementos de los items del navbar (Home y Carrito)
// btn home
let homeNavItem = document.createElement('li');
homeNavItem.classList.add('nav-item', 'align-content-center');

let homeLink = document.createElement('a');
homeLink.classList.add('nav-link');
homeLink.href = 'index.html';
homeLink.textContent = 'Home';


// se crea y configura la imagen del icono del home
let imgHome = document.createElement('img');
imgHome.src = './imgs/home.svg';
imgHome.classList.add('carrito-icon','p-1');

// se inserta la imagen al lado del texto "Home"
homeLink.insertBefore(imgHome, homeLink.firstChild);


homeNavItem.appendChild(homeLink);
ul.appendChild(homeNavItem);

// btn carrito
let carritoNavItem = document.createElement('li');
carritoNavItem.classList.add('nav-item');

let carritoLink = document.createElement('a');
carritoLink.classList.add('nav-link');
carritoLink.href = 'carrito.html';
carritoLink.textContent = 'Carrito';

// se crea y configura la imagen del icono del carrito
let imgCarrito = document.createElement('img');
imgCarrito.src = './imgs/carrito.svg';
imgCarrito.classList.add('carrito-icon', 'p-1');

// se inserta la imagen al lado del texto "Carrito"
carritoLink.insertBefore(imgCarrito, carritoLink.firstChild);

// se agrega el enlace al btn carrito
carritoNavItem.appendChild(carritoLink);

// se agrega el btn carrito al navbar
ul.appendChild(carritoNavItem);

// estructurar el navbar
navbarCollapse.appendChild(ul);
containerFluid.appendChild(navbarToggler); 
containerFluid.appendChild(navbarCollapse);
nav.appendChild(containerFluid);

// se trae el id del contenedor donde se va a insertar el navbar en el dom
let navbarContainer = document.getElementById('navbar-container');

// se inserta el navbar en el contenedor especificado
navbarContainer.appendChild(nav);

