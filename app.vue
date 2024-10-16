<script setup lang="ts">
const config = useRuntimeConfig();

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
  titleTemplate: (title) =>
    title === 'ShaQApp' ? title : `${title} | ShaQApp`,

  title,
  description,

  ogTitle: title,
  ogDescription: description,
  ogImage: `${config.public.siteUrl}/og-image.png`,
  ogImageAlt: 'ShaQApp Website',

  /* twitter:image is same as og:image 
  ref: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
  */
  twitterSite: '@gybex_enock',
  twitterCreator: '@gybex_enock',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
