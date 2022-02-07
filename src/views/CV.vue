<template>
    <div id="CV">
        <pdf src="/CVAlexia.pdf"></pdf>
    </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  name: "CV",
  components: {
    pdf
  }
}
</script>

<style lang="scss" scoped>

</style>