<template>
    <div>
        <Navbar />
        <div class="container">
            <h4>Mis datos</h4>
            <form @submit.prevent="submitForm" class="grid-container">
                <!-- Primera fila: Portafolio -->
                <div class="grid-item portfolio">
                    <h3 class="fs-form">Portafolio</h3>
                    <input v-model="portafolio.imgUser" placeholder="Imagen URL" type="text" />
                    <textarea v-model="portafolio.skills" placeholder="Habilidades"></textarea>
                    <textarea v-model="portafolio.achievements" placeholder="Logros"></textarea>
                </div>
                
                <!-- Segunda fila: Contacto, Experiencia, Proyecto -->
                <div class="grid-item contact">
                    <h3 class="fs-form">Contacto</h3>
                    <input v-model="contacto.telefono" placeholder="Teléfono" type="text" />
                    <input v-model="contacto.linkedin" placeholder="LinkedIn" type="text" />
                    <input v-model="contacto.github" placeholder="GitHub" type="text" />
                    <input v-model="contacto.correo" placeholder="Correo" type="email" />
                </div>
                
                <div class="grid-item xp">
                    <h3 class="fs-form">Experiencia</h3>
                    <textarea v-model="xp.description" placeholder="Descripción"></textarea>
                    <input v-model="xp.period" placeholder="Período" type="text" />
                    <input v-model="xp.company_name" placeholder="Nombre de la Empresa" type="text" />
                </div>
                
                <div class="grid-item project">
                    <h3 class="fs-form">Proyecto</h3>
                    <input v-model="proyecto.title" placeholder="Título" type="text" />
                    <textarea v-model="proyecto.description" placeholder="Descripción"></textarea>
                </div>
                
                <!-- Botón de envío -->
                <div class="grid-item full-width">
                    <button type="submit">Guardar</button>
                </div>
            </form>
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
            contacto: {
                telefono: '',
                linkedin: '',
                github: '',
                correo: ''
            },
            portafolio: {
                imgUser: '',
                skills: '',
                achievements: ''
            },
            xp: {
                description: '',
                period: '',
                company_name: ''
            },
            proyecto: {
                title: '',
                description: ''
            }
        };
    },
    methods: {
        submitForm() {
            console.log("Formulario enviado", {
                contacto: this.contacto,
                portafolio: this.portafolio,
                xp: this.xp,
                proyecto: this.proyecto
            });
        }
    }
};
</script>

<style scoped>
.container {
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    gap: 20px;
}
.portfolio {
    grid-column: span 3;
}
.contact, .xp, .project {
    grid-column: span 1;
}
.full-width {
    grid-column: span 3;
    text-align: center;
}
input, textarea, button {
    display: block;
    width: 100%;
    margin-top: 10px;
    padding: 8px;
}

.fs-form{
    font-size: 20px;
}
</style>
