<template>
  <div class="container p-5">
    <div class="register-container">
      <h1>Regístrate</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" id="name" v-model="form.nombre" placeholder="Ingresa tu nombre" required />
        </div>

        <div class="form-group">
          <label for="username">Username (nombre para mostrar tu portafolio)</label>
          <input type="text" id="username" v-model="form.username" placeholder="Ingresa tu username" required />
        </div>

        <div class="form-group">
          <label for="username">Puesto</label>
          <input type="text" id="username" v-model="form.puesto" placeholder="Ingresa tu puesto" required />
        </div>


        <div class="form-group">
          <label for="area">Área/Especialización </label>
          <select name="area" id="area" v-model="form.area_id" class="styled-select" required>
            <option v-for="area in areas" :key="area.id" :value="area.id">
              {{ area.nombre }}
            </option>
          </select>
        </div>

        <div class="form-group password-group">
          <label for="password">Contraseña</label>
          <div class="password-container">
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="form.password"
              placeholder="Ingresa tu contraseña" required />
            <i :class="showPassword ? 'bx bx-hide' : 'bx bx-show'" @click="togglePassword"></i>
          </div>
        </div>

        <div class="form-group password-group">
          <label for="confirm-password">Confirmar Contraseña</label>
          <div class="password-container">
            <input :type="showConfirmPassword ? 'text' : 'password'" id="confirm-password"
              v-model="form.confirmPassword" placeholder="Confirma tu contraseña" required />
            <i :class="showConfirmPassword ? 'bx bx-hide' : 'bx bx-show'" @click="toggleConfirmPassword"></i>
          </div>
        </div>

        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Registrando...' : 'Registrarse' }}
        </button>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>

        <p class="login-link">
          ¿Ya tienes una cuenta? <router-link to="/login">Inicia sesión</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const areas = ref([]);

// Form data
const form = ref({
  nombre: '',
  username: '',
  area_id: 1,
  password: '',
  confirmPassword: '',
  puesto:'',
});

// Estado de los iconos de visibilidad de contraseña
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// Estado de envío y mensajes
const isSubmitting = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

// Funciones para alternar la visibilidad de las contraseñas
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

// Submit handler
const handleSubmit = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    errorMessage.value = "Las contraseñas no coinciden";
    return;
  }

  isSubmitting.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const response = await axios.post(`${API_URL}/users/`, {
      nombre: form.value.nombre,
      username: form.value.username,
      password: form.value.password,
      area_id: form.value.area_id,
      puesto: form.value.puesto
    });

    successMessage.value = "Registro exitoso, redirigiendo...";
    
    // Redirigir al login después de 2 segundos
    setTimeout(() => {
      router.push('/login');
    }, 2000);

  } catch (error) {
    console.log(error);
    errorMessage.value = error.response?.data?.mensaje || "Error al registrar usuario";
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`${API_URL}/areas`);
    console.log(response.data);
    areas.value = response.data;
  } catch (error) {
    console.error("Error al cargar las áreas:", error);
    errorMessage.value = "No se pudieron cargar las áreas";
  }
});
</script>

<style scoped>


.register-container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--color-bg-offset);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: var(--color-text);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-family: var(--font-title);
  color: var(--color-primary);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-family: var(--font-body);
  color: var(--color-text);
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-border);
  background-color: var(--color-bg-offset);
  color: var(--color-text);
  font-size: 16px;
  border-radius: 5px;
}

.password-container {
  position: relative;
  display: flex;
  align-items: center;
}

.password-container input {
  width: 100%;
  padding-right: 40px;
}

.password-container i {
  position: absolute;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: var(--color-text);
  top: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: var(--color-primary);
  color: var(--color-text);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:disabled {
  background-color: var(--color-primary-offset);
}

button:hover:not(:disabled) {
  background-color: var(--color-primary-offset);
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}

.success-message {
  color: green;
  text-align: center;
  margin-top: 10px;
}

.login-link {
  text-align: center;
  margin-top: 20px;
  font-family: var(--font-body);
}

.login-link a {
  color: var(--color-primary);
}

.login-link a:hover {
  color: var(--color-primary-offset);
}

.styled-select {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-border);
  background-color: var(--color-bg-offset);
  color: var(--color-text);
  font-size: 16px;
  border-radius: 5px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
