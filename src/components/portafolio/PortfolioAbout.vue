<template>
  <section id="about" class="portfolio-section pt-16 pb-16 bg-[var(--color-bg-offset)] mt-0">
    <div class="container mx-auto px-4">

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-center md:text-left">
        <div class="md:col-span-4 flex justify-center">
          <div class="relative">
            <img :src="portafolio.imgUser" alt="Profile"
              class="w-64 h-64 rounded-full object-cover border-4 border-[var(--color-primary)] shadow-lg" />
            <!-- <div
              class="absolute -bottom-4 -right-4 bg-[var(--color-bg)] border-4 border-[var(--color-primary)] rounded-full p-3 shadow-lg text-center">
              <span class="font-bold text-[var(--color-primary)] text-xl">3+</span>
              <span class="text-xs block text-[var(--color-text-offset)]">Años de experiencia</span>
            </div> -->
          </div>
        </div>

        <div class="md:col-span-8">
          <h3 class="text-2xl font-bold mb-4 text-[var(--color-text)]">
            <strong>{{ portafolio.puesto }}</strong>
          </h3>

          <p class="mb-6 text-[var(--color-text-offset)]">
            {{ portafolio.skills }}
          </p>


          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            <!-- <div v-for="skill in skills" :key="skill.name"
              class="skill-item p-4 rounded-lg bg-[var(--color-bg)] hover:border-[var(--color-primary)] transition-colors">
              <div class="flex items-center justify-center md:justify-start gap-2">
                <div class="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                <span class="text-[var(--color-text)]">{{ skill.name }}</span>
              </div>
              <div class="mt-2 bg-[var(--color-bg-offset)] rounded-full h-2">
                <div class="bg-[var(--color-secondary)] h-2.5 rounded-full transition-all duration-500"
                  :style="{ width: `${skill.level}%` }"></div>
              </div>
            </div> -->
          </div>
          <div class="flex flex-wrap justify-center gap-4 mb-6">
            <!-- Botón "Contáctame" -->
            <div class="flex justify-center mb-6 items-center">
              <a href="#contact" class="bg-[var(--color-primary)] text-white 
    font-bold px-8 py-4 rounded-xl shadow-md 
    transition-all duration-300 ease-in-out 
    hover:bg-[var(--color-primary-offset)] 
    hover:shadow-lg hover:-translate-y-1
    w-48 h-16 flex items-center justify-center text-lg border-4 border-[var(--color-primary)]">
                Contáctame
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioAbout',
  props: {
    usuario: {
      type: Object,
      required: true
    },
    portafolio: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // skills: [
      //   { name: 'HTML/CSS', level: 95 },
      //   { name: 'JavaScript', level: 90 },
      //   { name: 'Vue.js', level: 92 },
      //   { name: 'Tailwind CSS', level: 88 },
      //   { name: 'Node.js', level: 75 },
      //   { name: 'Git', level: 85 }
      // ]
    }
  }
}
</script>

<style scoped>
.portfolio-section {
  margin-top: 0;
  padding-top: 0rem;
  /* Ajusta este valor según la altura de tu header */
}

/* Espaciado entre el punto y el nombre de la habilidad */
.skill-item .flex.items-center.gap-2 {
  gap: 0.5rem;
  /* Ajusta este valor para cambiar el espaciado */
}

/* Espaciado adicional al final del componente */
.mb-10 {
  margin-bottom: 2.5rem;
  /* Ajusta este valor para cambiar el espaciado */
}

/* Espaciado adicional al final del componente */
.mb-6 {
  margin-bottom: 1.5rem;
  /* Ajusta este valor para cambiar el espaciado */
}
</style>