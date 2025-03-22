<template>
  <div class="container">
    <div class="login-container">
      <h1>Iniciar Sesión</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Username</label>
          <input 
            type="text" 
            id="username" 
            v-model="form.username" 
            placeholder="Ingresa tu usuario" 
            required
          />
        </div>

        <div class="form-group password-field">
          <label for="password">Contraseña</label>
          <div class="input-container">
            <input 
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="form.password"
              placeholder="Ingresa tu contraseña"
              required
            />
            <i :class="showPassword ? 'bx bx-show' : 'bx bx-hide'" @click="togglePassword"></i>
          </div>
        </div>

        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Iniciando...' : 'Iniciar Sesión' }}
        </button>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

        <p class="register-link">
          ¿No tienes cuenta? <router-link to="/register">Regístrate</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const form = ref({
  username: '',
  password: ''
});

const showPassword = ref(false);
const isSubmitting = ref(false);
const errorMessage = ref('');

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const handleLogin = async () => {
  isSubmitting.value = true;
  errorMessage.value = ''; // Resetear mensaje de error

  try {
    const response = await axios.post(`${API_URL}/users/login`, form.value);
    
    // Almacenar el token en localStorage
    localStorage.setItem('token', response.data.token);
    router.push('/dashboard'); // Redirigir al dashboard
  } catch (error) {
    // Manejo de errores de la API
    errorMessage.value = error.response?.data?.mensaje || 'Error al iniciar sesión';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.container { 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-container {
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

.password-field .input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.password-field i {
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

.register-link {
  text-align: center;
  margin-top: 20px;
  font-family: var(--font-body);
}

.register-link a {
  color: var(--color-primary);
}

.register-link a:hover {
  color: var(--color-primary-offset);
}
</style>
