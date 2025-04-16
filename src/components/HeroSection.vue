<script setup>
import Logo from '../assets/logo.png'
</script>
<template>
  <section class="px-4 sm:px-6 md:px-10 min-h-[80vh] bg-gray-100 flex flex-col justify-center items-center text-center p-6">
    <img :src="Logo" alt="Logo Observatório Paulista de Gênero" class="px-4 sm:px-6 md:px-10 w-64 mx-auto" />
    <p class="px-4 sm:px-6 md:px-10 mt-4 text-base sm:text-lg text-gray-600">Promovendo equidade e transparência na construção do futuro</p>
    <button class="px-4 sm:px-6 md:px-10 mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
      Saiba mais
    </button>
  </section>
</template>