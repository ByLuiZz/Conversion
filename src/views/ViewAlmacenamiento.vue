<template>
  <div>
      <h1>Conversor de Unidades de Almacenamiento</h1>
      <ConversorAlmacenamiento/>
  </div>
</template>
<script>
// @ is an alias to /src
import ConversorAlmacenamiento from '@/components/ConversorAlmacenamiento.vue'

export default {
  name: 'ViewAlmacenamiento',
  components: {
    ConversorAlmacenamiento
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
