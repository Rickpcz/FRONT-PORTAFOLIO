<template>
  <section id="skills" class="portfolio-section py-16 bg-[var(--color-bg-offset)] mb-12">
    <div class="container mx-auto px-6">
      <h2 class="section-title text-4xl font-bold mb-12 text-center text-[var(--color-text)]">
        <strong> Mis Habilidades</strong>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Columna derecha: Soft Skills y herramientas -->
        <div class="flex flex-col gap-5">
          <!-- Soft Skills -->
          <div class="bg-[var(--color-bg)] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h3 class="text-2xl font-bold mb-6 text-center text-[var(--color-text)] flex items-center justify-center">
              <svg class="w-10 h-10 mr-2 text-[var(--color-primary)]" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                </path>
              </svg>
              Habilidades Suaves
            </h3>

            <div class="grid grid-cols-2 gap-6">
              <div v-for="habilidad in habilidades" :key="habilidad.id"
                class="flex items-center p-4 rounded-lg bg-[var(--color-bg)] hover:bg-[var(--color-primary)] hover:text-white transition-all gap-2 justify-center">
                <div class="w-2 h-2 rounded-full bg-[var(--color-primary)] mr-2 "></div>
                <span class="text-[var(--color-text)]">{{ habilidad.name }}</span>
              </div>
              <!-- Agregar un div vacío al final para crear espacio -->
              <div class="w-full h-6"></div>
            </div>
          </div>

        </div>
        <!-- Herramientas -->
        <div class="bg-[var(--color-bg)] p-6 rounded-lg shadow-sm flex flex-col items-center justify-evenly">
            <h3 class="text-2xl font-bold mb-6 text-center text-[var(--color-text)] flex items-center justify-center">
              <svg class="w-10 h-10 mr-2 text-[var(--color-primary)]" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                </path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Herramientas
            </h3>

            <div class="flex flex-wrap gap-3 justify-center">
              <span v-for="herramienta in herramientas" :key="herramienta.id"
                class="px-4 py-2 rounded-full bg-[var(--color-bg-offset)] text-[var(--color-text-offset)] font-medium hover:bg-[var(--color-primary)] hover:text-white transition-colors cursor-default">
                {{ herramienta.name }}
              </span>
              <!-- Agregamos un elemento vacío al final para crear el espacio -->
              <div class="w-full h-6"></div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    habilidades: {
      type: Array,
      required: true
    },
    herramientas: {
      type: Array,
      required: true
    }
  },
  name: 'PortfolioSkills'
};
</script>

<style scoped>
.portfolio-section {
  padding-top: 2rem;
  padding-bottom: 3rem;
}

.container {
  margin-top: 0;
  margin-bottom: 0;
}

.grid {
  gap: 2rem;
}
</style>
