<script setup lang="ts">
import NotificationDropdown from './dropdown/NotificationDropdown.vue';
import ProfileDropdown from './dropdown/ProfileDropdown.vue';
import { ref, onMounted, computed, onUnmounted } from 'vue';

const authenticatedUser = ref(JSON.parse(localStorage.getItem('authenticatedUser') || '{}'));

// dropdown imports
// const sDrawer = ref(true);
</script>

<template>
  <!------Header-------->
  <VAppBar :elevation="10">
    <div class="w-100 d-flex justify-content-between align-items-center" style="max-width: 100%">
      <div class="w-100 d-flex align-items-center ml-2 ml-sm-4 mr-1 mr-sm-2">
        <img src="/assets/images/logo/logo.png" height="60" alt="logo" />
      </div>
      <VSpacer />
      <ProfileDropdown />
      <!-- <div class="notibody py-0" style="color: #000; font-size: 1.5em; line-height: 1.4">
        <h5 class="page-title mb-0">
          <span style="color: #048c7f">Kolonaire</span>
          {{ authenticatedUser !== null ? authenticatedUser.name : '' }},
        </h5>
      </div> -->
      <!-- <VAppBarNavIcon /> -->
      <!-- <NotificationDropdown /> -->
      <!-- <ProfileDropdown /> -->
    </div>
  </VAppBar>
</template>

<style scoped>
.notibody {
  color: #99999d;
  padding: 0;
  transition: transform 300ms ease;
  z-index: 5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.notibody h5 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: normal;
  word-break: keep-all;
}

.notibody {
  transform: translateX(0.25rem);
}
</style>
