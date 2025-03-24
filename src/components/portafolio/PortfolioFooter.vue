<template>
  <footer class="footer bg-[var(--color-bg)] text-[var(--color-text-offset)] py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <!-- Información del autor -->
        <div class="footer__item">
          <p class="font-bold text-[var(--color-text)] mb-2">© 2023-2024</p>
          <a href="/" class="hover:text-[var(--color-primary)]">{{ usuario.nombre }}</a>
        </div>

        <!-- Trabajo -->
        <div class="footer__item">
          <p class="font-bold text-[var(--color-text)] mb-2">Trabajo</p>
          <a href="#projects" class="hover:text-[var(--color-primary)]">Ver Proyectos</a>
        </div>

        <!-- Redes sociales -->
        <div class="footer__item">
          <p class="font-bold text-[var(--color-text)] mb-2">Social</p>
          <div class="flex flex-wrap gap-2">
            <a :href="contacto.github" class="hover:text-[var(--color-primary)]" rel="me" title="Github" target="_blank">
              Github
            </a>
            <a :href="contacto.linkedin" class="hover:text-[var(--color-primary)]" rel="me" title="LinkedIn" target="_blank">
              LinkedIn
            </a>
            <a :href="contacto.twitter" class="hover:text-[var(--color-primary)]" rel="me" title="Twitter" target="_blank">
              Twitter
            </a>
          </div>
        </div>

        <!-- Legal -->
        <div class="footer__item">
          <p class="font-bold text-[var(--color-text)] mb-2">Legal</p>
          <a href="/privacy" class="hover:text-[var(--color-primary)]">Política de Privacidad</a>
        </div>

        <!-- Enlaces útiles -->
        <div class="footer__item">
          <p class="font-bold text-[var(--color-text)] mb-2">Enlaces</p>
          <a href="/recursos" class="hover:text-[var(--color-primary)]">Recursos</a>
        </div>
      </div>

      <!-- Métricas y botones de footer -->
      <div
        class="border-t border-[var(--color-border)] mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <!-- Métricas de rendimiento (opcional) -->
        <div class="footer__metrics mb-4 md:mb-0">
          <!-- Aquí se podrían agregar métricas si es necesario -->
        </div>

        <!-- Botones de footer -->
        <div class="flex flex-wrap justify-center items-center space-x-4 gap-2">
          <!-- Botón de GitHub -->
          <a :href="contacto.github" class="footer__icon text-[var(--color-text-offset)] hover:text-[var(--color-primary)]"
            title="Ver código en Github" target="_blank">
            <span class="sr-only">Ver código en Github</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd" />
            </svg>
          </a>

          <!-- Botón de Twitter -->
          <a :href="contacto.twitter" class="footer__icon text-[var(--color-text-offset)] hover:text-[var(--color-primary)]"
            title="Twitter" target="_blank">
            <span class="sr-only">Twitter</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.46 6.003c-.774.345-1.604.576-2.484.679.892-.533 1.576-1.378 1.898-2.382-.834.493-1.754.85-2.728 1.043-.785-.836-1.9-1.358-3.14-1.358-2.376 0-4.295 1.919-4.295 4.295 0 .336.037.664.106.978-3.568-.18-6.73-1.887-8.843-4.48-.37.634-.58 1.372-.58 2.16 0 1.492.759 2.804 1.91 3.57-.708-.023-1.375-.217-1.96-.542v.055c0 2.084 1.48 3.82 3.446 4.22-.358.097-.735.148-1.118.148-.274 0-.544-.027-.806-.078.545 1.698 2.13 2.93 3.998 2.96-1.46 1.145-3.31 1.83-5.266 1.83-.342 0-.679-.02-1.014-.06 1.88 1.2 4.13 1.9 6.53 1.9 7.876 0 12.2-6.525 12.2-12.2 0-.186-.004-.372-.014-.557.84-.605 1.57-1.356 2.15-2.211z" />
            </svg>
          </a>

          <!-- Botón para subir -->
          <a href="#top" class="footer__icon text-[var(--color-text-offset)] hover:text-[var(--color-primary)]"
            title="Volver arriba">
            <span class="sr-only">Volver arriba</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      <!-- Créditos (opcional) -->
      <div class="text-center mt-6 text-sm">
        <p>Diseñado y desarrollado con <span class="text-[var(--color-primary)]">♥</span> usando Vue.js y Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PortfolioFooter',
  props: {
    contacto: {
      type: Object,
      required: true
    },
    usuario: {
      type: Object,
      required: true
    },
  },
};
</script>

<style scoped>
/* Clase 'sr-only' para elementos que solo deben ser visibles para lectores de pantalla */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
