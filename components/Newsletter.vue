<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { LoaderIcon } from 'lucide-vue-next';
import { useForm } from 'vee-validate';
import * as z from 'zod';

/* create the form - with zod schema */
const { defineField, handleSubmit, isSubmitting, errors } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      email: z.string().trim().email({ message: 'Invalid email address' }),
    })
  ),
});

/* define fields */
const [email, emailField] = defineField('email');

/* submit handler */
const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <form
    novalidate
    @submit.prevent="onSubmit"
    class="relative content-[''] after:absolute after:inset-0 after:-z-10 after:bg-[#ACE4AA] bg-[url('/pattern.webp')] pt-8 md:pt-16 pb-20 md:pb-40"
  >
    <div
      class="container flex flex-col items-center justify-center gap-y-8 md:gap-y-16"
    >
      <h2 class="text-center">Subscribe to our Newsletter</h2>

      <div class="grid gap-y-2 w-full">
        <div class="flex w-full items-center justify-center gap-x-4 md:gap-x-8">
          <Input
            class="md:h-16 md:px-8 flex rounded-sm bg-[#f0f0eb] w-[min(100%,40.1875rem)] placeholder:text-[#606060] placeholder:text-sm md:placeholder:text-xl text-sm md:text-xl"
            placeholder="Enter your email address"
            type="email"
            v-model="email"
            v-bind="emailField"
          />
          <Button
            variant="plain"
            :disabled="isSubmitting"
            class="rounded-sm bg-[#f0f0eb] md:h-16 md:text-xl md:px-12"
          >
            <LoaderIcon v-if="isSubmitting" class="animate-spin" />
            <template v-else>Subscribe</template>
          </Button>
        </div>
        <p class="text-red-600 text-center">
          {{ errors.email }}
        </p>
      </div>
    </div>
  </form>
</template>
