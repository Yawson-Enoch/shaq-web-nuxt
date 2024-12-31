<script setup lang="ts">
const title = 'About Us';
const description =
  'We take immense pride in our exceptional software and operations teams that work together seamlessly to build our revolutionary super app.';

definePageMeta({
  layout: false,
});

useSeoMeta({
  title,
  description,

  ogTitle: title,
  ogDescription: description,
});
</script>

<template>
  <section class="grid grid-rows-[max-content_1fr_max-content]">
    <!-- hero section -->
    <div
      class="grid grid-rows-[max-content_1fr] bg-cover bg-no-repeat bg-center xl:min-h-[52.875rem]"
      style="
        background-image: linear-gradient(
            hsl(0 0% 0% / 0.5),
            hsl(0 0% 0% / 0.5)
          ),
          url('/about-hero-image.webp');
      "
    >
      <Header :has-dark-bg="true" />
      <div
        class="grid place-items-center place-content-center space-y-8 md:space-y-16 py-6 md:py-12 container"
      >
        <h1 class="text-white text-center">We are ShaQApp</h1>
        <p class="text-white text-center max-w-[50rem]">
          We take immense pride in our exceptional software and operations teams
          that work together seamlessly to build our revolutionary super app.
        </p>
      </div>
    </div>
    <!-- main content -->
    <main class="py-12 md:py-24 space-y-16 md:space-y-32">
      <!-- we're shaqapp -->
      <div
        class="container flex flex-col-reverse gap-y-8 md:grid md:grid-cols-[max-content_auto] gap-x-8 lg:gap-x-20 xl:gap-x-40 md:place-items-center"
      >
        <div>
          <h2>We are ShaQApp</h2>
          <p class="text-muted-foreground mt-3 md:mt-6 max-w-[42rem]">
            At ShaQApp, our mission is to empower and grow African economies by
            creating connections within communities. By ensuring that consumers
            receive their goods, we help local merchants flourish and provide
            delivery partners with sustainable income opportunities. Our
            platform bridges the gap, supporting the growth and prosperity of
            businesses and individuals alike across Africa.
          </p>
        </div>
        <NuxtImg src="/we-are-shaqapp.webp" />
      </div>

      <!-- what makes us the best -->
      <div class="bg-[#DFEDD7]">
        <div
          class="container grid place-items-center place-content-center xl:min-h-[60.625rem] py-6 md:py-12"
        >
          <h2 class="text-center">What makes us the best</h2>
          <NuxtImg src="/what-makes-us-the-best.webp" class="mt-8 md:mt-16" />
        </div>
      </div>

      <!-- our leadership -->
      <div class="container">
        <h1></h1>
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <!-- image - name - title -->
            <NuxtImg src="/ceo.webp" />
            <p class="mt-3 md:mt-6 text-lg font-semibold">
              Anthony Owusu Ansah
            </p>
            <p class="text-muted-foreground">Chief Executive Officer</p>
          </div>
          <div>
            <!-- image - name - title -->
            <NuxtImg src="/hob.webp" />
            <p class="mt-3 md:mt-6 text-lg font-semibold">Rhoda Folie</p>
            <p class="text-muted-foreground">Head of Businesss</p>
          </div>
          <div>
            <!-- image - name - title -->
            <NuxtImg src="/tm.webp" />
            <p class="mt-3 md:mt-6 text-lg font-semibold">Gideon Ofori</p>
            <p class="text-muted-foreground">Tech Manager</p>
          </div>
        </div>
      </div>

      <!-- we are shaqapp -->
      <div
        class="container flex flex-col gap-y-8 md:grid md:grid-cols-[auto_max-content] gap-x-8 lg:gap-x-20 xl:gap-x-40 md:place-items-center"
      >
        <NuxtImg src="/blur-image.webp" />
        <div>
          <h2>We are ShaQApp</h2>
          <p class="text-muted-foreground mt-3 md:mt-6 max-w-[32.125rem]">
            At ShaQApp, our mission is to empower and grow African economies by
            creating connections within communities. By ensuring that consumers
            receive their goods, we help local merchants flourish and provide
            delivery partners with sustainable income opportunities.
          </p>
          <Button class="mt-5 md:mt-10">Read More</Button>
        </div>
      </div>

      <!-- join our team -->
      <div
        class="container grid place-items-center place-content-center gap-y-6 md:gap-y-12"
      >
        <h2 class="text-center">
          Join our team in making life easy for people
        </h2>
        <Button>View open roles</Button>
      </div>
    </main>
    <!-- newsletter - footer -->
    <div>
      <Newsletter />
      <Footer />
    </div>
  </section>
</template>
