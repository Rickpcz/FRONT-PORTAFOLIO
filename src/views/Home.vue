<template>
    <div class="home">
      <!-- Logo -->
      <div class="logo-container">
        <img src="../assets/mygradfolio.png" alt="MyGradfolio Logo" class="logo" />
      </div>
  
      <!-- Introducción -->
      <div class="intro-container">
        <h1>Bienvenido a MyGradfolio</h1>
        <p>Crea tu portafolio personalizado y muestra tus proyectos, habilidades y experiencia</p>
      </div>
  
      <!-- Botón para registro -->
      <div class="cta-container">
        <router-link to="/login">
          <button>Crea tu portafolio</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  // No es necesario agregar lógica aquí por ahora.
  </script>
  
  <style scoped>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--color-bg);
    text-align: center;
  }
  
  .logo-container {
    margin-bottom: 40px;
  }
  
  .logo {
    max-width: 200px; /* Ajusta según el tamaño de tu logo */
  }
  
  .intro-container {
    margin-bottom: 40px;
  }
  
  h1 {
    font-size: 60px;
    color: var(--color-primary);
  }
  
  p {
    font-size: 18px;
    color: var(--color-text-offset);
  }
  
  .cta-container {
    margin-top: 20px;
  }
  
  button {
    background-color: var(--color-primary);
    color: var(--color-text);
    border: none;
    padding: 15px 30px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: var(--color-primary-offset);
  }
  </style>
  