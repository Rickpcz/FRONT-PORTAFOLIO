<template>
    <nav class="navbar">
      <router-link to="/">MyGradfolio</router-link>
      <div class="nav-links">
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
    </nav>
  </template>
  
  <script setup>
  // Lógica para Navbar si es necesario.
  </script>
  
  <style scoped>
  .navbar {
    background-color: var(--color-bg-offset);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links a {
    color: var(--color-text);
    margin-left: 20px;
  }
  
  .nav-links a:hover {
    color: var(--color-primary);
  }
  </style>
  