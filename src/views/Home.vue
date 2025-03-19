<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Portafolio de [Tu Nombre] | Desarrollador Web y Diseñador UX/UI',
  meta: [
    {
      name: 'description',
      content: 'Descubre mi portafolio donde presento mis proyectos como Desarrollador Web y Diseñador UX/UI.',
    },
    {
      name: 'keywords',
      content: 'portafolio profesional, desarrollo web, diseño UX/UI, [Tu Nombre]',
    },
    {
      property: 'og:title',
      content: 'Portafolio de [Tu Nombre] | Desarrollador Web y Diseñador UX/UI',
    },
    {
      property: 'og:description',
      content: 'Descubre mi portafolio donde presento mis proyectos como Desarrollador Web y Diseñador UX/UI.',
    },
    {
      property: 'og:image',
      content: '/path/to/your/og-image.jpg',
    },
  ]
})
</script>

<template>
    <div class="home">
      <div class="logo-container">
        <img src="../assets/mygradfolio.png" alt="MyGradfolio Logo" class="logo" />
      </div>
  
      <div class="intro-container">
        <h1>Bienvenido a MyGradfolio</h1>
        <p>Crea tu portafolio personalizado y muestra tus proyectos, habilidades y experiencia</p>
      </div>
  
      <div class="cta-container">
        <router-link to="/login">
          <button>Crea tu portafolio</button>
        </router-link>
      </div>
    </div>
  </template>
  
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
    max-width: 200px;
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
  