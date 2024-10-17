<script setup lang="ts"></script>

<template>
  <footer class="bg-primary-900 text-border md:pt-28 md:pb-20 pt-14 pb-10">
    <div class="container md:space-y-32 space-y-16">
      <!-- links section -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-16">
        <!-- logo, description, cta -->
        <div class="space-y-6">
          <NuxtLink to="/">
            <NuxtImg src="/shaq-app-logo-light.webp" alt="ShaQApp Logo" />
          </NuxtLink>
          <p>Life made easy</p>
          <Button size="sm" class="bg-white text-primary hover:bg-white/90"
            >Order in the app</Button
          >
        </div>
        <!-- services -->
        <div class="space-y-4">
          <h4 class="text-white">Services</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink external to="https://app.shaqapp.com/"
                >Pharmacy</NuxtLink
              >
            </li>
            <li>
              <NuxtLink external to="https://app.shaqapp.com/"
                >Shop Online</NuxtLink
              >
            </li>
            <li>
              <NuxtLink external to="https://app.shaqapp.com/"
                >Bills & Payments</NuxtLink
              >
            </li>
            <li>
              <NuxtLink external to="https://app.shaqapp.com/">Food</NuxtLink>
            </li>
            <li>
              <NuxtLink external to="https://app.shaqapp.com/"
                >Groceries</NuxtLink
              >
            </li>
          </ul>
        </div>
        <!-- resources -->
        <div class="space-y-4">
          <h4 class="text-white">Resources</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink external to="https://app.shaqapp.com/"
                >Become a Rider</NuxtLink
              >
            </li>
            <li>
              <NuxtLink external to="https://app.shaqapp.com/"
                >Become a Vendor</NuxtLink
              >
            </li>
            <li>
              <NuxtLink external to="https://app.shaqapp.com/"
                >Ads & Promotions</NuxtLink
              >
            </li>
            <li>
              <NuxtLink external to="https://app.shaqapp.com/"
                >Report Order</NuxtLink
              >
            </li>
            <li>
              <NuxtLink external to="https://app.shaqapp.com/"
                >Help Center</NuxtLink
              >
            </li>
          </ul>
        </div>
        <!-- company -->
        <div class="space-y-4">
          <h4 class="text-white">Company</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/contact">Contact</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">About Us</NuxtLink>
            </li>
            <li>
              <NuxtLink external to="https://app.shaqapp.com/"
                >Privacy</NuxtLink
              >
            </li>
            <li>
              <NuxtLink external to="https://app.shaqapp.com/">Terms</NuxtLink>
            </li>
          </ul>
        </div>
        <!-- social and store links -->
        <div class="space-y-8">
          <!-- social icons -->
          <div class="flex gap-x-6">
            <InstagramIcon />
            <XIcon />
            <FacebookIcon />
            <YouTubeIcon />
          </div>
          <!-- store links -->
          <div class="grid gap-y-4">
            <NuxtLink external to="https://app.shaqapp.com/">
              <NuxtImg src="/appstore.webp" />
            </NuxtLink>
            <NuxtLink external to="https://app.shaqapp.com/">
              <NuxtImg src="/playstore.webp" />
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- copyright section -->
      <div class="flex items-center gap-x-3 justify-center">
        <CopyrightIcon />
        <p class="text-pretty">2024 ShaQApp All rights reserved</p>
      </div>
    </div>
  </footer>
</template>
