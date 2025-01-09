<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useUserStore } from '@/store/userStore';
import { useRoute, useRouter } from 'vue-router';
import { useLocale } from 'vuetify';
import { login } from '@/api/user';
import { useSnackbarStore } from '@/store';

const { t } = useLocale();
const checkbox = ref(true);
const formRules = reactive({
  username: [
    (value: string) => {
      if (value) return true;
      return t('username required');
    }
  ],
  password: [
    (value: string) => {
      if (value) return true;
      return t('password required');
    }
  ]
});
const formModel = reactive({
  username: '',
  password: 'KC'
});

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();
const submiting = ref(false);
const formValid = ref(false);
const snackbarStore = useSnackbarStore();
const handleSubmit = async () => {
  if (formValid.value === true) {
    submiting.value = true;
    try {
      const { data } = await login(formModel);
      const { access_token } = data;
      submiting.value = false;
      snackbarStore.showSuccessMessage('Congratulations 🎉, You Signed In Successfully!');
      userStore.setToken(access_token);
      router.replace(route.query.to ? String(route.query.to) : '/');
    } catch (error) {
      submiting.value = false;
      console.log(error);
    }
  }
};
</script>

<template>
  <VForm v-model="formValid" @submit.prevent>
    <VRow class="d-flex mb-3">
      <VCol cols="12">
        <VLabel class="mb-1">{{ $t('username') }} ({{ $t('Full Name') }})</VLabel>
        <VTextField
          variant="outlined"
          color="primary"
          name="username"
          :rules="formRules.username"
          v-model="formModel.username"
        />
      </VCol>
      <VCol cols="12">
        <VLabel class="mb-1">{{ $t('kolo_id') }}</VLabel>
        <VTextField
          variant="outlined"
          type="text"
          color="primary"
          :rules="formRules.password"
          v-model="formModel.password"
        />
      </VCol>
      <VCol cols="12" class="pt-0">
        <div class="d-flex flex-wrap align-center ml-n2">
          <VCheckbox v-model="checkbox" color="primary" hide-details>
            <template v-slot:label>{{ $t('remember') }}</template>
          </VCheckbox>
          <div class="ml-auto">
            <a
              href="https://wa.me/8121253150?text=Hello Support, I am (__Your Username__) of Owo Kolo Challenge, I'd like to retrieve my Unique Identifier code."
              class="text-primary text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ $t('forget_id') }} ?
            </a>
            <!-- <RouterLink
              to="https://wa.me/8119607193?text=Hello%Support,%I%am%____%of%Owo%Kolo%Challenge,%I'd%like%to%retrieve%my%Unique%Identifier."
              class="text-primary text-decoration-none"
              >{{ $t('forget_id') }} ?</RouterLink
            > -->
          </div>
        </div>
      </VCol>
      <VCol cols="12" class="pt-0">
        <VBtn :loading="submiting" :muted="submiting" type="submit" color="#048c7f" block flat @click="handleSubmit">{{
          $t('sign_in')
        }}</VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>

<style lang="scss">
.text-primary {
  color: #048c7f !important;
}
</style>
