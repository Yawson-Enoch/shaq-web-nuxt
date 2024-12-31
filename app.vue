<script setup lang="ts">
/* siteUrl fallback to localhost to preview og on localhost */
const config = useRuntimeConfig();
const reqUrl = useRequestURL();
const siteUrl =
  config.public.siteUrl || `http://localhost:${reqUrl.port || 3000}`;

const title = 'ShaQApp';
const description =
  'Enjoy ultimate convenience with our super app: food, pharmacy, grocery, deliveries, seamless ecg & water bill payments, and easy airtime and data top-ups—all in one place.';

/* charset and meta viewport are set by default */
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [{ rel: 'icon', href: '/favicon.ico' }],
});

useSeoMeta({
  titleTemplate: (t) => (t === title ? t : `${t} | ${title}`),

  title,
  description,

  ogTitle: title,
  ogDescription: description,
  ogImage: `${siteUrl}/og-image.png`,
  ogImageAlt: 'ShaQApp Website',

  twitterCreator: '@gybex_enock',
  twitterCard: 'summary_large_image',

  themeColor: '#ffffff',
  /* prevent page indexing in search engines */
  robots: 'noindex, nofollow',
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
