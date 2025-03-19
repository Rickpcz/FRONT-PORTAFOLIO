<template>
    <div class="page-container">
        <Navbar />
        <div class="content">
            <div class="container">
                <h2>Explora Portafolios</h2>
                
                <!-- Filtro por Área -->
                <div class="filter-container d-flex justify-content-between">
                    <label for="area"></label>
                    <select v-model="selectedArea" @change="filterPortfolios" class="custom-select">
                        <option value="">Todas</option>
                        <option v-for="area in areas" :key="area.id" :value="area.id">{{ area.nombre }}</option>
                    </select>
                </div>
                
                <!-- Lista de Portafolios -->
                <div class="grid-container">
                    <div v-for="portafolio in filteredPortfolios" :key="portafolio.id" class="card">
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
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
export default {
    components: {
        Footer, Navbar
    },
    data() {
        return {
            selectedArea: '',
            areas: [
                { id: 1, nombre: 'Desarrollo Web' },
                { id: 2, nombre: 'Diseño Gráfico' },
                { id: 3, nombre: 'Marketing Digital' }
            ],
            portafolios: [
                { id: 1, nombre: 'Juan Pérez', imgUser: 'https://via.placeholder.com/150', skills: 'Frontend Developer', area_id: 1 },
                { id: 2, nombre: 'María Gómez', imgUser: 'https://via.placeholder.com/150', skills: 'UI/UX Designer', area_id: 2 },
                { id: 3, nombre: 'Carlos Díaz', imgUser: 'https://via.placeholder.com/150', skills: 'SEO Specialist', area_id: 3 }
            ],
            filteredPortfolios: []
        };
    },
    methods: {
        filterPortfolios() {
            if (this.selectedArea) {
                this.filteredPortfolios = this.portafolios.filter(p => p.area_id == this.selectedArea);
            } else {
                this.filteredPortfolios = this.portafolios;
            }
        }
    },
    mounted() {
        this.filterPortfolios();
    }
};
</script>

<style scoped>
.page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Asegura que ocupe toda la altura del viewport */
}

.content {
    flex: 1; /* Hace que este contenedor ocupe el espacio restante */
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

.card-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
}
</style>