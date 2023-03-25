<script>
export default {
  data() {
    return {
      skills: [
        "HTML",
        "Pug",
        "CSS",
        "Sass",
        "TailwindCSS",
        "Javascript",
        "ReactJS",
        "VueJS",
        "Electron",
        "NodeJS",
        "Express",
        "SocketIO",
        "MongoDB",
        "Git",
        "Python",
      ],
    };
  },

  mounted() {
    TagCloud("#skills", Array(this.skills.length).fill(""), {
      radius: 200,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 45,
      keep: false,
    });
  },
};
</script>

<template>
  <section
    id="about"
    class="flex-col-center relative bg-neutral-100 drop-shadow before:absolute before:inset-0 before:bg-[url('/images/background2.png')] before:invert dark:bg-neutral-800 dark:before:invert-0"
  >
    <div class="flex-col-center container z-10 py-20">
      <h2>
        <div>Abou<span>t</span> m<span>e</span></div>
        <i
          >I love <span class="highlight">coding</span> and doing some
          <span class="highlight">fascinating stuff!</span></i
        >
      </h2>
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div class="flex flex-col gap-4 md:gap-8">
          <h3>Get to know me</h3>
          <div class="flex flex-col gap-4 italic">
            <p>I am a <b>self-taught</b> front-end developer.</p>
            <p>
              I have experience <b>converting designs</b> from software tools
              such as Photoshop, Illustrator, and Figma into HTML, CSS, and
              JavaScript. In addition, I have proficiency in <b>VueJS</b> and
              its libraries, like Vuex and Vue Router.
            </p>
            <p>
              Furthermore, I am constantly expanding my knowledge and skills in
              other technologies, such as the
              <b> MERN Stack </b> (MongoDB, Express, ReactJS, and NodeJS), to
              undertake personal projects and prepare for employment
              opportunities.
            </p>
            <p>
              Additionally, I am exploring desktop application development using
              my front-end expertise with
              <b>ElectronJS</b>.
            </p>
          </div>
          <div class="flex flex-col justify-between gap-4 md:flex-row lg:gap-8">
            <a href="#contact" class="button theme">Contact</a>
            <a
              href="https://j2c.cc/yamdev"
              target="_blank"
              class="button black border"
              >Download CV</a
            >
          </div>
        </div>
        <div>
          <h3>My skills</h3>
          <div id="skills" class="flex-center hidden md:flex"></div>
          <div class="mt-4 flex flex-wrap justify-center gap-4 md:hidden">
            <div
              v-for="skill in skills"
              :key="skill"
              class="flex w-32 items-center justify-center gap-2 rounded border bg-white p-4 text-xs dark:border-neutral-800 dark:bg-neutral-800 sm:w-48 sm:text-base"
            >
              <img
                :src="`./images/${skill.toLowerCase()}.png`"
                :alt="skill"
                width="32"
                height="32"
                loading="lazy"
                class="h-4 w-4 object-contain sm:h-8 sm:w-8"
              />
              <div>{{ skill }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
