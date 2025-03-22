<template>
  <section id="contact" class="portfolio-section py-16 bg-[var(--color-bg)]">
    <div class="container mx-auto px-4">
      <h2 class="section-title text-4xl font-bold mb-12 text-center text-[var(--color-text)]">
        <strong>¡Conversemos!</strong>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="flex flex-col items-center text-center">
          <h3 class="text-2xl font-bold mb-4 text-[var(--color-text)]"></h3>
          <p class="mb-6 text-[var(--color-text-offset)]">
            Estoy disponible para proyectos freelance, donde puedo aportar mis habilidades y experiencia en el
            desarrollo web, creando soluciones personalizadas y adaptadas a las necesidades específicas de cada cliente.
            También estoy abierto a posiciones a tiempo completo, en las que pueda seguir creciendo profesionalmente y
            colaborar en equipos dinámicos para desarrollar proyectos innovadores.
          </p>

          <div class="space-y-4 mb-8">
    <!-- Email -->
    <div class="flex items-center justify-center">
        <svg class="w-10 h-10 mr-2 text-[var(--color-primary)]" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
            </path>
        </svg>
        <div>
            <h4 class="text-sm font-bold text-[var(--color-text)]">Email</h4>
            <a href="mailto:ejemplo@dominio.com" class="text-[var(--color-text-offset)] hover:text-[var(--color-primary)]">ejemplo@dominio.com</a>
        </div>
    </div>

    <!-- Teléfono -->
    <div class="flex items-center justify-center">
        <svg class="w-10 h-10 mr-2 text-[var(--color-primary)]" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
            </path>
        </svg>
        <div>
            <h4 class="text-sm font-bold text-[var(--color-text)]">Teléfono</h4>
            <a href="tel:+52123456789" class="text-[var(--color-text-offset)] hover:text-[var(--color-primary)]">+52 123 456 7890</a>
        </div>
    </div>

    <!-- Ubicación -->
    <div class="flex items-center justify-center">
        <svg class="w-10 h-10 mr-2 text-[var(--color-primary)]" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <div>
            <h4 class="text-sm font-bold text-[var(--color-text)]">Ubicación</h4>
            <p class="text-[var(--color-text-offset)]">Ciudad de México, México</p>
        </div>
    </div>
</div>





        </div>


        <div>
          <form class="space-y-4 px-4">
            <div>
              <label for="name" class="block text-base font-medium text-[var(--color-text)] mb-1 strong">Nombre</label>
              <input type="text" id="name" placeholder="Tu nombre"
                class="w-full p-3 bg-[var(--color-bg-offset)] border border-transparent rounded-lg text-[var(--color-text)] focus:ring-[var(--color-primary)] focus:outline-none"
                required />
            </div>

            <div>
              <label for="email" class="block text-base font-medium text-[var(--color-text)] mb-1 strong">Email</label>
              <input type="email" id="email" placeholder="tucorreo@ejemplo.com"
                class="w-full p-3 bg-[var(--color-bg-offset)] border border-transparent rounded-lg text-[var(--color-text)] focus:ring-[var(--color-primary)] focus:outline-none"
                required />
            </div>

            <div>
              <label for="subject"
                class="block text-base font-medium text-[var(--color-text)] mb-1 strong">Asunto</label>
              <input type="text" id="subject" placeholder="Asunto de tu mensaje"
                class="w-full p-3 bg-[var(--color-bg-offset)] border border-transparent rounded-lg text-[var(--color-text)] focus:ring-[var(--color-primary)] focus:outline-none"
                required />
            </div>

            <div>
              <label for="message" class="block text-base font-medium text-[var(--color-text)] mb-1">Mensaje</label>
              <textarea id="message" rows="4" placeholder="Tu mensaje aquí..."
                class="w-full p-3 bg-[var(--color-bg-offset)] border border-transparent rounded-lg text-[var(--color-text)] focus:ring-[var(--color-primary)] focus:outline-none"
                required></textarea>
            </div>

            <button type="submit"
              class="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-offset)] text-white font-medium py-3 rounded-lg transition-colors">
              Enviar Mensaje
            </button>
          </form>


        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioContact'
};
</script>