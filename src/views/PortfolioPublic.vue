<template>
  <div v-if="portafolioVacio" class="flex flex-col items-center justify-center h-screen p-4 rounded text-center">
    <p class="text-4xl font-bold text-[var(--color-text)] mt-4">Sin datos en el portafolio</p>
    <p class="text-[var(--color-text-offset)] mt-2">Favor de crearlo para visualizar su contenido.</p>
    <router-link to="/create"
      class="mt-6 w-full max-w-[200px] py-3 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-opacity-80 transition">
      <strong>Volver al formulario</strong>
    </router-link>
  </div>
  <div v-else>
    <!-- Componente de Cabecera y Hero -->
    <PortfolioHeader :usuario="usuario" :portafolio="portafolio" />

    <!-- Sección de Más sobre mí -->
    <PortfolioAbout :usuario="usuario" :portafolio="portafolio" />

    <div v-if=" proyectosvacios && experienciasvacios && habilidadesvacios && herramientasvacios && contactovacios" class="flex flex-col items-center justify-center p-4 rounded text-center">
      <p class="text-4xl font-bold text-[var(--color-text)] mt-4">Datos incompletos</p>
      <p class="text-[var(--color-text-offset)] mt-2">Favor de agrgarlos para visualizar su contenido.</p>
      <router-link to="/create"
        class="mt-6 w-full max-w-[200px] py-3 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-opacity-80 transition">
        <strong>Volver al formulario</strong>
      </router-link>
    </div>

    <!-- Sección de Proyectos -->
    <PortfolioProjects v-if="!proyectosvacios" :proyectos="proyectos" />

    <!-- Sección de Habilidades -->
    <PortfolioSkills v-if="!habilidadesvacios" :habilidades="habilidadesSuaves" :herramientas="herramientas" />

    <PortafolioExperience v-if="!experienciasvacios" :experiencias="experiencias" />
    <!-- Sección de Contacto -->
    <PortfolioContact v-if="!contactovacios" :contacto="contacto" :usuario="usuario" />

    <!-- Footer -->
    <PortfolioFooter v-if="!contactovacios" :contacto="contacto" :usuario="usuario" />
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
import PortafolioExperience from '../components/portafolio/PortafolioExperience.vue';
import '../assets/styles.css'

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
    PortafolioExperience
  }, data() {
    return {
      username: null,
      userData: null,
      portafolioVacio: false,


      proyectosvacios: false,
      experienciasvacios: false,
      habilidadesvacios: false,
      herramientasvacios: false,
      contactovacios: false,

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
        const sinDatos = !data.usuario.portafolioId &&
          !data.usuario.imgUser &&
          !data.usuario.skills &&
          !data.usuario.archievements &&
          data.proyectos.length === 0 &&
          data.experiencias.length === 0 &&
          data.habilidades.length === 0 &&
          data.herramientas.length === 0 &&
          Object.keys(data.contacto).length === 0;

        this.portafolioVacio = sinDatos;

        const sinDatosProyectos = data.proyectos.length === 0 || data.proyectos.every(p => !p.title && !p.description && !p.imgproject);
        const sinDatosExperiencias = data.experiencias.length === 0 || data.experiencias.every(e => !e.description && !e.period && !e.company_name);
        const sinDatosHabilidades = data.habilidades.length === 0 || data.habilidades.every(h => !h.habilidad);
        const sinDatosHerramientas = data.herramientas.length === 0 || data.herramientas.every(t => !t.herramienta);
        const sinDatosContacto = !data.contacto.telefono && !data.contacto.linkedin && !data.contacto.github && !data.contacto.correo && !data.contacto.descripcion && !data.contacto.twitter;

        this.proyectosvacios = sinDatosProyectos;
        this.experienciasvacios = sinDatosExperiencias;
        this.habilidadesvacios = sinDatosHabilidades;
        this.herramientasvacios = sinDatosHerramientas;
        this.contactovacios = sinDatosContacto;

        console.log('Datos:', this.portafolioVacio, this.proyectosvacios, this.experienciasvacios, this.habilidadesvacios, this.herramientasvacios, this.contactovacios);

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