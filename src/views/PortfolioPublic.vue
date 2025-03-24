<template>
  <div>
    <!-- Componente de Cabecera y Hero -->
    <PortfolioHeader :usuario="usuario" :portafolio="portafolio"/>

    <!-- Sección de Más sobre mí -->
    <PortfolioAbout :usuario="usuario" :portafolio="portafolio"/>

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
      userData: null,
      contacto: {
        description: '',
        correo: '',
        telefono: '',
        linkedin: '',
        github: '',
        twitter: ''

      },
      usuario: {
        nombre: '',
        username: ''
      },
      portafolio: {
        imgUser: '',
        skills: '',
        puesto: ''
      },
      experiencias: [
        { description: '', period: '', company_name: '' } // Experiencia inicial
      ],
      proyectos: [
        { title: '', description: '', img: '' } // Proyecto inicial
      ],
      habilidadesSuaves: [
        { name: '' } // Habilidad inicial
      ],
      herramientas: [
        { name: '' } // Herramienta inicial
      ]
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
        const response = await axios.get(`${API_URL}/users/username/${this.username}`);
        this.userData = response.data;
        await this.loadUserData(this.userData.id);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    async loadUserData(id) {
      try {
        const { data } = await axios.get(`${API_URL}/users/alldata/${id}`);

        // Datos básicos usuario y portafolio
        this.usuario = {
          nombre: data.usuario.nombre || '',
          username: data.usuario.username || ''
        };

        this.idportafolio = data.usuario.portafolioId || '';

        this.portafolio = {
          imgUser: data.usuario.imgUser || '',
          skills: data.usuario.skills || '',
          puesto: data.usuario.archievements || ''
        };

        // Datos contacto
        this.contacto = {
          id: data.contacto.id || null,
          telefono: data.contacto.telefono || '',
          linkedin: data.contacto.linkedin || '',
          github: data.contacto.github || '',
          correo: data.contacto.correo || '',
          description: data.contacto.descripcion || '',
          twitter: data.contacto.twitter || ''
        };

        // Arrays múltiples
        this.proyectos = data.proyectos.length
          ? data.proyectos.map(p => ({
            id: p.id,
            title: p.title,
            description: p.description,
            imgproject: p.imgproject
          })) : [{ id: null, title: '', description: '', img: '' }];

        this.experiencias = data.experiencias.length
          ? data.experiencias.map(e => ({
            id: e.id,
            description: e.description,
            period: e.period,
            company_name: e.company_name
          })) : [{ id: null, description: '', period: '', company_name: '' }];

        this.habilidadesSuaves = data.habilidades.length
          ? data.habilidades.map(h => ({
            id: h.id,
            name: h.habilidad
          })) : [{ id: null, name: '' }];

        this.herramientas = data.herramientas.length
          ? data.herramientas.map(t => ({
            id: t.id,
            name: t.herramienta
          })) : [{ id: null, name: '' }];

      } catch (error) {
        console.error('Error al cargar:', error);
      }
    }
  }
};
</script>