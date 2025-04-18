<script setup>
import { computed } from 'vue'
import recursos from '../data/recursos.json'

const recursosOrdenados = computed(() =>
  recursos.slice().sort((a,b)=> new Date(b.date)-new Date(a.date))
)
</script>
