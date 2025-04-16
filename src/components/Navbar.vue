<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const screenIsLarge = ref(false)

const updateScreenSize = () => {
  screenIsLarge.value = window.innerWidth >= 992 // Bootstrap breakpoint 'lg'
}

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>

<template>
  <nav class="container  navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container  container-fluid px-3 px-4">
      <a class="container  navbar-brand fw-bold text-dark" href="#">Observatório</a>
      <button
        v-if="!screenIsLarge"
        class="container  navbar-toggler"
        type="button"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen.toString()"
        aria-label="Toggle navigation"
      >
        <span class="container  navbar-toggler-icon"></span>
      </button>

      <div
        class="container [
            '',
            'navbar-collapse justify-content-end',
            screenIsLarge ? '' : 'collapse',
            isOpen && !screenIsLarge ? 'show' : ''
        ]"
        id="navbarNav"
        >


        <ul class="container  navbar-nav">
          <li class="container  nav-item">
            <a class="container  nav-link" href="#sobre">Sobre</a>
          </li>
          <li class="container  nav-item">
            <a class="container  nav-link" href="#equipe">Equipe</a>
          </li>
          <li class="container  nav-item">
            <a class="container  nav-link" href="#indicadores">Indicadores</a>
          </li>
          <li class="container  nav-item">
            <a class="container  nav-link" href="#publicacoes">Publicações</a>
          </li>
          <li class="container  nav-item">
            <a class="container  nav-link" href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>