<template>
    <div class="register-container">
      <h1>Regístrate</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            placeholder="Ingresa tu nombre" 
            required
          />
        </div>
        
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            placeholder="Ingresa tu correo electrónico" 
            required
          />
        </div>
        
        <div class="form-group password-group">
          <label for="password">Contraseña</label>
          <div class="password-container">
            <input 
              :type="showPassword ? 'text' : 'password'"
              id="password" 
              v-model="form.password" 
              placeholder="Ingresa tu contraseña" 
              required
            />
            <i :class="showPassword ? 'bx bx-hide' : 'bx bx-show'" @click="togglePassword"></i>
          </div>
        </div>
        
        <div class="form-group password-group">
          <label for="confirm-password">Confirmar Contraseña</label>
          <div class="password-container">
            <input 
              :type="showConfirmPassword ? 'text' : 'password'"
              id="confirm-password" 
              v-model="form.confirmPassword" 
              placeholder="Confirma tu contraseña" 
              required
            />
            <i :class="showConfirmPassword ? 'bx bx-hide' : 'bx bx-show'" @click="toggleConfirmPassword"></i>
          </div>
        </div>
  
        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Registrando...' : 'Registrarse' }}
        </button>
        
        <p class="login-link">
          ¿Ya tienes una cuenta? <router-link to="/login">Inicia sesión</router-link>
        </p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  // Form data
  const form = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  // Estado de los iconos de visibilidad de contraseña
  const showPassword = ref(false);
  const showConfirmPassword = ref(false);
  
  // Funciones para alternar la visibilidad de las contraseñas
  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };
  
  const toggleConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value;
  };
  
  // Submit handler
  const isSubmitting = ref(false);
  
  const handleSubmit = () => {
    if (form.value.password !== form.value.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
  
    isSubmitting.value = true;
    
    // Simulación de la solicitud de registro
    setTimeout(() => {
      alert('Usuario registrado exitosamente!');
      router.push('/login'); // Redirige a la página de login después de registrarse
      isSubmitting.value = false;
    }, 2000);
  };
  </script>
  
  <style scoped>
  .register-container {
    width: 100%;
    max-width: 400px;
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
    padding-right: 40px; /* Espacio para el ícono */
  }
  
  .password-container i {
    position: absolute;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: var(--color-text);
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
  </style>
  