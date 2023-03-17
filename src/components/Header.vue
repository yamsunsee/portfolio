<script>
export default {
  props: {
    name: String,
    url: String,
  },

  data() {
    return {
      links: {
        home: "#",
        about: "#about",
        projects: "#projects",
        contact: "#contact",
      },
      current: "home",
      darkMode: false,
      scroll: 0,
      isShow: false,
    };
  },

  methods: {
    selectLink(link) {
      this.current = link;
      this.isShow = false;
      document.body.classList.remove("overflow-hidden");
    },

    toggleMode() {
      if (this.darkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        this.darkMode = false;
      } else {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        this.darkMode = true;
      }
      this.isShow = false;
      document.body.classList.remove("overflow-hidden");
    },

    handleScroll() {
      const sections = document.querySelectorAll("section");
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;

      const value = (scrolled * 100) / scrollable;
      this.scroll = value + "%";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrolled + 320 >= sectionTop) {
          this.current = section.id;
        }
      });
    },

    handleToggleMenu() {
      if (this.isShow) {
        document.body.classList.remove("overflow-hidden");
        this.isShow = false;
      } else {
        document.body.classList.add("overflow-hidden");
        this.isShow = true;
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      this.darkMode = true;
    } else {
      document.documentElement.classList.remove("dark");
      this.darkMode = false;
    }
  },

  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <header
    id="header"
    :style="{ '--value': scroll }"
    class="flex-col-center scrollbar sticky top-0 z-50 bg-white drop-shadow dark:bg-neutral-900"
  >
    <div class="flex-between container">
      <a :href="url" class="group flex items-center gap-2">
        <img src="/images/logo.png" width="48" height="48" loading="lazy" alt="avatar" class="aspect-square w-12" />
        <div class="text-2xl uppercase tracking-widest group-hover:text-lightTheme dark:group-hover:text-darkTheme">
          {{ name }}
        </div>
      </a>
      <nav>
        <div @click="handleToggleMenu" :class="['menu', { active: isShow }]"></div>
        <ul :class="{ active: isShow }">
          <li
            v-for="[link, path] in Object.entries(links)"
            :key="link"
            :class="['link', current === link && 'selected']"
            @click="selectLink(link)"
          >
            <a :href="path">{{ link }}</a>
          </li>
          <li @click="toggleMode" v-auto-animate>
            <img v-if="darkMode" src="/icons/sun.svg" width="24" height="24" loading="lazy" alt="icon" class="icons" />
            <img v-else src="/icons/moon.svg" width="24" height="24" loading="lazy" alt="icon" class="icons" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
