<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const isShowMore = ref(false);
</script>

<template>
  <main class="py-12 md:py-24 space-y-16 md:space-y-32">
    <!-- hero section -->
    <div
      class="container flex flex-col md:grid md:grid-cols-[max-content_auto] gap-x-8 gap-y-8 lg:gap-x-10 xl:gap-x-20 md:place-items-center"
    >
      <div>
        <h1 class="max-w-[42.9375rem]">
          Become a ShaQApp rider and start earning today
        </h1>
        <p class="mt-5 md:mt-10 max-w-[29.1875rem] text-muted-foreground">
          Delivering smiles and cashing in on your journey—join us as a rider
          and make every delivery a rewarding adventure!
        </p>
        <Button size="lg" class="mt-6 md:mt-12">Ride with ShaQApp</Button>
      </div>
      <NuxtImg src="/rider-delivery.png" />
    </div>

    <!-- what you need to work with shaqapp -->
    <div class="container space-y-6 md:space-y-12">
      <h2>Here's what you need to work with ShaQApp</h2>

      <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
        <div class="flex flex-col items-center">
          <!-- 1: icon - title - desc -->
          <MotorbikeIcon />
          <p class="font-semibold text-lg mt-3 md:mt-6 text-center">
            Motor Bike, Cars, Trucks, Bicycle
          </p>
          <p
            class="max-w-[19rem] text-center mt-2 md:mt-4 text-muted-foreground"
          >
            A road worthy motor bike, car, truck, bicycle and safety equipment.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <!-- 2: icon - title - desc -->
          <DriverLicenseIcon />
          <p class="font-semibold text-lg mt-3 md:mt-6 text-center">
            Driver's License
          </p>
          <p
            class="max-w-[19rem] text-center mt-2 md:mt-4 text-muted-foreground"
          >
            Valid driver's license and insurance
          </p>
        </div>
        <div class="flex flex-col items-center">
          <!-- 3: icon - title - desc -->
          <PhotoCheckIcon />
          <p class="font-semibold text-lg mt-3 md:mt-6 text-center">
            Valid Photo ID
          </p>
          <p
            class="max-w-[19rem] text-center mt-2 md:mt-4 text-muted-foreground"
          >
            A government issued ID and must be 18+
          </p>
        </div>
        <div class="flex flex-col items-center">
          <!-- 4: icon - title - desc -->
          <SmartPhoneIcon />
          <p class="font-semibold text-lg mt-3 md:mt-6 text-center">
            Smart Phone
          </p>
          <p
            class="max-w-[19rem] text-center mt-2 md:mt-4 text-muted-foreground"
          >
            Must have android 6+ or iPhone 13.6 or higher.
          </p>
        </div>
      </div>
    </div>

    <!-- how the shaqapp rider works -->
    <div
      class="container flex flex-col lg:gap-x-16 xl:gap-x-20 gap-y-8 gap-x-8 md:justify-center md:grid md:grid-cols-[auto_max-content]"
    >
      <NuxtImg src="/rider-app-snapshot.png" />
      <div>
        <h2>How the ShaQApp rider works</h2>
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
                Accept incoming orders
              </p>
              <li class="mt-2 md:mt-4 text-muted-foreground max-w-[36rem]">
                Receive and confirm orders directly through the app.
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
                Pickup from vendors
              </p>
              <li class="mt-2 md:mt-4 text-muted-foreground max-w-[36rem]">
                Collect the items from our partner vendors for delivery.
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
                Deliver to customers and Earn
              </p>
              <li class="mt-2 md:mt-4 text-muted-foreground max-w-[36rem]">
                Drop off the orders to customers and earn money with each
                successful delivery.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- frequently asked questions -->
    <div class="container">
      <Accordion type="single" collapsible class="max-w-screen-lg">
        <AccordionItem value="item-1">
          <AccordionTrigger class="text-lg font-semibold"
            >How do I start earning?</AccordionTrigger
          >
          <AccordionContent class="max-w-screen-md text-muted-foreground">
            To begin, simply download ShaQ App Rider from the App Store or
            Google Play Store, create an account, and upload the required
            documents. After your registration is approved, you can start
            accepting and completing deliveries.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger class="text-lg font-semibold"
            >What documentation is required to become a rider?</AccordionTrigger
          >
          <AccordionContent class="max-w-screen-md text-muted-foreground">
            You'll need to provide your driver's license, vehicle registration,
            proof of insurance, and a recent photo. The app will walk you
            through the process of submitting these documents.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger class="text-lg font-semibold"
            >How are deliveries assigned to riders?</AccordionTrigger
          >
          <AccordionContent class="max-w-screen-md text-muted-foreground">
            Deliveries are assigned based on your location and availability. The
            app will notify you of new orders, and you can accept them based on
            where you are.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger class="text-lg font-semibold"
            >How do I receive payment for my deliveries?</AccordionTrigger
          >
          <AccordionContent class="max-w-screen-md text-muted-foreground">
            Payments are deposited directly into your chosen payment account on
            a daily basis. You can monitor your earnings through the app's
            financial dashboard.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger class="text-lg font-semibold"
            >What if I miss a delivery?</AccordionTrigger
          >
          <AccordionContent class="max-w-screen-md text-muted-foreground">
            If you miss a delivery, the app will reassign it to another rider.
            Consistent missed deliveries may impact your rating and future
            delivery opportunities.
          </AccordionContent>
        </AccordionItem>
        <template v-if="isShowMore">
          <AccordionItem value="item-6">
            <AccordionTrigger class="text-lg font-semibold"
              >Can I set my own work hours?</AccordionTrigger
            >
            <AccordionContent class="max-w-screen-md text-muted-foreground">
              Absolutely! You have the freedom to turn your availability on and
              off depending on your personal schedule.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger class="text-lg font-semibold"
              >How do I address customer complaints or
              problems?</AccordionTrigger
            >
            <AccordionContent class="max-w-screen-md text-muted-foreground">
              Report any customer issues through the app's support feature. Our
              team will review the situation and assist you in resolving it
              promptly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger class="text-lg font-semibold"
              >What should I do if my vehicle breaks down during a
              delivery?</AccordionTrigger
            >
            <AccordionContent class="max-w-screen-md text-muted-foreground">
              Notify app support immediately through the app. They'll help
              manage the delivery and, if needed, assist with arranging
              alternative transportation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger class="text-lg font-semibold"
              >Are there any fees for using the rider app?</AccordionTrigger
            >
            <AccordionContent class="max-w-screen-md text-muted-foreground">
              There are no initial costs to use the app. However, a service fee
              is deducted from each delivery payment to cover app maintenance
              and support.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger class="text-lg font-semibold"
              >How can I boost my rating?</AccordionTrigger
            >
            <AccordionContent class="max-w-screen-md text-muted-foreground">
              Enhance your rating by being punctual, professional, and
              courteous. Efficiently completing deliveries and positively
              engaging with customers will help improve your rating.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger class="text-lg font-semibold"
              >What support is available for technical issues with the
              app?</AccordionTrigger
            >
            <AccordionContent class="max-w-screen-md text-muted-foreground">
              For any technical difficulties, reach out to our support team via
              the app. We're here to help you with any problems you encounter.
            </AccordionContent>
          </AccordionItem>
        </template>

        <Button
          class="flex mx-auto mt-8 md:mt-16"
          v-if="!isShowMore"
          @click="isShowMore = true"
          >View More</Button
        >
        <Button
          class="flex mx-auto mt-8 md:mt-16"
          v-if="isShowMore"
          @click="isShowMore = false"
          >Show Less</Button
        >
      </Accordion>
    </div>

    <!-- delivering with purpose -->
    <div
      class="container flex flex-col gap-y-8 md:grid md:grid-cols-[auto_max-content] gap-x-8 lg:gap-x-20 xl:gap-x-40 md:place-items-center"
    >
      <NuxtImg src="/rider-delivery.png" />
      <div>
        <h2>Delivering with Purpose</h2>
        <p class="text-muted-foreground mt-3 md:mt-6 max-w-[42rem]">
          Join us in making each delivery more than just a drop-off. Bring joy
          and efficiency to your community while earning rewards with every
          ride. It's not just about delivering packages; it's about delivering
          smiles, satisfaction, and a sense of connection.
        </p>
        <Button class="mt-5 md:mt-10">Become a ShaQApp Rider</Button>
      </div>
    </div>

    <!-- download the riders' app -->
    <div class="grid place-items-center">
      <h2 class="text-center">Download the app and start earning</h2>
      <NuxtImg src="/qr-code-scanner.png" class="mt-5 md:mt-10" />
      <div class="grid place-items-center mt-4 md:mt-8 text-center">
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
  </main>
</template>
