<script>
export default {
  props: {
    name: String,
    quote: String,
  },
};
</script>

<template>
  <section id="home" class="flex-col-center bg-hero-lightTheme dark:bg-hero-darkTheme h-[calc(100vh-5rem)]">
    <div class="flex-col-center container h-full gap-4 text-center lg:gap-8">
      <h1 @mouseenter="handleHover">
        Hello,
        <br class="md:hidden" />
        my name is
        <br class="2xl:hidden" />
        {{ name }}
      </h1>
      <q>{{ quote }}</q>
      <a href="#projects" class="button white">My recent works</a>
    </div>
  </section>
</template>
