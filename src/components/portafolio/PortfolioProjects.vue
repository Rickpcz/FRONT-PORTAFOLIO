<template>
  <section id="projects" class="portfolio-section py-16 bg-[var(--color-bg)]">
    <div class="container mx-auto px-4">
      <h2 class="section-title text-4xl font-bold mb-12 text-center text-[var(--color-text)]">
        <strong>Mis Proyectos</strong>
      </h2>

      <div class="featuredposts mb-8">
        <ul class="featuredposts__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li v-for="(project, index) in proyectos" :key="project.id" class="featuredposts__item">
            <div
              class="featuredpost rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div class="relative aspect-square overflow-hidden rounded-lg">
                <img :src="project.imgproject || 'https://via.placeholder.com/500'" :alt="project.title"
                  class="featuredpost__image object-cover w-full h-full transform hover:scale-105 transition-transform duration-500" />
              </div>

              <div class="featuredpost__inner p-6">
                <a :href="project.link || '#'" class="featuredpost__link block mb-3">
                  <span
                    class="featuredpost__title text-xl font-bold text-[var(--color-text)] hover:shadow-xl transition-shadow duration-300">
                    {{ project.title }}
                  </span>
                </a>

                <p
                  class="featuredpost__description text-[var(--color-text-offset)] mb-4 hover:shadow-xl transition-shadow duration-300">
                  {{ project.description }}
                </p>
              </div>
            </div>
          </li>
        </ul>

        <!-- <p class="featuredposts__footer text-center mt-8">
          <a href="#"
            class="inline-flex items-center justify-center text-[var(--color-primary)] hover:underline hover:text-[var(--color-primary-offset)] text-2xl">
            Ver todos los proyectos
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </p> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioProjects',
  props: {
    proyectos: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.portfolio-section {
  margin-top: 0;
  padding-top: 0rem;
}

.featuredpost__inner {
  background-color: transparent;
  border-radius: 1rem;
  padding: 2rem;
  /* Aumenta el espacio dentro de la tarjeta */
  transition: background-color 0.3s ease;
}

.featuredpost__inner:hover {
  background-color: transparent;
}

.featuredpost__image {
  transition: transform 0.3s ease-in-out;
}

.featuredpost__footer {
  margin-top: 2rem;
}

.tech-tags span {
  background-color: var(--color-bg-offset);
  border-radius: 0.375rem;
}

.featuredposts__footer a:hover {
  color: var(--color-primary-offset);
  text-decoration: underline;
}

.featuredpost__title,
.featuredpost__description {
  transition: box-shadow 0.3s ease-in-out;
}

.featuredpost__title:hover,
.featuredpost__description:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  /* Más sombra */
}

@media screen and (max-width: 768px) {
  .featuredposts__list {
    grid-template-columns: 1fr;
  }
}
</style>
