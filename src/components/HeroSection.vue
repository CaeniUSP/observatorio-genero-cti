<script setup>
import Logo from '../assets/logo.png'
</script>
<template>
  <section class="container  min-vh-95 d-flex align-items-center bg-gray-100 flex flex-col justify-center items-center text-center p-6">
    
    <img
      :src="Logo"
      alt="Logo Observatório Paulista de Gênero"
      class="mx-auto h-auto
             w-32        /* 8rem = 128px por padrão */
             sm:w-48     /* ≥640px: 12rem  */
             md:w-56     /* ≥768px: 14rem  */
             lg:w-64     /* ≥1024px: 16rem */
             xl:w-80     /* ≥1280px: 20rem */
             2xl:w-[24rem] /* ≥1536px: 24rem */
             transition-all duration-300"
    />
    <p class=" mt-4 fs-6 text-gray-600">Promovendo equidade e transparência na construção do futuro</p>
    <a href="#sobre" class=" mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition w-50" >
      <button >
      Saiba mais
      </button>
    </a>
  </section>
</template>
