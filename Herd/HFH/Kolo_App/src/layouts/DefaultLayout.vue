<script setup lang="ts">
// import { RouterView, useRoute } from 'vue-router';
// import { useLocale } from 'vuetify';
import AppSidebar from '@/components/AppSidebar.vue';
import AppToolbar from '@/components/AppToolbar.vue';
import { ref } from 'vue';
// const route = useRoute();
// const { t } = useLocale();

const authenticatedUser = ref(JSON.parse(localStorage.getItem('authenticatedUser') || '{}'));
</script>

<template>
  <VApp class="app">
    <!------Sidebar-------->
    <!-- <AppSidebar /> -->
    <!------Header-------->
    <AppToolbar />
    <!------Page-------->
    <VMain class="app-main">
      <!-- <template #item.status="{ item }"> -->
      <!-- <VChip class="w-100 p-0 m-0" style="border-radius: 0px"> -->
      <!-- <div style="background-color: RGBA(160, 33, 239, 0.1)">81cdc6 -->
      <div style="background-color: #b3e8dc">
        <marquee scrollamount="3" class="" width="100%">
          <span class="" style="font-size: 13px; color: #048c7f">
            Stay consistent and keep the energy up -
            <span class="" style="font-weight: 600">Owo Kolo Challenge</span> is yours to conquer! Remember persistence
            is key, every step counts.
          </span>
        </marquee>
      </div>
      <!-- </VChip> -->
      <!-- </template> -->
      <VContainer class="app-container py-0">
        <div class="page-wrapper">
          <h3 class="page-title">
            Hello <span style="color: #048c7f">Kolonaire</span>,
            <!-- Hello {{ authenticatedUser.name }}, -->
            <!-- {{ t(String(route.name).toLocaleLowerCase()) }} -->
          </h3>
          <RouterView />
        </div>
      </VContainer>
    </VMain>
  </VApp>
</template>

<style lang="scss">
.app-main {
  background-color: var(--v-theme-background, '#f6f6f6');
  .app-container {
    max-width: 1440px;
    .page-title {
      color: #3f434a;
      font-size: 28px;
      font-weight: 700;
      padding: 0px 0 10px;
    }
  }
}
</style>
