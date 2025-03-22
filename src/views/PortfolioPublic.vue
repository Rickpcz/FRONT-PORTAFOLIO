<template>
  <div>
    <!-- Componente de Cabecera y Hero -->
    <PortfolioHeader />

    <!-- Sección de Más sobre mí -->
    <PortfolioAbout />

    <!-- Sección de Proyectos -->
    <PortfolioProjects />

    <!-- Sección de Habilidades -->
    <PortfolioSkills />


    <!-- Sección de Contacto -->
    <PortfolioContact />

    <!-- Footer -->
    <PortfolioFooter />
  </div>
</template>

<script>
// Importar los componentes necesarios
import PortfolioHeader from '../components/portafolio/PortfolioHeader.vue';
import PortfolioSkills from '../components/portafolio/PortfolioSkills.vue';
import PortfolioProjects from '../components/portafolio/PortfolioProjects.vue';
import PortfolioContact from '../components/portafolio/PortfolioContact.vue';
import PortfolioAbout from '../components/portafolio/PortfolioAbout.vue';
import PortfolioFooter from '../components/portafolio/PortfolioFooter.vue';

export default {
  name: 'PortfolioPublic',
  components: {
    PortfolioHeader,
    PortfolioSkills,
    PortfolioProjects,
    PortfolioContact,
    PortfolioAbout,
    PortfolioFooter,
  }
};
</script>