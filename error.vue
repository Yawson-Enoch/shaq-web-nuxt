<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true,
  },
});

const is404 = computed(() => props.error?.statusCode === 404);

useHead({
  htmlAttrs: {
    lang: 'en',
  },
});

const title = is404 ? 'Page not found' : 'An error occured';
const description = is404
  ? 'This page could not be found. Check the URL or go to the homepage.'
  : 'Something went wrong! Please try again later or go to the homepage.';

useSeoMeta({
  title,
  description,
});
</script>

<template>
  <div
    class="container grid min-h-dvh place-content-center place-items-center gap-y-4 py-4 md:py-8"
  >
    <div class="space-y-2 flex flex-col items-center justify-center">
      <p className="text-center text-3xl font-semibold">{{ title }}</p>
      <p class="text-center">
        {{ description }}
      </p>
    </div>
    <Button @click="clearError({ redirect: '/' })">Go Home</Button>
  </div>
</template>
