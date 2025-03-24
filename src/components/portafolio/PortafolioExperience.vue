<template>
  <section id="experience" class="portfolio-section py-16 bg-[var(--color-bg)]">
    <div class="container mx-auto px-4">
      <h2 class="section-title text-4xl font-bold mb-12 text-center text-[var(--color-text)]">
        <strong>Mi Experiencia</strong>
      </h2>

      <div class="featuredposts mb-8">
        <ul class="featuredposts__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li v-for="(experiencia, index) in experiencias" :key="index" class="featuredposts__item">
            <div
              class="featuredpost rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div class="featuredpost__inner p-6">
                <h3
                  class="featuredpost__title text-xl font-bold text-[var(--color-text)] hover:shadow-xl transition-shadow duration-300">
                  {{ experiencia.company_name }}
                </h3>
                <p class="text-[var(--color-text-offset)]">
                  {{ experiencia.period }}
                </p>
                <p
                  class="featuredpost__description text-[var(--color-text-offset)] mb-4 hover:shadow-xl transition-shadow duration-300">
                  {{ experiencia.description }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortafolioExperience',
  props: {
    experiencias: {
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
}

@media screen and (max-width: 768px) {
  .featuredposts__list {
    grid-template-columns: 1fr;
  }
}
</style>