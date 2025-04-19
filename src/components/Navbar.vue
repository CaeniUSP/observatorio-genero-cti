<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function onScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <nav
    :class="[
      'sticky-top transition-all duration-500 z-50',
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="container d-flex align-items-center py-3">
      <!-- Título/Logo -->
      <a class="navbar-brand fw-bold text-dark me-auto" href="/">
        <!--<img src="../assets/simbulo.png" alt="Observatório Paulista de Gênero em CT & I">-->
      </a>

      <!-- Links desktop -->
      <ul class="navbar-nav d-none d-lg-flex flex-row gap-4">
        <li v-for="(item, i) in ['Sobre','Equipe','Indicadores','Publicações','Contato']" :key="i" class="nav-item">
          <a
            :href="`#${item.toLowerCase()}`"
            class="nav-link position-relative text-dark px-0"
          >
            {{ item }}
            <span
              class="position-absolute bottom-0 start-0 bg-secondary"
              style="height:2px; width:0"
              :class="['transition-all duration-300', 'group-hover:w-100']"
            ></span>
          </a>
        </li>
      </ul>

      <!-- Botão mobile -->
      <button
        class="navbar-toggler d-lg-none border-0 p-2"
        type="button"
        @click="toggleMenu"
        aria-label="Menu"
      >
        <i
          :class="[
            'fas',
            isOpen ? 'fa-times' : 'fa-bars',
            'toggler-icon transition-transform duration-300'
          ]"
        ></i>
      </button>
    </div>

    <!-- Menu mobile -->
    <div v-if="isOpen" class="d-lg-none bg-white shadow-lg">
      <ul class="navbar-nav mx-3 my-2">
        <li v-for="(item, i) in ['Sobre','Equipe','Indicadores','Publicações','Contato']" :key="i" class="nav-item mb-2">
          <a
            :href="`#${item.toLowerCase()}`"
            class="nav-link text-dark"
            @click="toggleMenu"
          >
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
.bg-secondary {
  background-color: var(--color-secondary) !important;
}
.toggler-icon {
  font-size: 1.5rem;
  color: var(--color-primary);
}
.navbar-toggler:hover .toggler-icon {
  color: var(--color-secondary);
}
</style>
