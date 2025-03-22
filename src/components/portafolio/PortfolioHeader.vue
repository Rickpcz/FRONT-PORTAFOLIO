<template>
  <header class="header sticky top-0 z-50 w-full bg-[var(--color-bg)] border-b border-[var(--color-border)]">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo y nombre -->
        <div class="flex items-center flex-wrap gap-3">
          <a href="/" class="flex items-center space-x-3 no-underline">
            <div class="flex items-center gap-2">
              <img src="../../assets/profile.jpg" alt="Tu foto de perfil"
                class="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-primary)]" />
              <span class="text-xl font-bold text-[var(--color-text)]">
                Tu Nombre
                <!-- Ícono de verificación -->
                <span class="inline-flex ml-2">
                  <svg class="w-5 h-5 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7l-4.5-4.5 1.4-1.4 3.1 3.1 6.1-6.1 1.4 1.4-7.5 7.5z" />
                  </svg>
                </span>
              </span>
            </div>
          </a>
        </div>

        <!-- Navegación principal (solo en escritorio) -->
        <nav class="hidden md:flex items-center gap-2">
          <a v-for="(item, index) in navItems" :key="index" :href="item.url"
            class="group relative flex flex-col items-center"
            :class="item.active ? 'text-[var(--color-text)]' : 'text-[var(--color-text-offset)]'">
            <div class="flex items-center gap-2">
              <span :class="item.active ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-offset)]', 'font-semibold'">{{ formatNavNumber(index + 1) }}</span>
              <span class="group-hover:text-[var(--color-text)] transition-colors duration-200">{{ item.label }}</span>
            </div>
            <!-- Indicador de activo -->
            <span
              class="absolute -bottom-4 left-0 w-full h-1 bg-[var(--color-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
              :class="item.active ? 'scale-x-100' : ''"></span>
          </a>
        </nav>

        <!-- Logo en escritorio / oculto en móviles -->
        <img src="../../assets/mygradfolio.png" alt="Logo" class="w-20 h-10 max-w-full hidden md:block" />

        <!-- Botón de menú en móviles / oculto en escritorio -->
        <button @click="toggleNav"
          class="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-[var(--color-bg-offset)] text-[var(--color-text-offset)] hover:text-[var(--color-text)] transition-colors">
          <i class="fas fa-bars"></i>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="isNavOpen
              ? 'M6 18L18 6M6 6l12 12'
              : 'M4 6h16M4 12h16M4 18h16'"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Menú móvil expandible -->
    <transition name="fade">
      <div v-if="isNavOpen" class="md:hidden bg-[var(--color-bg-offset)] border-y border-[var(--color-border)]">
        <div class="container mx-auto px-6 py-4">
          <nav class="flex flex-col space-y-4">
            <a v-for="(item, index) in navItems" :key="index" :href="item.url"
              class="flex items-center py-2 px-4 rounded-lg hover:bg-[var(--color-bg)] transition-colors"
              :class="item.active ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-offset)]'" @click="closeNav">
              <span class="text-[var(--color-primary)] font-semibold mr-3">{{ formatNavNumber(index + 1) }}</span>
              <span>{{ item.label }}</span>
            </a>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'PortfolioHeader',
  data() {
    return {
      isNavOpen: false,
      navItems: [
        { label: 'Inicio', url: '#about', active: true },
        { label: 'Proyectos', url: '#projects', active: false },
        { label: 'Habilidades', url: '#skills', active: false },
        { label: 'Contacto', url: '#contact', active: false }
      ]
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
    },
    formatNavNumber(num) {
      return num < 10 ? `0${num}` : num;
    }
  }
};
</script>

<style scoped>
/* Asegura que el header no tenga margen extra */
.header {
  margin-bottom: 0;
  padding-bottom: 0;
}

/* Animación para el menú móvil */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Transición suave para los enlaces */
a {
  transition: all 0.2s ease;
}
</style>