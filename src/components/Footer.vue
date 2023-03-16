<script>
export default {
  props: {
    name: String,
    quote: String,
  },
};
</script>

<template>
  <footer id="footer" class="flex-col-center bg-black text-white">
    <div class="container flex flex-col justify-between gap-8 py-20 lg:flex-row">
      <div class="flex flex-col gap-2 lg:gap-4">
        <h3>{{ name }}</h3>
        <q>{{ quote }}</q>
      </div>
      <div class="flex flex-col gap-4 md:gap-8">
        <div class="flex flex-col gap-2 md:gap-4">
          <h3>Social</h3>
          <div>
            <a href="https://github.com/yamsunsee" target="_blank" title="This is my GitHub page!">
              <img src="/icons/github.svg" width="24" height="24" loading="lazy" alt="icons" class="icons white" />
            </a>
          </div>
        </div>
        <div class="flex flex-col gap-2 md:gap-4">
          <h3>Special thanks</h3>
          <div class="flex gap-4">
            <a
              href="https://www.facebook.com/momoko8794"
              target="_blank"
              title="Many thanks for the gorgeous backgrounds!"
            >
              <img src="/icons/image.svg" width="24" height="24" loading="lazy" alt="icons" class="icons white" />
            </a>
            <a href="https://www.rammaheshwari.com" target="_blank" title="Many thanks for the impressive layout!">
              <img src="/icons/color.svg" width="24" height="24" loading="lazy" alt="icons" class="icons white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
