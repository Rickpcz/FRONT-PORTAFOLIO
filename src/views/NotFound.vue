<template>
    <div class="flex flex-col items-center justify-center h-screen text-center">
      <div class="animate-bounce">
        <svg class="w-32 h-32 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3a9 9 0 11-9 9 9 9 0 019-9z"></path>
        </svg>
      </div>
      <h1 class="text-4xl font-bold text-[var(--color-text)] mt-4"><strong>Página no encontrada</strong></h1>
      <p class="text-[var(--color-text-offset)] mt-2">Lo sentimos, la página que buscas no existe.</p>
      <router-link to="/dashboard" class="mt-6 w-full max-w-[200px] py-3 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-opacity-80 transition">
        <strong> Volver al inicio</strong> 
      </router-link>
    </div>
  </template>
  