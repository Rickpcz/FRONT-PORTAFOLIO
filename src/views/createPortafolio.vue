<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="grid-item full-width flex justify-between items-center">
                <h4>Mis datos</h4>
                <div class="flex gap-2 w-1/2 justify-end">
                    <button type="submit" class="save-btn" @click.prevent="submitForm">
                        <span v-if="!issend">Guardar</span>
                        <span v-else>Guardando...</span>
                    </button>
                    <button type="button" class="copy-link-btn" @click="copyPortfolioLink">
                        <i class="bx bx-link"></i> Copiar enlace
                    </button>
                </div>
            </div>
            <p></p>
            <form class="grid-container">
                <!-- Primera fila: Portafolio -->
                <div class="grid-item portfolio">
                    <h3 class="fs-form">Datos de Usuario</h3>
                    <input v-model="usuario.nombre" placeholder="Juan Perex Mendez" type="text" />
                    <input type="text" v-model="usuario.username" placeholder="JuanPerexMendez" />
                </div>

                <div class="grid-item portfolio">
                    <h3 class="fs-form">Portafolio</h3>
                    <input v-model="portafolio.puesto"
                        placeholder="Puesto, Ejem. Diseñador UX, Contador, Diseñador Front-end" type="text" />
                    <input @change="handleFileUpload" placeholder="Imagen URL" type="file" accept="image/*" />
                    <textarea v-model="portafolio.skills" placeholder="Descripción breve sobre ti..."></textarea>
                </div>


                <!-- Segunda fila: Contacto, Experiencia, Proyecto -->
                <div class="grid-item project">
                    <!-- Título y botón de agregar fuera del v-for -->
                    <div class="grid-item flex items-center justify-between">
                        <h3 class="fs-form">Proyecto (s)</h3>
                        <button type="button" @click="addProject" class="add-btn-small">
                            <i class="bx bx-plus"></i> <!-- Ícono de agregar de Boxicons -->
                        </button>
                    </div>

                    <!-- Campos de los proyectos dentro del v-for -->
                    <div v-for="(proyecto, index) in proyectos" :key="index" class="project-fields">
                        <input type="file" accept="image/*" @change="handleFileUploadImageProject($event, index)" />
                        <input v-model="proyecto.title" placeholder="Título" type="text" />
                        <textarea v-model="proyecto.description" placeholder="Descripción"></textarea>
                        <button v-if="proyectos.length > 1" type="button" @click="removeProject(index)"
                            class="remove-btn">
                            <i class="bx bx-trash"></i> <!-- Ícono de basurero de Boxicons -->
                        </button>
                    </div>
                </div>
                <div class="grid-item-2 xp">
                    <!-- Título y botón de agregar fuera del v-for -->
                    <div class="grid-item flex items-center justify-between">
                        <h3 class="fs-form">Experiencia</h3>
                        <button type="button" @click="addExperience" class="add-btn-small">
                            <i class="bx bx-plus"></i> <!-- Ícono de agregar de Boxicons -->
                        </button>
                    </div>

                    <!-- Campos de las experiencias dentro del v-for -->
                    <div v-for="(experience, index) in experiencias" :key="index" class="experience-fields">
                        <textarea v-model="experience.description" placeholder="Descripción"></textarea>
                        <input v-model="experience.period" placeholder="Período" type="text" />
                        <input v-model="experience.company_name" placeholder="Nombre de la Empresa" type="text" />
                        <button v-if="experiencias.length > 1" type="button" @click="removeExperience(index)"
                            class="remove-btn">
                            <i class="bx bx-trash"></i> <!-- Ícono de basurero de Boxicons -->
                        </button>
                    </div>
                </div>


                <div class="grid-item-2 skills">
                    <!-- Título y botón de agregar fuera del v-for -->
                    <div class="grid-item flex items-center justify-between">
                        <h3 class="fs-form">Habilidades Suaves</h3>
                        <button type="button" @click="addSoftSkill" class="add-btn-small">
                            <i class="bx bx-plus"></i> <!-- Ícono de agregar de Boxicons -->
                        </button>
                    </div>

                    <!-- Campos de habilidades suaves dentro del v-for -->
                    <div v-for="(skill, index) in habilidadesSuaves" :key="index" class="skills-fields">
                        <input v-model="skill.name" placeholder="Comuinación, Trabajo en equipo, etc." type="text" />
                        <button v-if="habilidadesSuaves.length > 1" type="button" @click="removeSoftSkill(index)"
                            class="remove-btn">
                            <i class="bx bx-trash"></i> <!-- Ícono de basurero de Boxicons -->
                        </button>
                    </div>
                </div>

                <div class="grid-item-2 tools">
                    <!-- Título y botón de agregar fuera del v-for -->
                    <div class="grid-item flex items-center justify-between">
                        <h3 class="fs-form">Herramientas/Tecnologías</h3>
                        <button type="button" @click="addTool" class="add-btn-small">
                            <i class="bx bx-plus"></i> <!-- Ícono de agregar de Boxicons -->
                        </button>
                    </div>

                    <!-- Campos de herramientas dentro del v-for -->
                    <div v-for="(tool, index) in herramientas" :key="index" class="tools-fields">
                        <input v-model="tool.name" placeholder="Excel, Bases de Datos, Redes Sociales, etc."
                            type="text" />
                        <button v-if="herramientas.length > 1" type="button" @click="removeTool(index)"
                            class="remove-btn">
                            <i class="bx bx-trash"></i> <!-- Ícono de basurero de Boxicons -->
                        </button>
                    </div>
                </div>


                <div class="grid-item-3 contact">
                    <h3 class="fs-form">Contacto</h3>
                    <textarea v-model="contacto.description" placeholder="Descripción"></textarea>
                    <input v-model="contacto.telefono" placeholder="Teléfono" type="text" />
                    <input v-model="contacto.correo" placeholder="Correo" type="email" />
                    <input v-model="contacto.twitter" placeholder="Twitter" type="text" />
                    <input v-model="contacto.linkedin" placeholder="LinkedIn" type="text" />
                    <input v-model="contacto.github" placeholder="GitHub" type="text" />
                </div>

                <!-- Botón de envío -->

            </form>
        </div>
        <Footer />
    </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
import Swal from 'sweetalert2';
export default {
    components: {
        Footer, Navbar
    },
    async mounted() {
        await this.loadUserData();
    },
    data() {
        return {
            issend: false,
            idportafolio: '',
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
    methods: {
        addSoftSkill() {
            this.habilidadesSuaves.push({ name: '' });
        },

        // Función para agregar una nueva herramienta
        addTool() {
            this.herramientas.push({ name: '' });
        },

        // Función para agregar un nuevo proyecto
        addProject() {
            this.proyectos.push({ title: '', description: '', img: '' });
        },

        // Función para agregar una nueva experiencia
        addExperience() {
            this.experiencias.push({ description: '', period: '', company_name: '' });
        },
        async removeSoftSkill(index) {
            const skill = this.habilidadesSuaves[index];
            if (skill.id) {
                await axios.delete(`${API_URL}/habilidades/${skill.id}`);
                Swal.fire({
                    icon: 'success',
                    title: '¡Habilidad eliminada!',
                    showConfirmButton: true,

                });
            }
            this.habilidadesSuaves.splice(index, 1);
        },

        async removeTool(index) {
            const tool = this.herramientas[index];
            if (tool.id) {
                await axios.delete(`${API_URL}/herramientas/${tool.id}`);
                Swal.fire({
                    icon: 'success',
                    title: '¡Herramienta eliminada!',
                    showConfirmButton: true,

                });
            }
            this.herramientas.splice(index, 1);
        },

        async removeExperience(index) {
            const exp = this.experiencias[index];
            if (exp.id) {
                await axios.delete(`${API_URL}/experiencias/${exp.id}`);
                Swal.fire({
                    icon: 'success',
                    title: '¡Experiencia eliminada!',
                    showConfirmButton: true,

                });
            }
            this.experiencias.splice(index, 1);
        },

        async removeProject(index) {
            const proyecto = this.proyectos[index];
            if (proyecto.id) {
                await axios.delete(`${API_URL}/proyectos/${proyecto.id}`);
                Swal.fire({
                    icon: 'success',
                    title: '¡Proyecto eliminado!',
                    showConfirmButton: true,

                });
            }
            this.proyectos.splice(index, 1);
        },
        copyPortfolioLink() {
            const portfolioLink = `${window.location.origin}/portafolio/${this.usuario.username}`;
            navigator.clipboard.writeText(portfolioLink).then(() => {
                Swal.fire({
                    icon: 'success',
                    title: '¡Enlace copiado!',
                    text: portfolioLink,
                    showConfirmButton: true,
                });
            }).catch(err => {
                console.error('Error al copiar el enlace:', err);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo copiar el enlace.',
                    showConfirmButton: true,
                });
            });
        },
        async submitForm() {
            this.issend = true;
            try {
                const userId = localStorage.getItem('data');

                let portafolioExistente;
                let portafolioId;

                try {
                    const response = await axios.get(`${API_URL}/portafolios/usuario/${userId}`);
                    portafolioExistente = response.data;
                } catch (error) {
                    if (error.response && error.response.status === 404) {
                        portafolioExistente = null;
                    } else {
                        throw error; // otro error inesperado
                    }
                }

                if (!portafolioExistente) {
                    // Primero sube la imagen para obtener la URL
                    const formData = new FormData();
                    formData.append('id', userId);
                    formData.append('image', this.portafolio.imgUser);

                    const uploadRes = await axios.post(`${API_URL}/portafolios/upload`, formData, {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    });
                    const imgUserUrl = uploadRes.data.imageUrl;

                    // Ahora crea el portafolio
                    const portafolioRes = await axios.post(`${API_URL}/portafolios`, {
                        imgUser: imgUserUrl,
                        skills: this.portafolio.skills,
                        archievements: this.portafolio.puesto,
                        userId,
                    });

                    portafolioId = portafolioRes.data.id;
                } else {
                    portafolioId = portafolioExistente.id;
                    console.log('portafolioExistente', portafolioId);

                    // Si el usuario subió una imagen nueva, actualiza
                    if (this.portafolio.imgUser instanceof File) {
                        const formData = new FormData();
                        formData.append('id', portafolioId);
                        formData.append('image', this.portafolio.imgUser);

                        const uploadRes = await axios.post(`${API_URL}/portafolios/upload`, formData, {
                            headers: { 'Content-Type': 'multipart/form-data' }
                        });
                        this.portafolio.imgUser = uploadRes.data.imageUrl;
                    }
                    console.log('actualiza portafolio');
                    await axios.put(`${API_URL}/portafolios/update`, {
                        id: portafolioId,
                        skills: this.portafolio.skills,
                        archievements: this.portafolio.puesto
                    });
                }

                // Ahora continúa con las peticiones restantes (proyectos, experiencias, etc.)
                console.log('proyectos');
                const proyectosRequests = this.proyectos.map(async (proyecto, index) => {
    let imgUrlProject = proyecto.imgproject || '';

    // Verifica si se seleccionó un archivo para este proyecto
    if (proyecto.tempImg instanceof File) {
        const formData = new FormData();
        formData.append('id', portafolioId);
        formData.append('image', proyecto.tempImg);

        // Sube la imagen y obtiene la URL
        const uploadRes = await axios.post(`${API_URL}/proyectos/upload`, formData);
        imgUrlProject = uploadRes.data.imageUrl; // Asigna la URL de la imagen cargada
    }

    // Actualiza la propiedad del proyecto
    proyecto.imgproject = imgUrlProject;

    // Ahora crea o actualiza el proyecto incluyendo la URL de la imagen
    if (proyecto.id) {
        return axios.put(`${API_URL}/proyectos/${proyecto.id}`, {
            id: proyecto.id,
            titulo: proyecto.title,
            descripcion: proyecto.description,
            imgproject: imgUrlProject,  // <-- 🔥 Añadido aquí
        });
    } else {
        return axios.post(`${API_URL}/proyectos`, {
            title: proyecto.title,
            description: proyecto.description,
            imgproject: imgUrlProject, // <-- 🔥 Añadido aquí
            portafolioId: portafolioId,
        });
    }
});


                // Maneja las experiencias, habilidades, herramientas y contacto exactamente como ya lo haces
                console.log('experiencias');
                const experienciasRequests = this.experiencias.map(exp => (
                    exp.id ? axios.put(`${API_URL}/experiencias/${exp.id}`, {
                        id: exp.id,
                        descripcion: exp.description,
                        periodo: exp.period,
                        empresa: exp.company_name
                    }) : axios.post(`${API_URL}/experiencias`, {
                        description: exp.description,
                        period: exp.period,
                        company_name: exp.company_name,
                        portafolioId: portafolioId
                    })
                ));

                console.log('habilidades');

                const habilidadesRequests = this.habilidadesSuaves.map(skill => (
                    skill.id ? axios.put(`${API_URL}/habilidades/${skill.id}`, {
                        id: skill.id,
                        habilidad: skill.name
                    }) : axios.post(`${API_URL}/habilidades`, {
                        habilidad: skill.name,
                        portafolioId: portafolioId
                    })
                ));

                console.log('herramientas');

                const herramientasRequests = this.herramientas.map(tool => (
                    tool.id ? axios.put(`${API_URL}/herramientas/${tool.id}`, {
                        id: tool.id,
                        herramienta: tool.name
                    }) : axios.post(`${API_URL}/herramientas`, {
                        herramienta: tool.name,
                        portafolioId: portafolioId
                    })
                ));

                console.log('contacto');

                const contactoRequest = this.contacto.id ?
                    axios.put(`${API_URL}/contactos/${this.contacto.id}`, {
                        telefono: this.contacto.telefono,
                        linkedin: this.contacto.linkedin,
                        github: this.contacto.github,
                        correo: this.contacto.correo,
                        descripcion: this.contacto.description,
                        twitter: this.contacto.twitter
                    }) : axios.post(`${API_URL}/contactos`, {
                        user_id: userId,
                        telefono: this.contacto.telefono,
                        linkedin: this.contacto.linkedin,
                        github: this.contacto.github,
                        correo: this.contacto.correo,
                        descripcion: this.contacto.description,
                        twitter: this.contacto.twitter
                    });

                console.log('todas las peticiones');

                await Promise.all([
                    ...proyectosRequests,
                    ...experienciasRequests,
                    ...habilidadesRequests,
                    ...herramientasRequests,
                    contactoRequest
                ]);

                await this.loadUserData();

                Swal.fire({
                    icon: 'success',
                    title: '¡Datos guardados!',
                    showConfirmButton: true,

                });
            } catch (error) {
               Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo guardar los datos.',
                    showConfirmButton: true,
                });
            }
            finally {
                this.issend = false;
            }
        },

        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.portafolio.imgUser = file;
            }
        },
        handleFileUploadImageProject(event, index) {
            const file = event.target.files[0];
            if (file) {
                this.proyectos[index].tempImg = file; // 🔥 Este es el arreglo correcto
            }
        },
        async loadUserData() {
            const userId = localStorage.getItem('data');

            try {
                const { data } = await axios.get(`${API_URL}/users/alldata/${userId}`);

                // Datos básicos usuario y portafolio
                this.usuario = {
                    nombre: data.usuario.nombre || '',
                    username: data.usuario.username || ''
                };

                this.idportafolio = data.usuario.portafolioId || '';

                this.portafolio = {
                    imgUser: data.usuario.imgUser || '',
                    skills: data.usuario.skills || '',
                    puesto: data.usuario.puesto || ''
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

.contact,
.xp,
.project {
    grid-column: span 1;
}

.full-width {
    grid-column: span 3;
    text-align: center;
}

input,
textarea,
button {
    display: block;
    width: 100%;
    margin-top: 10px;
    padding: 8px;
}

.fs-form {
    font-size: 20px;
}

/* Estilo para el botón de añadir */
/* Botón compacto para añadir */
.add-btn-small {
    background-color: var(--color-primary);
    color: white;
    border: none;
    padding: 4px 8px;
    /* Tamaño reducido */
    border-radius: 50%;
    /* Forma circular */
    cursor: pointer;
    font-size: 1rem;
    /* Tamaño del ícono */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
    width: 32px;
    /* Ancho fijo */
    height: 32px;
    /* Alto fijo */
}

.add-btn-small:hover {
    background-color: var(--color-primary-offset);
}

/* Estilo para el botón de eliminar con ícono */
.remove-btn {
    background: none;
    border: none;
    color: var(--color-danger);
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: end;
}

.remove-btn:hover {
    color: var(--color-danger-hover);
}

.project {
    grid-column: span 3;
    /* Asegura que ocupe todo el ancho */
    margin-top: 20px;
    /* Espaciado entre formularios */
}

.experience-fields {
    margin-top: 20px;
    /* Espaciado entre formularios */
}

.contact {
    grid-column: span 3;
    /* Ocupa todo el ancho */
}

.save-btn {
    background-color: var(--color-primary);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 150px;
}

.save-btn:hover {
    background-color: var(--color-primary-offset);
}

.skills-fields,
.tools-fields {
    margin-top: 20px;
    /* Espaciado entre formularios */
}

/* Limitar la altura de la sección de habilidades suaves */
.skills {
    max-height: 300px;
    /* Altura máxima */
    overflow-y: auto;
    /* Scroll vertical si excede la altura */
    padding-right: 10px;
    /* Espaciado para el scroll */
}

/* Limitar la altura de la sección de herramientas/tecnologías */
.tools {
    max-height: 300px;
    /* Altura máxima */
    overflow-y: auto;
    /* Scroll vertical si excede la altura */
    padding-right: 10px;
    /* Espaciado para el scroll */
}


.project {
    max-height: 300px;
    /* Altura máxima */
    overflow-y: auto;
    /* Scroll vertical si excede la altura */
    padding-right: 10px;
    /* Espaciado para el scroll */
}

/* Limitar la altura de la sección de experiencia */
.xp {
    max-height: 300px;
    /* Altura máxima */
    overflow-y: auto;
    /* Scroll vertical si excede la altura */
    padding-right: 10px;
    /* Espaciado para el scroll */
}

.copy-link-btn {
    background-color: var(--color-secondary);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 200px;
}

.copy-link-btn:hover {
    background-color: var(--color-secondary-offset);
}
</style>
