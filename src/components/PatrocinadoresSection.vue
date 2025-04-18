<template>
    <section id="patrocinadores" class="py-16 bg-gray-50 text-gray-800">
      <div class="container max-w-6xl mx-auto px-4 sm:px-6 text-center mb-8">
        <h2 class="text-3xl font-semibold">Apoio</h2>
      </div>
      <div class="container max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex flex-wrap justify-center items-center">
          <a
            v-for="s in sponsors"
            :key="s.alt"
            :href="s.link"
            target="_blank"
            class="relative logo group m-4 transition-transform hover:scale-105"
          >
            <!-- logo em grayscale -->
            <img
              :src="s.src"
              :alt="s.alt"
              class="w-full h-full object-contain filter grayscale
                     group-hover:grayscale-0 transition-all duration-300"
            />
            <!-- overlay com nome -->
            <div
              class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span class="text-white font-medium">{{ s.alt }}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import logoFflch  from '../assets/03_logo_fflch_simplificado.png'
  import logoCnpq   from '../assets/CNPq_v2017_rgb.png'
  import logoFapesp from '../assets/Logo_fapesp_em_preto.svg'
  import logoGender from '../assets/logo_gender_STI.svg'
  import logoCaeni from '../assets/Logo_Caeni.png'
  import logoUSP    from '../assets/usp-logo-png-1.png'
  
  const sponsors = [
    { src: logoFapesp, alt: 'FAPESP',     link: '#' },
    { src: logoGender, alt: 'Gender‑STI', link: '#' },
    { src: logoCaeni, alt: 'CAENI', link: '#' },
    { src: logoUSP, alt: 'USP', link: '#' },
    { src: logoFflch,  alt: 'FFLCH USP',  link: '#' },
    { src: logoCnpq,   alt: 'CNPq',       link: '#' },
  ]
  </script>
  
  <style scoped>
  .logo {
    width: 14rem;   /* 128px */
    height: 10rem;  /*  64px */
  }
  </style>
  