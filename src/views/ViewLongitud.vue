<template>
  <div class="container">
      <h3>Conversor de Longitud</h3>
      <ConversorLongitud/>
  </div>
</template>
<script>
// @ is an alias to /src
import ConversorLongitud from '@/components/ConversorLongitud.vue'

export default {
  name: 'ViewLongitud',
  components: {
    ConversorLongitud
  }
}
</script>
