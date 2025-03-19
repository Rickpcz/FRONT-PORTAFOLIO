<template>
    <nav class="navbar">
      <router-link to="/dashboard">
        <img src="../../assets/mygradfolio.png" alt="MyGradfolio Logo" class="logo" />
      </router-link>
      <div class="nav-links d-flex align-items-center gap-3">
        <router-link to="/profile/create">Portafolio</router-link>
        <div class="dropdown">
            <i class="fs-logo dropdown-toggle bx bx-user" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href=""><router-link to="/profile">Mi perfil</router-link></a></li>
            <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
          </ul>
        </div>
       
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }

  </script>
  
  <style scoped>
.navbar {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 120px;
}

.fs-logo {
  font-size: 30px;
}

.nav-links a {
  color: var(--color-text);
  margin-left: 20px;
}

.nav-links a:hover {
  color: var(--color-primary);
}

/* Estilo para el dropdown */
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%; /* Asegura que el menú se muestre debajo del botón */
  left: auto; /* Alinea el menú dinámicamente */
  right: 0; /* Alinea el menú al lado derecho */
  min-width: 150px; /* Ancho mínimo */
  background-color: var(--color-bg-offset); /* Fondo consistente con el tema */
  border: 1px solid var(--color-border); /* Borde consistente */
  border-radius: 5px; /* Bordes redondeados */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra para destacar */
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
  overflow: hidden; /* Evita que el contenido se desborde */
}

/* Ajusta la posición si el dropdown se sale del viewport */
.dropdown-menu[data-popper-placement^="bottom"] {
  transform: translateX(-10%);
}

.dropdown-menu a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 14px;
}

.dropdown-menu li:hover {
  background-color: var(--color-primary-offset); /* Fondo al pasar el mouse */
  color: var(--color-primary); /* Texto al pasar el mouse */
  cursor: pointer; /* Cambia el cursor para indicar interactividad */
  transition: background-color 0.3s ease, color 0.3s ease; /* Transición suave */
}

/* Asegura que el dropdown no se salga del viewport */
.dropdown-menu {
  max-height: 300px; /* Altura máxima */
  overflow-y: auto; /* Scroll si el contenido es demasiado largo */
  max-width: calc(100vw - 20px); /* Evita que se salga horizontalmente */
}

.dropdown-menu .dropdown-item {
  background-color: transparent; /* Fondo transparente por defecto */
  color: var(--color-text); /* Color de texto por defecto */
}

.dropdown-menu .dropdown-item:hover {
  background-color: var(--color-primary-offset); /* Fondo al pasar el mouse */
  color: #fff; /* Texto al pasar el mouse */
  cursor: pointer; /* Cambia el cursor para indicar interactividad */
}

.nav-links a{
  margin-left: 0 !important;
}
</style>