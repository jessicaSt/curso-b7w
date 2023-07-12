<template>
  <header>
    <h1>Course B7Web Exercises</h1>
  </header>

  <main>
    <ListaParticipantes/>
  </main>
</template>

<script setup>
import ListaParticipantes from './components/ListaParticipantes.vue';
</script>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
