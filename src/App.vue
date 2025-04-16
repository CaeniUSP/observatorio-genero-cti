
<template>

  <div class="px-4 sm:px-6 md:px-10 font-sans">
    <Navbar />
    <HeroSection />
    <SobreSection />
    <EquipeSection />
    <IndicadoresSection />
    <PublicacoesSection />
    <ContatoSection />
    <FooterSection />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import SobreSection from './components/SobreSection.vue'
import IndicadoresSection from './components/IndicadoresSection.vue'
import PublicacoesSection from './components/PublicacoesSection.vue'
import EquipeSection from './components/EquipeSection.vue'
import ContatoSection from './components/ContatoSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>
