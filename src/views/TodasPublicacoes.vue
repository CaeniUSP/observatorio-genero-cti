<script setup>
import { computed } from 'vue'
import recursosRaw from '../data/recursos.json'
const recursosOrdenados = computed(() =>
  recursosRaw.slice().sort((a,b) => new Date(b.date)-new Date(a.date))
)
</script>

<template>
  <section class="container py-16">
    <h1 class="text-4xl font-bold mb-8 text-primary">Todas as publicações</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in recursosOrdenados"
        :key="item.id"
        class="flex flex-col bg-white border rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
      >
        <!-- mesma estrutura dos cards -->
        <div v-if="item.image" class="mb-4">
          <img :src="item.image" :alt="item.title" class="w-full h-40 object-cover rounded-md" />
        </div>
        <div class="mb-4 text-secondary flex justify-center text-3xl">
          <i v-if="item.type==='pdf'" class="fas fa-file-pdf fa-2x"></i>
          <i v-else-if="item.type==='article'" class="fas fa-newspaper fa-2x"></i>
          <i v-else-if="item.type==='podcast'" class="fas fa-podcast fa-2x"></i>
        </div>
        <h3 class="text-xl font-medium mb-1">{{ item.title }}</h3>
        <p class="text-xs text-gray-500 mb-2">
          {{ new Date(item.date).toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'}) }}
        </p>
        <p class="text-sm flex-1 mb-4">{{ item.description }}</p>
        <a :href="item.link" target="_blank" class="mt-auto btn btn-outline-primary">
          {{ item.buttonText }}
        </a>
      </div>
    </div>
  </section>
</template>
