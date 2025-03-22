<template>
    <div class="page-container">
        <Navbar />
        <div class="content">
            <div class="container">
                <h2>Mi Perfil</h2>
                
                <div class="profile-card">
                    <img :src="user.imgUser == null ? user.imgUser :'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png'" alt="Foto de perfil" class="profile-img" />                    <h3>{{ user.nombre }}</h3>
                    <p><strong>Username:</strong> {{ user.username }}</p>
                    <p><strong>Área:</strong> {{ user.area || 'NO ESPECIFICADA' }}</p>
                </div>

                <div class="m-10">
                    <button @click="logout" class="top-custom">Cerrar sesión</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
import axios from 'axios';
export default {
    components: {
        Footer, Navbar
    },
    data() {
        return {
            user: {
                nombre: 'Juan Pérez',
                username: 'juanp',
                imgUser: 'https://via.placeholder.com/150',
                area: 'Desarrollo Web'
            }
        };
    },
    methods: {
        async fetchUser() {
            try {
                const response = await axios.get(`${API_URL}/users/with-image/${localStorage.getItem('data')}`);
                this.user = response.data;
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        },
        logout() {
        localStorage.removeItem('auth');
        localStorage.removeItem('data');
        this.$router.push('/login');
      }
    },
    async mounted() {
        await this.fetchUser();
        
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

.container {
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    color: white;
    text-align: center;
    max-width: 400px;
    margin: auto;
}

.profile-card {
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 15px;
    border: 3px solid white;
}

.top-custom {
    margin-top: 20px;
}
</style>