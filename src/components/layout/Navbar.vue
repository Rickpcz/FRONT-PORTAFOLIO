<template>
    <nav class="navbar">
      <router-link to="/dashboard">
        <img src="../../assets/mygradfolio.png" alt="MyGradfolio Logo" class="logo" />
      </router-link>
      <div class="nav-links">
        <router-link to="/login"></router-link>
        <router-link to="/register">Register</router-link>
      </div>
    </nav>
  </template>
  
  <script setup>
  // Lógica para Navbar si es necesario.
  </script>
  
  <style scoped>
  .navbar {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo{
    width: 120px;
  }
  
  .nav-links a {
    color: var(--color-text);
    margin-left: 20px;
  }
  
  .nav-links a:hover {
    color: var(--color-primary);
  }
  </style>
  