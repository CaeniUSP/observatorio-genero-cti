<script setup>
import { ref } from 'vue'
import logoVue from '../assets/vue.svg'

const membros = [
  { nome: 'Janina Onuki', cargo: 'Coordenadora', imagem: logoVue },
  { nome: 'Fulano de Tal',    cargo: 'Pesquisador',  imagem: logoVue },
  { nome: 'Ciclana Silva',    cargo: 'Analista',     imagem: logoVue },
  { nome: 'Teste',            cargo: 'Analista',     imagem: logoVue },
  { nome: 'Teste',            cargo: 'Analista',     imagem: logoVue },
  { nome: 'Teste',            cargo: 'Analista',     imagem: logoVue },
  { nome: 'Teste',            cargo: 'Analista',     imagem: logoVue },
  // …mais membros…
]

const scrollContainer = ref(null)

function scrollLeft() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
}
function scrollRight() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: +300, behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="equipe" class="container py-5">
    <h2 class="text-center mb-4">Equipe</h2>
    <div class="position-relative">
      <!-- Seta esquerda -->
      <button
        @click="scrollLeft"
        class="btn btn-light position-absolute top-50 start-0 translate-middle-y"
        style="z-index:10;"
      >
        ‹
      </button>

      <!-- Container scrollável -->
      <div
        ref="scrollContainer"
        class="d-flex overflow-auto"
        style="scroll-behavior: smooth; gap:1rem; padding:1rem 2.5rem;"
      >
        <div
          v-for="m in membros"
          :key="m.nome"
          class="card flex-shrink-0"
          style="width: 14rem;"
        >
          <img
            :src="m.imagem"
            :alt="`Foto de ${m.nome}`"
            class="card-img-top rounded-circle mx-auto mt-3"
            style="width:100px; height:100px; object-fit:cover;"
          />
          <div class="card-body text-center">
            <h5 class="card-title">{{ m.nome }}</h5>
            <p class="card-text text-secondary">{{ m.cargo }}</p>
          </div>
        </div>
      </div>

      <!-- Seta direita -->
      <button
        @click="scrollRight"
        class="btn btn-light position-absolute top-50 end-0 translate-middle-y"
        style="z-index:10;"
      >
        ›
      </button>
    </div>
  </section>
</template>
