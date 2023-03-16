<script>
export default {
  props: {
    data: Array,
  },

  data() {
    return {
      categories: ["all", "game", "landing page", "personal project"],
      current: "all",
    };
  },

  methods: {
    selectCategory(category) {
      this.current = category;
    },

    getProjects() {
      if (this.current === "all") return this.data;
      return this.data.filter((project) => project.category === this.current);
    },

    getQuantity(category) {
      if (category === "all") return `(${this.data.length})`;
      return `(${this.data.filter((project) => project.category === category).length})`;
    },
  },
};
</script>

<template>
  <section id="projects" class="flex-col-center dark:bg-neutral-900">
    <div class="flex-col-center container py-20">
      <h2>
        <div>Work<span>s</span></div>
        <i>Let's see <br class="md:hidden" /><span class="highlight">some projects</span> I did!</i>
      </h2>
      <div class="w-full">
        <div class="flex flex-col lg:flex-row lg:gap-4">
          <div
            v-for="category in categories"
            :key="category"
            :class="['category', current === category && 'selected']"
            @click="selectCategory(category)"
          >
            {{ category === "all" ? "all" : category + "s" }} {{ getQuantity(category) }}
          </div>
        </div>
        <div
          v-auto-animate
          class="grid grid-cols-1 gap-8 rounded-lg rounded-tl-none border p-4 dark:border-neutral-800 md:p-8 lg:grid-cols-2"
        >
          <div
            v-for="project in getProjects()"
            :key="project.title"
            class="flex rounded border p-4 dark:border-neutral-800 dark:bg-neutral-800 md:p-8"
          >
            <div class="flex flex-col gap-8">
              <div class="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                <div class="flex flex-col gap-2">
                  <div
                    class="text-shadow-light dark:text-shadow text-center font-sub text-5xl capitalize tracking-widest text-lightTheme md:text-left md:text-6xl"
                  >
                    {{ project.title }}
                  </div>
                  <p
                    v-show="current === 'all'"
                    class="text-center text-sm font-bold uppercase tracking-widest md:text-left md:text-base"
                  >
                    {{ project.category }}
                  </p>
                </div>
                <div class="flex justify-end gap-4 md:w-20 md:flex-wrap">
                  <img
                    class="w-8 object-contain"
                    v-for="stack in project.stacks"
                    :key="stack"
                    :src="`/images/${stack}.png`"
                    :alt="stack"
                    width="32"
                    height="32"
                    loading="lazy"
                  />
                </div>
              </div>
              <img
                :src="`/images/${project.lowercase}.png`"
                :alt="project.title"
                class="w-full rounded"
                width="1920"
                height="1080"
                loading="lazy"
              />
              <p class="flex-grow">
                <span v-for="(text, index) in project.descriptions.split('*')" :key="text">
                  <i :class="{ 'font-bold': index === 1 }">{{ text }}</i>
                </span>
              </p>
              <div
                class="flex flex-col items-end justify-between gap-4 md:flex-row md:gap-0 lg:flex-col lg:gap-4 xl:flex-row xl:gap-0"
              >
                <a
                  v-if="project.download"
                  :href="`https://github.com/yamsunsee/${project.lowercase}/${project.download}`"
                  target="_blank"
                  class="button theme lg:w-full xl:w-fit"
                  >Download</a
                >
                <a
                  v-else
                  :href="`https://yamsunsee.github.io/${project.lowercase}`"
                  target="_blank"
                  class="button theme lg:w-full xl:w-fit"
                  >View demo</a
                >
                <a
                  :href="`https://github.com/yamsunsee/${project.lowercase}`"
                  target="_blank"
                  class="button black border lg:w-full xl:w-fit"
                  >Source code</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
