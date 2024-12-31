<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { LoaderIcon } from 'lucide-vue-next';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { Textarea } from '~/components/ui/textarea';

const formSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Must be 2 or more characters long' }),
  email: z.string().trim().email({ message: 'Invalid email address' }),
  phone: z
    .string()
    .min(9, { message: 'Phone must be at least 9 chars' })
    .max(13, { message: 'Phone must be maximum 13 chars' }),
  message: z
    .string()
    .trim()
    .min(5, { message: 'Message must be 5 or more characters long' }),
});

const { defineField, handleSubmit, errors, isSubmitting, resetForm } = useForm({
  validationSchema: toTypedSchema(formSchema),
});

const [fullName, fullNameField] = defineField('fullName');
const [email, emailField] = defineField('email');
const [phone, phoneField] = defineField('phone');
const [message, messageField] = defineField('message');

const onSubmit = handleSubmit((values) => {
  console.log(values);
  resetForm();
});

const id = useId();

const title = 'Contact Us';
const description =
  'Reach out to us for all your product enquires, order follow up and enquiries on working with us.';

useSeoMeta({
  title,
  description,

  ogTitle: title,
  ogDescription: description,
});
</script>

<template>
  <main class="py-12 md:py-24 space-y-8 md:space-y-16 container">
    <!-- title - desc -->
    <div class="grid justify-items-center gap-y-4 md:gap-y-8 text-center">
      <h2>Contact Us</h2>
      <p class="text-muted-foreground">
        Reach out to us for all your product enquires, order follow up and
        enquiries on working with us.
      </p>
    </div>

    <!-- image - form -->
    <div class="grid md:grid-cols-2 gap-x-8 lg:gap-x-20">
      <NuxtImg src="/map.webp" class="max-md:hidden" />

      <div>
        <h3>Send us a message</h3>

        <form
          class="space-y-8 md:space-y-16 mt-4 md:mt-8"
          novalidate
          @submit.prevent="onSubmit"
        >
          <!-- form fields -->
          <div class="space-y-4 md:space-y-8">
            <div class="space-y-2">
              <div class="space-y-2">
                <Label :for="id + '-fullName'">Full name</Label>
                <Input
                  type="text"
                  :id="id + '-fullName'"
                  v-model="fullName"
                  v-bind="fullNameField"
                />
              </div>
              <div class="text-red-500">{{ errors.fullName }}</div>
            </div>

            <div class="space-y-2">
              <div class="space-y-2">
                <Label :for="id + '-email'">Email</Label>
                <Input
                  type="email"
                  :id="id + '-email'"
                  v-model="email"
                  v-bind="emailField"
                />
              </div>
              <div class="text-red-500">{{ errors.email }}</div>
            </div>

            <div class="space-y-2">
              <div class="space-y-2">
                <Label :for="id + '-phone'">Phone Number</Label>
                <div class="flex items-center gap-x-4">
                  <div
                    class="h-10 md:h-14 rounded-md md:rounded-[6px] bg-[#F3F3EF] px-6 py-2 flex items-center gap-x-2 justify-center"
                  >
                    <NuxtImg src="/ghana.webp" />
                    <p>+233</p>
                  </div>
                  <Input
                    type="text"
                    :id="id + '-phone'"
                    inputmode="numeric"
                    v-model="phone"
                    v-bind="phoneField"
                  />
                </div>
              </div>
              <div class="text-red-500">{{ errors.phone }}</div>
            </div>

            <div class="space-y-2">
              <div class="space-y-2">
                <Label :for="id + '-message'">Message</Label>
                <Textarea
                  :id="id + '-message'"
                  v-model="message"
                  v-bind="messageField"
                />
              </div>
              <div class="text-red-500">{{ errors.message }}</div>
            </div>
          </div>

          <!-- submit btn -->
          <Button
            size="lg"
            class="w-full md:h-12 md:text-lg"
            :disabled="isSubmitting"
          >
            <LoaderIcon v-if="isSubmitting" class="animate-spin" />
            <template v-else>Submit</template>
          </Button>
        </form>
      </div>
    </div>
  </main>
</template>
