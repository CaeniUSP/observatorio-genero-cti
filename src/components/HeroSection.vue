<script setup>
import Logo from '../assets/logo.png'
</script>
<template>
  <section class="container  min-vh-95 d-flex align-items-center bg-gray-100 flex flex-col justify-center items-center text-center p-6">
    
    <img :src="Logo" alt="Logo Observatório Paulista de Gênero" class="container  w-50 mx-auto" />
    <p class="container  mt-4 fs-6 text-gray-600">Promovendo equidade e transparência na construção do futuro</p>
    <a href="#sobre" class="container mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition w-50" >
      <button >
      Saiba mais
      </button>
    </a>
  </section>
</template>