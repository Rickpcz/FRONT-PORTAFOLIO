<template>
    <div class="page-container">
        <Navbar />
        <div class="content">
            <div class="container">
                
                <!-- Filtro por Área -->
                <div class="filter-container d-flex justify-content-between">
                    <label for="area"></label>
                    <select v-model="selectedArea" @change="filterPortfolios" class="custom-select">
                        <option value="">Todas</option>
                        <option v-for="area in areas" :key="area.id" :value="area.id">{{ area.nombre }}</option>
                    </select>
                </div>
                
                <!-- Lista de Portafolios -->
                 <div v-if="vacio" class="flex flex-col items-center justify-center p-4 rounded text-center">
                    <p class="text-4xl font-bold text-[var(--color-text)] mt-4">Opps! No hay datos</p>
      <p class="text-[var(--color-text-offset)] mt-2">No se encontró portafolios para esa área seleccionada.</p>
                 </div>
                <div class="grid-container" v-else>
                    <div 
                        v-for="portafolio in filteredPortfolios" 
                        :key="portafolio.id" 
                        class="card"
                        @click="redirectToUser(portafolio.username)"
                    >
                        <img :src="portafolio.imgUser" alt="Imagen de usuario" class="card-img" />
                        <h3>{{ portafolio.nombre }}</h3>
                        <p>{{ portafolio.skills }}</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';

export default {
    components: {
        Footer, Navbar
    },
    data() {
        return {
            vacio: false,
            selectedArea: '',
            areas: [],
            user: [],
            filteredPortfolios: [],
            portafolios: []
        };
    },
    methods: {
        async fetchAreas() {
            try {
                const response = await axios.get(`${API_URL}/areas`);
                this.areas = response.data.map(area => ({
                    id: area.id,
                    nombre: area.nombre
                }));
            } catch (error) {
                console.error('Error fetching areas:', error);
            }
        },
        async fetchPortfolios() {
            try {
                const response = await axios.get(`${API_URL}/portafolios`);
                this.portafolios = response.data.map(portafolio => ({
                    id: portafolio.id,
                    imgUser: portafolio.imgUser || 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png',
                    userId: portafolio.userId
                }));
            } catch (error) {
                console.error('Error fetching portfolios:', error);
            }
        },
        async fetchusers() {
            try {
                const response = await axios.get(`${API_URL}/users/`);
                this.user = response.data.map(user => {
                    // Buscar la imagen del usuario en el array de portafolios
                    const portfolio = this.portafolios.find(p => p.userId === user.id);
                    return {
                        id: user.id,
                        nombre: user.nombre,
                        username: user.username, // Agregamos el username
                        imgUser: portfolio ? portfolio.imgUser : 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png',
                        skills: user.puesto,
                        area_id: user.area_id
                    };
                });
                this.filterPortfolios();
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        },
        filterPortfolios() {
    if (this.selectedArea) {
        this.filteredPortfolios = this.user.filter(p => p.area_id == this.selectedArea);
        this.vacio = this.filteredPortfolios.length === 0; // Verifica si no hay portafolios filtrados
    } else {
        this.filteredPortfolios = this.user;
        this.vacio = this.filteredPortfolios.length === 0; // Verifica si no hay portafolios en general
    }
},
        redirectToUser(username) {
    this.$router.push({ 
        path: `/portafolio/${username}` // Ruta dinámica
    });

}
    },
    async mounted() {
        await this.fetchAreas();
        await this.fetchPortfolios(); // Primero se obtienen los portafolios
        await this.fetchusers(); // Luego se obtienen los usuarios y se asignan las imágenes
    }
};
</script>

<style scoped>
.page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    flex: 1;
}

.filter-container {
    gap: 10px;
    margin-bottom: 20px;
}

.custom-select {
    width: 25%;
    padding: 10px;
    border: 1px solid #555;
    border-radius: 5px;
    background-color: #555;
    color: white;
    appearance: none;
}

.custom-select:focus {
    outline: none;
    border-color: #00bfff;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}



.card {
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    color: white;
}

.card:hover {
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.card-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
}
</style>