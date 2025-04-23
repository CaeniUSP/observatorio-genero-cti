<script setup>
import { ref, computed } from 'vue'
import membrosRaw from '../data/membros.json'

// carrega as imagens como antes
const imagens = import.meta.glob('../assets/membros/*', {
  eager: true,
  query: '?url',
  import: 'default'
})

const membros = computed(() =>
  membrosRaw.map(m => {
    const key = `../assets/membros/${m.imagem}`
    return {
      ...m,
      imagem: imagens[key] ?? '/avatar-placeholder.svg'
    }
  })
)

// qual card está expandido (usa o nome como key única aqui)
const expanded = ref(null)

function toggleExpand(m) {
  expanded.value = expanded.value === m.nome ? null : m.nome
}
</script>

<template>
  <section id="equipe" class="container py-16 px-4 bg-white text-gray-800">
    <h2 class="text-3xl font-semibold">Equipe</h2>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex flex-wrap justify-center items-start">
        <div
          v-for="m in membros"
          :key="m.nome"
          @click="toggleExpand(m)"
          class="relative card bg-white shadow rounded-lg p-6 m-4 w-56 transition-transform
                 hover:scale-105 cursor-pointer group"
        >
          <img
            :src="m.imagem"
            :alt="`Foto de ${m.nome}`"
            class="avatar mx-auto mb-4"
          />
          <h3 class="text-lg font-semibold text-gray-900 text-center">{{ m.nome }}</h3>
          <p class="text-sm text-gray-600 text-center mb-2">{{ m.cargo }}</p>

          <!-- descrição inline, só aparece se este card estiver expandido -->
          <transition name="expand">
            <div
              v-if="expanded === m.nome"
              class="mt-2 text-gray-700 text-sm leading-relaxed overflow-hidden text-justify description"
            >
              {{ m.descricao }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.description {
  text-indent: 1.5rem; /* ajuste como quiser */
  padding-left: 2%;
  padding-right: 2%;
}

.avatar {
  display: block;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
}
.card{
  max-width: 20rem;
  min-width: 20rem;
  max-height: 30rem;
  min-height: 20rem;
  justify-content: center;
}

/* animação simples de expansão */
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.expand-enter-to,
.expand-leave-from {
  max-height: 200px; /* ajuste esse valor ao tamanho máximo de descrição */
  opacity: 1;
}
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}
</style>
