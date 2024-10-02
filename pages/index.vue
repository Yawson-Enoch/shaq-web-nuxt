<script setup lang="ts">
import { CheckIcon } from 'lucide-vue-next';
import Tabs from '~/components/ui/tabs/Tabs.vue';
import TabsContent from '~/components/ui/tabs/TabsContent.vue';
import TabsList from '~/components/ui/tabs/TabsList.vue';
import TabsTrigger from '~/components/ui/tabs/TabsTrigger.vue';
</script>

<template>
  <main class="py-12 md:py-24 space-y-16 md:space-y-32">
    <!-- hero section -->
    <div
      class="bg-no-repeat bg-contain [background-position:_0_50%] md:[background-position:_0_6.25rem]"
      style="background-image: url('/hero-pattern.svg')"
    >
      <div class="container">
        <div
          class="flex flex-col-reverse md:items-center gap-x-8 lg:gap-x-20 xl:gap-x-52 gap-y-8 md:grid md:grid-cols-[max-content_1fr] lg:flex lg:justify-center lg:flex-row"
        >
          <!-- heading, description, cta -->
          <div>
            <h1 class="max-w-[34.1875rem]">
              The All-in-One App: Order Food, Shop, and Pay Bills.
            </h1>
            <p class="text-muted-foreground max-w-[30.0625rem] mt-3 md:mt-6">
              The app for everything , get your food, groceries, pharmacy, book
              various services, pay bills, buy airtime and data.
            </p>
            <Button size="lg" class="mt-5 md:mt-10">
              Download the app
              <DownloadIcon class="ml-2" />
            </Button>
          </div>
          <!-- hero image -->
          <NuxtImg src="/hero-app-snapshot.png" alt="ShaQApp" />
        </div>
      </div>
    </div>

    <!-- our services -->
    <div class="container">
      <Tabs default-value="shop-online">
        <div
          class="grid gap-x-8 lg:grid-cols-[max-content_1fr] gap-y-4 lg:gap-x-16 xl:gap-x-20"
        >
          <h2 class="lg:min-w-[31rem]">Our Services</h2>
          <div class="overflow-x-hidden">
            <TabsList
              class="scrollbar-hide flex snap-x snap-mandatory scroll-px-3 overflow-x-scroll scroll-smooth whitespace-nowrap gap-x-4"
            >
              <TabsTrigger
                class="snap-start border data-[state=active]:border-transparent"
                value="shop-online"
                >Shop Online</TabsTrigger
              >
              <TabsTrigger
                class="snap-start border data-[state=active]:border-transparent"
                value="pharmacy"
                >Pharmacy</TabsTrigger
              >
              <TabsTrigger
                class="snap-start border data-[state=active]:border-transparent"
                value="food"
                >Food</TabsTrigger
              >
              <TabsTrigger
                class="snap-start border data-[state=active]:border-transparent"
                value="groceries"
                >Groceries</TabsTrigger
              >
              <TabsTrigger
                class="snap-start border data-[state=active]:border-transparent"
                value="bills-and-payment"
                >Bills & Payment</TabsTrigger
              >
            </TabsList>
          </div>
        </div>
        <TabsContent class="mt-4 md:mt-8" value="shop-online">
          <div
            class="flex flex-col items-start lg:gap-x-16 xl:gap-x-20 gap-y-8 gap-x-8 md:justify-center md:grid md:grid-cols-[1fr_max-content]"
          >
            <NuxtImg src="/our-services.png" />
            <div class="lg:flex">
              <div class="space-y-4 md:space-y-8">
                <h3>Shop Online</h3>
                <p class="text-muted-foreground max-w-[32.9375rem] min-w-0">
                  Shop a wide variety of products across multiple categories.
                  From electronics and home appliances to fashion and beauty,
                  and more, our platform offers a seamless shopping experience.
                  Discover top brands, exclusive deals, and convenient delivery
                  options, all designed to make your online shopping effortless
                  and enjoyable.
                </p>
              </div>
              <!-- decorative image -->
              <NuxtImg
                src="/our-services-decorative-image.png"
                class="max-xl:hidden"
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent class="mt-4 md:mt-8" value="pharmacy">
          <div
            class="flex flex-col items-start lg:gap-x-16 xl:gap-x-20 gap-y-8 gap-x-8 md:justify-center md:grid md:grid-cols-[1fr_max-content]"
          >
            <NuxtImg src="/our-services.png" />
            <div class="lg:flex">
              <div class="space-y-4 md:space-y-8">
                <h3>Pharmacy</h3>
                <p class="text-muted-foreground max-w-[32.9375rem] min-w-0">
                  Our Online Pharmacy is your trusted source for a wide range of
                  healthcare products. From prescription medications and
                  over-the-counter drugs, we provide everything you need for
                  your health and wellness. Our platform ensures a secure and
                  convenient shopping experience, with quick delivery options to
                  get your essentials right to your doorstep.
                </p>
              </div>
              <!-- decorative image -->
              <NuxtImg
                src="/our-services-decorative-image.png"
                class="max-xl:hidden"
              />
            </div></div
        ></TabsContent>
        <TabsContent class="mt-4 md:mt-8" value="food">
          <div
            class="flex flex-col items-start lg:gap-x-16 xl:gap-x-20 gap-y-8 gap-x-8 md:justify-center md:grid md:grid-cols-[1fr_max-content]"
          >
            <NuxtImg src="/our-services.png" />
            <div class="lg:flex">
              <div class="space-y-4 md:space-y-8">
                <h3>Food</h3>
                <p class="text-muted-foreground max-w-[32.9375rem] min-w-0">
                  Our Food Delivery service brings your favorite meals straight
                  to your doorstep. Browse through a diverse range of cuisines
                  from top-rated restaurants, whether you crave local
                  delicacies, international flavors, or healthy options. Enjoy
                  delicious food with the ease and comfort of ordering online.
                  Our Food Delivery service brings your favorite meals straight
                  to your doorstep. Browse through a diverse range of cuisines
                  from top-rated restaurants, whether you crave local
                  delicacies, international flavors, or healthy options. Enjoy
                  delicious food with the ease and comfort of ordering online.
                </p>
              </div>
              <!-- decorative image -->
              <NuxtImg
                src="/our-services-decorative-image.png"
                class="max-xl:hidden"
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent class="mt-4 md:mt-8" value="groceries">
          <div
            class="flex flex-col items-start lg:gap-x-16 xl:gap-x-20 gap-y-8 gap-x-8 md:justify-center md:grid md:grid-cols-[1fr_max-content]"
          >
            <NuxtImg src="/our-services.png" />
            <div class="lg:flex">
              <div class="space-y-4 md:space-y-8">
                <h3>Groceries</h3>
                <p class="text-muted-foreground max-w-[32.9375rem] min-w-0">
                  Our Grocery Delivery Service, designed to bring fresh,
                  high-quality groceries right to your doorstep. Browse through
                  a wide range of categories including fresh produce, dairy,
                  pantry staples, snacks, and beverages, all from the comfort of
                  your home.
                </p>
              </div>
              <!-- decorative image -->
              <NuxtImg
                src="/our-services-decorative-image.png"
                class="max-xl:hidden"
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent class="mt-4 md:mt-8" value="bills-and-payment">
          <div
            class="flex flex-col items-start lg:gap-x-16 xl:gap-x-20 gap-y-8 gap-x-8 md:justify-center md:grid md:grid-cols-[1fr_max-content]"
          >
            <NuxtImg src="/our-services.png" />
            <div class="lg:flex">
              <div class="space-y-4 md:space-y-8">
                <h3>Bills & Payment</h3>
                <p class="text-muted-foreground max-w-[32.9375rem] min-w-0">
                  Our Bills and Payments Service is designed to make paying your
                  utility bills, such as electricity, and water, as well as
                  other services like DSTV, GOTV, Startimes and airtime and data
                  top-ups, quick and easy. Our platform provides a secure,
                  user-friendly interface that allows you to manage all your
                  payments from one convenient location.
                </p>
              </div>
              <!-- decorative image -->
              <NuxtImg
                src="/our-services-decorative-image.png"
                class="max-xl:hidden"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>

    <!-- simplify your life with shaq -->
    <div
      class="container flex flex-col-reverse md:grid md:grid-cols-[max-content_1fr] gap-x-8 lg:gap-x-20 xl:gap-x-40 md:items-center"
    >
      <div>
        <h2>Simplify Your Life with ShaQApp</h2>
        <p class="text-muted-foreground mt-3 md:mt-6 max-w-[25.625rem]">
          In today's fast-paced world, convenience and efficiency are paramount.
          Our app is designed to make your daily activities easier and more
          manageable. Whether it's ordering groceries, getting food delivered,
          paying bills, or accessing pharmacy services, our app brings
          everything you need to your fingertips. No more juggling multiple apps
          or dealing with long queues. Embrace the simplicity and convenience of
          our app, and make your everyday life smoother and more enjoyable.
          Download now and experience the ease of having everything you need in
          one place.
        </p>
        <Button class="mt-5 md:mt-10">Read more</Button>
      </div>
      <NuxtImg src="/blur-image.png" />
    </div>

    <!-- download the app -->
    <div
      class="container flex flex-col-reverse gap-y-8 md:grid md:grid-cols-[1fr_max-content] gap-x-8 lg:gap-x-20 xl:gap-x-40 md:items-center"
    >
      <NuxtImg src="/three-app-snapshots.png" />

      <div class="grid place-items-center">
        <NuxtImg src="/qr-code-scanner.png" />
        <p class="text-2xl font-semibold mt-4">Download the app</p>
        <div class="flex flex-wrap gap-4 mt-5 md:mt-10 justify-center">
          <NuxtLink external to="https://app.shaqapp.com/">
            <NuxtImg src="/appstore.png" class="rounded-sm" />
          </NuxtLink>
          <NuxtLink external to="https://app.shaqapp.com/">
            <NuxtImg src="/playstore.png" class="rounded-sm" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- make money with shaq -->
    <div class="container">
      <Tabs default-value="vendors">
        <div class="grid place-items-center gap-y-4 md:gap-y-8 mb-8 md:mb-16">
          <h2 class="text-center">Make Money with ShaQApp</h2>
          <div class="grid overflow-x-hidden">
            <TabsList
              class="scrollbar-hide flex snap-x snap-mandatory scroll-px-3 gap-x-4 overflow-x-scroll scroll-smooth whitespace-nowrap"
            >
              <TabsTrigger
                class="snap-start border data-[state=active]:border-transparent"
                value="vendors"
                >Vendors</TabsTrigger
              >
              <TabsTrigger
                class="snap-start border data-[state=active]:border-transparent"
                value="riders-and-drivers"
              >
                Riders and Drivers
              </TabsTrigger>
              <TabsTrigger
                class="snap-start border data-[state=active]:border-transparent"
                value="fleet-owners"
                >Fleet Owners</TabsTrigger
              >
            </TabsList>
          </div>
        </div>

        <TabsContent
          class="flex flex-col md:items-center lg:gap-x-16 xl:gap-x-20 gap-y-8 gap-x-8 md:justify-center md:grid md:grid-cols-[1fr_max-content]"
          value="vendors"
        >
          <NuxtImg src="/blur-image.png" />
          <div>
            <h3>Grow Your Business with Our Platform</h3>
            <p class="text-muted-foreground max-w-[33.8125rem] mt-4 md:mt-8">
              Join our network of vendors and expand your reach to thousands of
              potential customers. Our platform offers you the opportunity to
              showcase your products to a wide audience, manage orders
              effortlessly, and increase your sales.
            </p>
            <div class="mt-3 md:mt-6 gap-y-3 md:gap-y-6 grid">
              <div class="flex gap-x-2 md:gap-x-4 items-center">
                <div
                  class="size-5 rounded-sm bg-primary text-white flex items-center justify-center"
                >
                  <CheckIcon class="size-3" />
                </div>
                <p class="font-medium">Boost Sales</p>
              </div>
              <div class="flex gap-x-2 md:gap-x-4 items-center">
                <div
                  class="size-5 rounded-sm bg-primary text-white flex items-center justify-center"
                >
                  <CheckIcon class="size-3" />
                </div>
                <p class="font-medium">Same Day Payment</p>
              </div>
              <div class="flex gap-x-2 md:gap-x-4 items-center">
                <div
                  class="size-5 rounded-sm bg-primary text-white flex items-center justify-center"
                >
                  <CheckIcon class="size-3" />
                </div>
                <p class="font-medium">Easy to Use Platform</p>
              </div>
              <div class="flex gap-x-2 md:gap-x-4 items-center">
                <div
                  class="size-5 rounded-sm bg-primary text-white flex items-center justify-center"
                >
                  <CheckIcon class="size-3" />
                </div>
                <p class="font-medium">Dedicated Support</p>
              </div>
            </div>
            <Button class="mt-4 md:mt-8">Learn more</Button>
          </div>
        </TabsContent>
        <TabsContent
          class="flex flex-col md:items-center lg:gap-x-16 xl:gap-x-20 gap-y-8 gap-x-8 md:justify-center md:grid md:grid-cols-[1fr_max-content]"
          value="riders-and-drivers"
        >
          <NuxtImg src="/blur-image.png" />
          <div>
            <h3>Earn More with Us</h3>
            <p class="text-muted-foreground max-w-[33.8125rem] mt-4 md:mt-8">
              Become a courier for our platform and enjoy flexible working
              hours, competitive earnings, and the opportunity to be your own
              boss. Deliver packages, food, groceries, and more to our vast
              network of customers.
            </p>
            <div class="mt-3 md:mt-6 gap-y-3 md:gap-y-6 grid">
              <div class="flex gap-x-2 md:gap-x-4 items-center">
                <div
                  class="size-5 rounded-sm bg-primary text-white flex items-center justify-center"
                >
                  <CheckIcon class="size-3" />
                </div>
                <p class="font-medium">Flexible Schedule</p>
              </div>
              <div class="flex gap-x-2 md:gap-x-4 items-center">
                <div
                  class="size-5 rounded-sm bg-primary text-white flex items-center justify-center"
                >
                  <CheckIcon class="size-3" />
                </div>
                <p class="font-medium">Competitive Earnings</p>
              </div>
              <div class="flex gap-x-2 md:gap-x-4 items-center">
                <div
                  class="size-5 rounded-sm bg-primary text-white flex items-center justify-center"
                >
                  <CheckIcon class="size-3" />
                </div>
                <p class="font-medium">Dedicated Support</p>
              </div>
              <div class="flex gap-x-2 md:gap-x-4 items-center">
                <div
                  class="size-5 rounded-sm bg-primary text-white flex items-center justify-center"
                >
                  <CheckIcon class="size-3" />
                </div>
                <p class="font-medium">Bonuses</p>
              </div>
            </div>
            <Button class="mt-4 md:mt-8">Learn more</Button>
          </div>
        </TabsContent>
        <TabsContent
          class="flex flex-col md:items-center lg:gap-x-16 xl:gap-x-20 gap-y-8 gap-x-8 md:justify-center md:grid md:grid-cols-[1fr_max-content]"
          value="fleet-owners"
        >
          <NuxtImg src="/blur-image.png" />
          <div>
            <h3>Earn more by partnering with Us</h3>
            <p class="text-muted-foreground max-w-[33.8125rem] mt-4 md:mt-8">
              Partner with us as a third-party logistics provider and tap into a
              steady stream of delivery requests. Enhance your business
              operations and increase your revenue by fulfilling deliveries for
              our diverse customer base.
            </p>
            <div class="mt-3 md:mt-6 gap-y-3 md:gap-y-6 grid">
              <div class="flex gap-x-2 md:gap-x-4 items-center">
                <div
                  class="size-5 rounded-sm bg-primary text-white flex items-center justify-center"
                >
                  <CheckIcon class="size-3" />
                </div>
                <p class="font-medium">Consistent Demand</p>
              </div>
              <div class="flex gap-x-2 md:gap-x-4 items-center">
                <div
                  class="size-5 rounded-sm bg-primary text-white flex items-center justify-center"
                >
                  <CheckIcon class="size-3" />
                </div>
                <p class="font-medium">Business Growth</p>
              </div>
              <div class="flex gap-x-2 md:gap-x-4 items-center">
                <div
                  class="size-5 rounded-sm bg-primary text-white flex items-center justify-center"
                >
                  <CheckIcon class="size-3" />
                </div>
                <p class="font-medium">Data and Analytics</p>
              </div>
              <div class="flex gap-x-2 md:gap-x-4 items-center">
                <div
                  class="size-5 rounded-sm bg-primary text-white flex items-center justify-center"
                >
                  <CheckIcon class="size-3" />
                </div>
                <p class="font-medium">Comprehensive Support</p>
              </div>
            </div>
            <Button class="mt-4 md:mt-8">Learn more</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </main>
</template>
