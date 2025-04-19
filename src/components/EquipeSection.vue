<script setup>
import logoVue from '../assets/vue.svg'
import fotoOnuki from '../assets/prof_janina.jpg'

const membros = [
  { nome: 'Janina Onuki',             cargo: 'Coordenadora',      imagem: fotoOnuki },
  { nome: 'Flavia',                   cargo: 'Pesquisadora',      imagem: logoVue },
  { nome: 'Vitor de Andrade Mirwald', cargo: 'Analista de Dados', imagem: logoVue },
  { nome: 'Outro Membro',             cargo: 'Estagiário',        imagem: logoVue },
  // …mais membros…
]
</script>

<template>
  <section id="equipe" class="container py-16 px-4 bg-white text-gray-800">
    <h2 class="text-3xl font-semibold mb-10 ">Equipe</h2>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex flex-wrap justify-center items-center">
        <div
          v-for="m in membros"
          :key="m.nome"
          class="relative card bg-white shadow rounded-lg p-6 m-4 w-56 transition-transform hover:scale-105 group"
        >
          <!-- foto -->
          <img
            :src="m.imagem"
            :alt="`Foto de ${m.nome}`"
            class="avatar mx-auto mb-4"
          />
          <!-- nome e cargo -->
          <h3 class="text-lg font-semibold text-gray-900 text-center">{{ m.nome }}</h3>
          <p class="text-sm text-gray-600 text-center">{{ m.cargo }}</p>

          <!-- overlay ao hover -->
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
          >
            <h3 class="text-white font-semibold">{{ m.nome }}</h3>
            <p class="text-xs text-gray-200">{{ m.cargo }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.avatar {
  display: block;
  width: 10rem;   /* 96px */
  height: 10rem;  /* 96px */
  border-radius: 50%;
  object-fit: cover;
}

.card{
  max-width: 20rem;
  min-width: 20rem;
  max-height: 20rem;
  min-height: 20rem;
  justify-content: center;
}
</style>
