<script setup>
const membros = [
  {
    nome: 'Janina Onuki',
    cargo: 'Coordenadora',
    imagem: '/src/assets/vue.svg'
  },
  {
    nome: 'Fulano de Tal',
    cargo: 'Pesquisador',
    imagem: '/src/assets/vue.svg'
  },
  {
    nome: 'Ciclana Silva',
    cargo: 'Analista de dados',
    imagem: '/src/assets/vue.svg'
  }
  // Adicione mais membros aqui conforme necessário
]
</script>

<template>
  <section id = "equipe" class="container  bg-gray-50 py-16 px-4 px-5">
    <div class="container  max-w-6xl mx-auto text-center">
      <h2 class="container  text-3xl font-semibold mb-10 text-gray-800">Equipe</h2>
      <div class="container  flex space-x-6 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scroll-smooth">
        <div
          v-for="membro in membros"
          :key="membro.nome"
          class="container  min-w-[250px] flex-shrink-0 bg-white shadow-md rounded p-6 snap-start"
        >
          <img :src="membro.imagem" :alt="membro.nome" class="container  w-24 h-24 mx-auto rounded-full object-cover mb-4">
          <h3 class="container  text-lg font-semibold text-gray-900">{{ membro.nome }}</h3>
          <p class="container  text-sm text-gray-600">{{ membro.cargo }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
