<script setup>
const membros = [
  {
    nome: 'Janina Onuki',
    cargo: 'Coordenadora',
    imagem: '../assets/vue.svg'
  },
  {
    nome: 'Fulano de Tal',
    cargo: 'Pesquisador',
    imagem: '../assets/vue.svg'
  },
  {
    nome: 'Ciclana Silva',
    cargo: 'Analista de dados',
    imagem: '../assets/vue.svg'
  }
  // Adicione mais membros aqui conforme necessário
]
</script>

<template>
  <section class="px-4 sm:px-6 md:px-10 bg-gray-50 py-16 px-4 md:px-5">
    <div class="px-4 sm:px-6 md:px-10 max-w-6xl mx-auto text-center">
      <h2 class="px-4 sm:px-6 md:px-10 text-3xl font-semibold mb-10 text-gray-800">Equipe</h2>
      <div class="px-4 sm:px-6 md:px-10 flex space-x-6 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scroll-smooth">
        <div
          v-for="membro in membros"
          :key="membro.nome"
          class="px-4 sm:px-6 md:px-10 min-w-[250px] flex-shrink-0 bg-white shadow-md rounded-lg p-6 snap-start"
        >
          <img :src="membro.imagem" :alt="membro.nome" class="px-4 sm:px-6 md:px-10 w-24 h-24 mx-auto rounded-full object-cover mb-4">
          <h3 class="px-4 sm:px-6 md:px-10 text-lg font-semibold text-gray-900">{{ membro.nome }}</h3>
          <p class="px-4 sm:px-6 md:px-10 text-sm text-gray-600">{{ membro.cargo }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
