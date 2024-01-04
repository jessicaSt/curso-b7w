<template>
  <header>
    <h1>Course B7Web Exercises</h1>
    
  </header>

  <main>
    <nav class="menu">
        <RouterLink to="/listaparticipantes">Lista Participantes</RouterLink>
        <RouterLink to="/listafiltrada">Lista Filtrada</RouterLink>
        <RouterLink to="/ex43">ex43</RouterLink>
        <RouterLink to="/ex45">Semafaro</RouterLink>
      </nav>
  </main>
  <RouterView />
</template>

<script setup>
// import ListaFiltrada from './components/ListaFiltrada.vue';
// import ListaParticipantes from './components/ListaParticipantes.vue';
</script>

<style scoped>
header {
  line-height: 1.5;
}

.menu {
  display: flex;
  gap: 15px;
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
