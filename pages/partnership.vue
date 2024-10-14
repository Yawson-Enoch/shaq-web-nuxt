<template>
  <main class="pb-12 md:pb-24 space-y-16 md:space-y-32">
    <!-- hero section -->
    <div class="bg-[#DFEDD7] py-12 md:py-24">
      <div
        class="container flex flex-col md:grid md:grid-cols-[max-content_auto] gap-x-8 gap-y-8 lg:gap-x-10 xl:gap-x-20 md:place-items-center"
      >
        <div>
          <h1 class="max-w-[42.9375rem]">
            Expand Your Business with Our Platform
          </h1>
          <p class="mt-5 md:mt-10 max-w-[29.1875rem]">
            Join ShaQApp today to take your retail shop, pharmacy, restaurant,
            or grocery store online with ease. Our user-friendly e-commerce
            platform helps you grow your business and connect with a supportive
            community that’s ready to help you succeed.
          </p>
          <Button size="lg" class="mt-6 md:mt-12">Become a vendor</Button>
        </div>
        <NuxtImg src="/partnership-hero.png" />
      </div>
    </div>

    <OurServices />

    <!-- download the app -->
    <div
      class="relative content-[''] after:absolute after:inset-0 after:-z-10 after:bg-[#DFEDD7] bg-[url('/bg-pattern.png')] py-12 md:py-24"
    >
      <div
        class="container flex flex-col-reverse gap-y-8 md:justify-center md:grid md:grid-cols-[auto_max-content] gap-x-8 lg:gap-x-20 xl:gap-x-40 md:place-items-center"
      >
        <div class="grid place-items-center">
          <h2 class="text-center">Download the vendor app</h2>
          <NuxtImg src="/qr-code-scanner.png" class="mt-5 md:mt-10" />
          <div class="grid place-items-center mt-4 md:mt-8">
            <p>Scan to download</p>
            <p>Or</p>
            <p>Download from</p>
          </div>
          <div class="flex flex-wrap gap-4 mt-5 md:mt-10 justify-center">
            <NuxtLink external to="https://app.shaqapp.com/">
              <NuxtImg src="/appstore.png" />
            </NuxtLink>
            <NuxtLink external to="https://app.shaqapp.com/">
              <NuxtImg src="/playstore.png" />
            </NuxtLink>
          </div>
        </div>
        <NuxtImg src="/vendor-app.png" />
      </div>
    </div>

    <!-- why do business with shaq -->
    <div
      class="container flex flex-col lg:gap-x-16 xl:gap-x-20 gap-y-8 gap-x-8 md:justify-center md:grid md:grid-cols-[auto_max-content]"
    >
      <NuxtImg src="/payment.png" />
      <div>
        <h2>Why do business with ShaQApp</h2>
        <div class="mt-7 md:mt-14 gap-y-6 md:gap-y-12 grid">
          <div class="gap-x-2 md:gap-x-4 grid grid-cols-[auto_1fr]">
            <div
              class="size-6 md:size-8 rounded-full bg-primary text-white flex items-center justify-center"
            >
              1
            </div>

            <div>
              <p
                class="text-xl font-semibold scroll-m-20 tracking-tight text-balance leading-none"
              >
                Empower Your Business
              </p>
              <li class="mt-2 md:mt-4 text-muted-foreground max-w-[36rem]">
                Transition your business to the digital age with ease to enhance
                visibility and achieve growth and success.
              </li>
            </div>
          </div>
          <div class="gap-x-2 md:gap-x-4 grid grid-cols-[auto_1fr]">
            <div
              class="size-6 md:size-8 rounded-full bg-primary text-white flex items-center justify-center"
            >
              2
            </div>

            <div>
              <p
                class="text-xl font-semibold scroll-m-20 tracking-tight text-balance leading-none"
              >
                Grow Together
              </p>
              <li class="mt-2 md:mt-4 text-muted-foreground max-w-[36rem]">
                With ShaQApp, you gain access to valuable resources, dedicated
                support, and a network that fosters collaboration and continuous
                improvement, ensuring that your business thrives..
              </li>
            </div>
          </div>
          <div class="gap-x-2 md:gap-x-4 grid grid-cols-[auto_1fr]">
            <div
              class="size-6 md:size-8 rounded-full bg-primary text-white flex items-center justify-center"
            >
              3
            </div>

            <div>
              <p
                class="text-xl font-semibold scroll-m-20 tracking-tight text-balance leading-none"
              >
                Boost Efficiency
              </p>
              <li class="mt-2 md:mt-4 text-muted-foreground max-w-[36rem]">
                Leverage advanced features designed to enhance your business
                processes through insights.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- grow your business -->
    <div class="container grid place-items-center">
      <h2 class="text-center max-w-[30rem]">
        Grow your business by listing your restaurants, pharmacies, grocery and
        retail shops on ShaQApp
      </h2>
      <Button size="lg" class="mt-6 md:mt-12">Become a vendor</Button>
    </div>
  </main>
</template>
