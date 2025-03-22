<template>
  <section id="projects" class="portfolio-section py-16 bg-[var(--color-bg)]">
    <div class="container mx-auto px-4">
      <h2 class="section-title text-4xl font-bold mb-12 text-center text-[var(--color-text)]">
  <strong>Mis Proyectos</strong>
</h2>


      <div class="featuredposts mb-8">
        <ul class="featuredposts__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li v-for="(project, index) in featuredProjects" :key="index" class="featuredposts__item">
            <div 
              class="featuredpost rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div class="relative aspect-square overflow-hidden rounded-lg">
                <img 
                  :src="project.image" 
                  :alt="project.title" 
                  class="featuredpost__image object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div class="featuredpost__inner p-6">
                <a :href="project.link" class="featuredpost__link block mb-3">
                  <span class="featuredpost__title text-xl font-bold text-[var(--color-text)] hover:shadow-xl transition-shadow duration-300">
                    {{ project.title }}
                  </span>
                </a>
                
                <p class="featuredpost__description text-[var(--color-text-offset)] mb-4 hover:shadow-xl transition-shadow duration-300">
                  {{ project.description }}
                </p>
                
                <div class="flex justify-between items-center mt-4">
                  <span class="featuredpost__likecount flex items-center text-[var(--color-text-offset)]">
                    <svg class="icon icon--heart w-5 h-5 text-[var(--color-primary)] mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    {{ project.likes }}
                  </span>
                  
                  <div class="tech-tags flex flex-wrap gap-2">
                    <span 
                      v-for="tech in project.technologies" 
                      :key="tech"
                      class="text-xs py-1 px-2 rounded-full bg-[var(--color-bg-offset)] text-[var(--color-text-offset)]"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <p class="featuredposts__footer text-center mt-8">
  <a href="#" class="inline-flex items-center justify-center text-[var(--color-primary)] hover:underline hover:text-[var(--color-primary-offset)] text-2xl">
    Ver todos los proyectos 
    <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  </a>
</p>


      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioProjects',
  data() {
    return {
      featuredProjects: [
        {
          title: 'Proyecto 1',
          description: 'Una aplicación web desarrollada con Vue.js que permite a los usuarios gestionar sus tareas diarias de forma eficiente y organizada.',
          image: 'https://picsum.photos/500/500?random=1',
          link: '#',
          likes: 125,
          technologies: ['Vue.js', 'Tailwind', 'Firebase']
        },
        {
          title: 'Proyecto 2',
          description: 'Plataforma de comercio electrónico con carrito de compras, pagos en línea y gestión de inventario en tiempo real.',
          image: 'https://picsum.photos/500/500?random=2',
          link: '#',
          likes: 87,
          technologies: ['Vue.js', 'Node.js', 'MongoDB']
        },
        {
          title: 'Proyecto 3',
          description: 'Dashboard interactivo para visualización de datos con gráficos personalizables y reportes exportables.',
          image: 'https://picsum.photos/500/500?random=3',
          link: '#',
          likes: 64,
          technologies: ['Vue.js', 'D3.js', 'Express']
        },
        {
          title: 'Proyecto 4',
          description: 'Aplicación móvil híbrida para rastreo de actividad física y hábitos saludables con sincronización en la nube.',
          image: 'https://picsum.photos/500/500?random=4',
          link: '#',
          likes: 103,
          technologies: ['Vue.js', 'Ionic', 'Firebase']
        },
        {
          title: 'Proyecto 5',
          description: 'Sistema de gestión de contenido personalizado para blogs y portafolios con editor WYSIWYG.',
          image: 'https://picsum.photos/500/500?random=5',
          link: '#',
          likes: 95,
          technologies: ['Vue.js', 'GraphQL', 'PostgreSQL']
        },
        {
          title: 'Proyecto 6',
          description: 'API RESTful para una aplicación de reservas en línea con autenticación JWT y roles de usuario.',
          image: 'https://picsum.photos/500/500?random=6',
          link: '#',
          likes: 72,
          technologies: ['Node.js', 'Express', 'MongoDB']
        },
      ]
    };
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
  padding: 2rem; /* Aumenta el espacio dentro de la tarjeta */
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
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Más sombra */
}

@media screen and (max-width: 768px) {
  .featuredposts__list {
    grid-template-columns: 1fr;
  }
}
</style>
