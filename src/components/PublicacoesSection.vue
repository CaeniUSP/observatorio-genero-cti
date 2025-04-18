<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper/core'

// CSS do Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import recursosRaw from '../data/recursos.json'

// registra os módulos
SwiperCore.use([Navigation, Pagination, Autoplay])

const router = useRouter()

// ordena e extrai top3
const recursosOrdenados = computed(() =>
  recursosRaw.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
)
const top3 = computed(() => recursosOrdenados.value.slice(0, 3))

function verTodas() {
  router.push({ name: 'TodasPublicacoes' })
}
</script>

<template>
  <section id="publicacoes" class="container bg-white py-16 px-4 text-gray-800">
    <div class="max-w-5xl mx-auto mb-6 flex justify items-center">
      
      <button
        @click="verTodas"
        class="btn btn-outline btn-sm rounded-circle p-2"
        aria-label="Ver todas"
      >
        <h2 class="text-3xl font-semibold">Publicações &amp; Mídia  <i class="fas fa-plus"></i></h2>
        
      </button>
    </div>

    <Swiper
      navigation
      pagination
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :slides-per-view="1"
      :space-between="16"
      :breakpoints="{ 640: { slidesPerView: 1 }, 1024: { slidesPerView: 1 } }"
      class="py-4"
    >
      <SwiperSlide v-for="item in top3" :key="item.id" class="flex justify-center">
        <a :href="item.link" target="_blank" class="block">
          <div
          class="flex flex-col bg-white border rounded-lg shadow-md p-6
                  hover:shadow-lg transition-shadow mx-auto"
           style="min-width:18rem; max-width:50rem; min-height:18rem; max-height:18rem;"
          >
            
            <div class="mb-4 flex justify-center text-secondary text-3xl">
              <i v-if="item.type === 'pdf'" class="fas fa-file-pdf fa-2x"></i>
              <i v-else-if="item.type === 'Reportagem'" alt = "{{item.type}}" class="fas fa-newspaper fa-2x"></i>
              <i v-else-if="item.type === 'Entrevista'" alt = "{{item.type}}" class="fas fa-newspaper fa-2x"></i>
              <i v-else-if="item.type === 'Podcast'" alt = "{{item.type}}" class="fas fa-podcast fa-2x" placeholder="{{item.type}}"></i>
            </div>
            <h3 class="mb-1 text-center text-xl font-medium">{{ item.title }}</h3>
            <h4 class="mb-1 text-center text-xl font-small">{{ item.type }}</h4>
            <p class="mb-2 text-center text-xs text-gray-500">
              {{ new Date(item.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              }) }}
            </p>
            <p class="flex-1 text-sm overflow-y-auto mb-4" style="max-height:10rem;">{{ item.description }}</p>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
