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
  <nav class="px-4 sm:px-6 md:px-10 navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="px-4 sm:px-6 md:px-10 container-fluid px-3 sm:px-4">
      <a class="px-4 sm:px-6 md:px-10 navbar-brand fw-bold text-dark" href="#">Observatório</a>
      <button
        v-if="!screenIsLarge"
        class="px-4 sm:px-6 md:px-10 navbar-toggler"
        type="button"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen.toString()"
        aria-label="Toggle navigation"
      >
        <span class="px-4 sm:px-6 md:px-10 navbar-toggler-icon"></span>
      </button>

      <div
        :class="[
            'px-4 sm:px-6 md:px-10',
            'navbar-collapse justify-content-end',
            screenIsLarge ? '' : 'collapse',
            isOpen && !screenIsLarge ? 'show' : ''
        ]"
        id="navbarNav"
        >


        <ul class="px-4 sm:px-6 md:px-10 navbar-nav">
          <li class="px-4 sm:px-6 md:px-10 nav-item">
            <a class="px-4 sm:px-6 md:px-10 nav-link" href="#sobre">Sobre</a>
          </li>
          <li class="px-4 sm:px-6 md:px-10 nav-item">
            <a class="px-4 sm:px-6 md:px-10 nav-link" href="#equipe">Equipe</a>
          </li>
          <li class="px-4 sm:px-6 md:px-10 nav-item">
            <a class="px-4 sm:px-6 md:px-10 nav-link" href="#indicadores">Indicadores</a>
          </li>
          <li class="px-4 sm:px-6 md:px-10 nav-item">
            <a class="px-4 sm:px-6 md:px-10 nav-link" href="#publicacoes">Publicações</a>
          </li>
          <li class="px-4 sm:px-6 md:px-10 nav-item">
            <a class="px-4 sm:px-6 md:px-10 nav-link" href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>