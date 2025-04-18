<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import recursosRaw from '../data/recursos.json'

const router = useRouter()

// Ordena do mais recente para o mais antigo
const recursosOrdenados = computed(() =>
  recursosRaw
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
)

// Pega só os 3 primeiros para o preview
const top3 = computed(() => recursosOrdenados.value.slice(0, 3))

function verTodas() {
  router.push({ name: 'TodasPublicacoes' })
}
</script>

<template>
  <section id="publicacoes" class="container bg-white py-16 px-4 sm:px-6 text-gray-800">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-semibold mb-8 text-primary">Publicações &amp; Mídia</h2>

      <!-- Carrossel Bootstrap -->
      <div id="carouselPublicacoes" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            v-for="(item, index) in top3"
            :key="item.id"
            :class="['carousel-item', { active: index === 0 }]"
          >
            <a :href="item.link" target="_blank" class="d-block text-decoration-none">
              <div
                class="flex flex-col bg-white border rounded-lg shadow-md p-6
                       hover:shadow-lg transition-shadow"
              >
                <!-- IMAGEM -->
                <div v-if="item.image" class="mb-4">
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-full h-40 object-cover rounded-md"
                  />
                </div>

                <!-- Ícone dinâmico -->
                <div class="mb-4 text-secondary flex justify-center text-3xl">
                  <i v-if="item.type === 'pdf'" class="fas fa-file-pdf fa-2x"></i>
                  <i v-else-if="item.type === 'article'" class="fas fa-newspaper fa-2x"></i>
                  <i v-else-if="item.type === 'podcast'" class="fas fa-podcast fa-2x"></i>
                </div>

                <!-- Conteúdo -->
                <h3 class="text-xl font-medium mb-1 text-center">{{ item.title }}</h3>
                <p class="text-xs text-gray-500 mb-2 text-center">
                  {{ new Date(item.date).toLocaleDateString('pt-BR', {
                     day: '2-digit', month: '2-digit', year: 'numeric'
                  }) }}
                </p>
                <p class="text-sm flex-1 mb-4">{{ item.description }}</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Controles -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselPublicacoes"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselPublicacoes"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Próximo</span>
        </button>
      </div>

      <!-- Botão “Ver todas” -->
      <div class="text-center mt-8">
        <button
          @click="verTodas"
          class="btn btn-primary px-6 py-3 rounded-pill"
        >
          Ver todas as publicações
        </button>
      </div>
    </div>
  </section>
</template>
