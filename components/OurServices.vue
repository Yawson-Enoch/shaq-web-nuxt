<template>
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
          <NuxtImg src="/payment.png" />
          <div class="lg:flex">
            <div class="space-y-4 md:space-y-8">
              <h3>Shop Online</h3>
              <p class="text-muted-foreground max-w-[32.9375rem] min-w-0">
                Shop a wide variety of products across multiple categories. From
                electronics and home appliances to fashion and beauty, and more,
                our platform offers a seamless shopping experience. Discover top
                brands, exclusive deals, and convenient delivery options, all
                designed to make your online shopping effortless and enjoyable.
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
          <NuxtImg src="/payment.png" />
          <div class="lg:flex">
            <div class="space-y-4 md:space-y-8">
              <h3>Pharmacy</h3>
              <p class="text-muted-foreground max-w-[32.9375rem] min-w-0">
                Our Online Pharmacy is your trusted source for a wide range of
                healthcare products. From prescription medications and
                over-the-counter drugs, we provide everything you need for your
                health and wellness. Our platform ensures a secure and
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
          <NuxtImg src="/payment.png" />
          <div class="lg:flex">
            <div class="space-y-4 md:space-y-8">
              <h3>Food</h3>
              <p class="text-muted-foreground max-w-[32.9375rem] min-w-0">
                Our Food Delivery service brings your favorite meals straight to
                your doorstep. Browse through a diverse range of cuisines from
                top-rated restaurants, whether you crave local delicacies,
                international flavors, or healthy options. Enjoy delicious food
                with the ease and comfort of ordering online. Our Food Delivery
                service brings your favorite meals straight to your doorstep.
                Browse through a diverse range of cuisines from top-rated
                restaurants, whether you crave local delicacies, international
                flavors, or healthy options. Enjoy delicious food with the ease
                and comfort of ordering online.
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
          <NuxtImg src="/payment.png" />
          <div class="lg:flex">
            <div class="space-y-4 md:space-y-8">
              <h3>Groceries</h3>
              <p class="text-muted-foreground max-w-[32.9375rem] min-w-0">
                Our Grocery Delivery Service, designed to bring fresh,
                high-quality groceries right to your doorstep. Browse through a
                wide range of categories including fresh produce, dairy, pantry
                staples, snacks, and beverages, all from the comfort of your
                home.
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
          <NuxtImg src="/payment.png" />
          <div class="lg:flex">
            <div class="space-y-4 md:space-y-8">
              <h3>Bills & Payment</h3>
              <p class="text-muted-foreground max-w-[32.9375rem] min-w-0">
                Our Bills and Payments Service is designed to make paying your
                utility bills, such as electricity, and water, as well as other
                services like DSTV, GOTV, Startimes and airtime and data
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
</template>
