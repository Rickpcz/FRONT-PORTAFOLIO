<template>
    <nav class="navbar">
      <router-link to="/dashboard">
        <img src="../../assets/mygradfolio.png" alt="MyGradfolio Logo" class="logo" />
      </router-link>
      <div class="nav-links d-flex align-items-center gap-3">
        <router-link to="/create">Portafolio</router-link>
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

.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: auto;
  right: 0;
  min-width: 150px;
  background-color: var(--color-bg-offset);
  border: 1px solid var(--color-border);
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden; 
}

.dropdown-menu[data-popper-placement^="bottom"] {
  transform: translateX(-10%);
}

.dropdown-menu a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 14px;
}

.dropdown-menu li:hover {
  background-color: var(--color-primary-offset);
  color: var(--color-primary);
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dropdown-menu {
  max-height: 300px;
  overflow-y: auto;
  max-width: calc(100vw - 20px);
}

.dropdown-menu .dropdown-item {
  background-color: transparent;
  color: var(--color-text);
}

.dropdown-menu .dropdown-item:hover {
  background-color: var(--color-primary-offset);
  color: #fff;
  cursor: pointer;
}

.nav-links a{
  margin-left: 0 !important;
}
</style>