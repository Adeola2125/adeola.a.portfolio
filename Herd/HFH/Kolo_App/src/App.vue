<script setup lang="ts">
import Snackbar from './components/Snackbar.vue';
</script>

<template>
  <VLocaleProvider>
    <RouterView />
    <Snackbar></Snackbar>
  </VLocaleProvider>
</template>

<style>
a:hover {
  text-decoration: none !important;
}

@media screen and (max-width: 767px) {
  .v-overlay__content,
  .v-overlay__content div,
  .v-overlay__content * {
    width: 100% !important;
  }
}
.v-snackbar__wrapper div,
.v-snackbar__wrapper p,
.v-snackbar__wrapper h6,
.v-snackbar__wrapper h5,
.v-snackbar__wrapper h4 {
  width: 100% !important;
  min-width: 100% !important;
}
</style>
