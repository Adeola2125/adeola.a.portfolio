<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { VBtn } from 'vuetify/lib/components/index.mjs';

const authenticatedUser = ref(JSON.parse(localStorage.getItem('authenticatedUser') || '{}'));

const items = [
  {
    title: 'Profile',
    props: {
      prependIcon: 'mdi-account-outline',
      link: true,
      to: '/profile',
      exact: true
    },
    value: '/profile'
  },
  {
    title: 'Message',
    props: {
      prependIcon: 'mdi-message-badge-outline',
      link: true,
      to: '/message',
      exact: true
    },
    to: '/message'
  },
  {
    title: 'Task',
    props: {
      prependIcon: 'mdi-check',
      link: true,
      to: '/task',
      exact: true
    },
    to: '/task'
  }
];
const router = useRouter();

const handleLogout = () => {
  router.push({
    path: '/auth/login'
  });
  sessionStorage.clear();
  localStorage.clear();
};
</script>

<template>
  <VMenu :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <div class="d-flex align-items-end mr-3 profile_wrap">
        <VBtn class="custom-hover-primary" variant="text" v-bind="props" icon>
          <VBadge dot color="success" offset-x="0" offset-y="3">
            <VAvatar size="35">
              <img src="@/assets/images/users/avatar-1.jpg" height="35" alt="user" />
            </VAvatar>
          </VBadge>
        </VBtn>

        <div
          class="notibody py-0 d-none d-md-block"
          style="color: #000; font-size: 1.5em; line-height: 1.4"
          v-bind="props"
        >
          <h5 class="page-title fs_17 mb-0" style="line-height: 1.4">
            <!-- <span style="color: #048c7f">KC</span> -->
            {{ authenticatedUser !== null ? authenticatedUser.name : '' }}
          </h5>
          <span class="fs_12 d-block" style="color: #048c7f">
            {{ authenticatedUser !== null ? authenticatedUser.code : '' }}
          </span>
        </div>
      </div>
    </template>

    <VSheet rounded="md" width="200" elevation="0" class="mt-2">
      <!-- <VList :items="items" lines="one" density="compact" class="pa-0" color="primary" /> -->
      <div class="pt-3 pb-3 px-4 text-center">
        <VBtn color="primary" variant="outlined" block @click="handleLogout">Logout</VBtn>
      </div>
    </VSheet>
  </VMenu>
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
  /* width: 14em;
  max-width: 100%; */
}

.notibody {
  transform: translateX(0.25rem);
}
.profile_wrap {
  cursor: pointer;
  width: 19em;
  max-width: 100%;
}
@media screen and (max-width: 767px) {
  .profile_wrap {
    cursor: pointer;
    width: auto !important;
    max-width: 100%;
  }
}
</style>
