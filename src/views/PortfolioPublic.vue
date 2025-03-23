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

import axios from 'axios';
export default {
  name: 'PortfolioPublic',
  components: {
    PortfolioHeader,
    PortfolioSkills,
    PortfolioProjects,
    PortfolioContact,
    PortfolioAbout,
    PortfolioFooter,
  }, data() {
    return {
      username: null,
      userData: null
    };
  },
  async mounted() {
    this.username = this.$route.params.username;
    if (this.username) {
      await this.fetchUserData();
    }
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await axios.get(`${API_URL}/users/${this.username}`);
        this.userData = response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  }
};
</script>