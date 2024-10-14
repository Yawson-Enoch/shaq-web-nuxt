<script setup lang="ts">
import { MenuIcon } from 'lucide-vue-next';
import Sheet from './ui/sheet/Sheet.vue';
import SheetTrigger from './ui/sheet/SheetTrigger.vue';
import SheetContent from './ui/sheet/SheetContent.vue';
import SheetHeader from './ui/sheet/SheetHeader.vue';
import SheetTitle from './ui/sheet/SheetTitle.vue';
import SheetDescription from './ui/sheet/SheetDescription.vue';
import { useMediaQuery } from '@vueuse/core';

const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Partnership',
    to: '/partnership',
  },
  {
    label: 'Riders',
    to: '/riders',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Contact Us',
    to: '/contact',
  },
];

const { hasDarkBg = false } = defineProps<{
  hasDarkBg?: boolean;
}>();

const open: Ref<boolean> = ref(false);

const isLargeScreen = useMediaQuery('(min-width: 768px)');

watch(
  [open, isLargeScreen],
  ([newOpen, newIsLargeScreen]) => {
    if (newOpen && newIsLargeScreen) {
      open.value = false;
    }
  },
  { immediate: true }
);
</script>

<template>
  <!-- header -->
  <header class="max-md:shadow-lg shadow-black/5">
    <div class="flex justify-between items-center h-20 container">
      <!-- logo -->
      <NuxtLink to="/">
        <NuxtImg
          :src="
            hasDarkBg ? '/shaq-app-logo-light.png' : '/shaq-app-logo-dark.png'
          "
          alt="ShaQApp Logo"
        />
      </NuxtLink>
      <!-- links and cta -->
      <nav>
        <ul class="flex gap-x-4 md:gap-x-8 items-center max-md:hidden">
          <template v-for="link of links" :key="link.label">
            <li v-if="link.label !== 'Home'">
              <NuxtLink
                :to="link.to"
                :class="[hasDarkBg ? 'text-white' : 'text-foreground']"
                active-class="!text-primary underline"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </template>
          <!-- cta -->
          <Button as-child size="sm">
            <NuxtLink external to="https://app.shaqapp.com/"
              >Order in the app</NuxtLink
            >
          </Button>
        </ul>
      </nav>

      <!-- hamburger menu -->
      <Sheet v-model:open="open">
        <SheetTrigger class="md:hidden" v-bind="$attrs" as-child>
          <Button size="icon" class="md:hidden">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent class="md:hidden" side="left">
          <SheetHeader className="sr-only">
            <SheetTitle>Nav menu</SheetTitle>
            <SheetDescription>Mobile navigation menu</SheetDescription>
          </SheetHeader>
          <div class="space-y-12">
            <div class="h-20 container flex items-center justify-start">
              <!-- logo -->
              <SheetClose>
                <NuxtLink to="/">
                  <NuxtImg src="/shaq-app-logo-dark.png" alt="ShaQApp Logo" />
                </NuxtLink>
              </SheetClose>
            </div>

            <!-- links and cta -->
            <nav>
              <div class="container">
                <ul class="flex-col flex gap-y-8">
                  <template v-for="link of links" :key="link.label">
                    <li v-if="link.label !== 'Home'">
                      <SheetClose>
                        <NuxtLink
                          :to="link.to"
                          class="font-medium"
                          active-class="text-primary underline"
                        >
                          {{ link.label }}
                        </NuxtLink>
                      </SheetClose>
                    </li>
                  </template>
                  <!-- cta -->
                  <Button
                    as-child
                    class="mt-10 w-fit mr-auto"
                    @click="open = false"
                    size="sm"
                  >
                    <NuxtLink external to="https://app.shaqapp.com/"
                      >Order in the app</NuxtLink
                    >
                  </Button>
                </ul>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </header>
</template>
