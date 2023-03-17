<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {
      name: "The Hien",
      url: "https://yamdev.info",
      quote:
        "Like a spider, I strive to be a good web developer. But I do not like bugs much!",
      quote2:
        "Many thanks for giving me the opportunity to share my passion with you!",
      projects: [
        {
          title: "Yamonus",
          lowercase: "electron-yamonus",
          download: "raw/main/Yamonus-2.1.0-setup.exe",
          descriptions:
            "A *desktop task management tool* follows a 'mouse-free' style, enabling users to easily add, filter, edit, remove, and manage recurring tasks using simple commands.",
          category: "personal project",
          stacks: ["electron", "reactjs", "tailwindcss"],
        },
        {
          title: "Janken",
          lowercase: "janken",
          descriptions:
            "An *online two-player game*, allowing users to register, login, make friends, create challenge rooms, and search for opponents in the queue to play the retro game of rock-paper-scissors.",
          category: "game",
          stacks: ["reactjs", "express", "socketio", "mongodb"],
        },
        {
          title: "Yamemorize",
          lowercase: "yamemorize",
          descriptions:
            "A *flashcard generator*, converting data from Google Sheets in a prescribed pattern into vocabulary cards and exercises to learn vocabulary and check results more easily.",
          category: "personal project",
          stacks: ["reactjs", "tailwindcss"],
        },
        {
          title: "Yameal",
          lowercase: "yameal",
          descriptions:
            "A *food delivery landing page*, focusing on the slider and responsive on many devices, trying a combination of Pug and TailwindCSS to reuse components.",
          category: "landing page",
          stacks: ["pug", "tailwindcss", "javascript"],
        },
        {
          title: "Covid tracker",
          lowercase: "covidtracker",
          descriptions:
            "A *COVID-19 tracking website*, converting data from the API into a chart and tables for easy tracking and comparison. It provides pandemic information by provinces, Vietnam, and the world.",
          category: "personal project",
          stacks: ["vuejs", "tailwindcss"],
        },
        {
          title: "Yamonus",
          lowercase: "yamonus",
          descriptions:
            "A website for *task planning and management*, with break time notifications, visual display of work performance statistics, and deadlines on a calendar, focusing on drag-and-drop interaction.",
          category: "personal project",
          stacks: ["vuejs", "sass"],
        },
        {
          title: "Blocks",
          lowercase: "blocks",
          descriptions:
            "A *puzzle game*, the goal is to destroy all disabled blocks by creating higher colorful blocks. There are many levels with more grid sizes and more difficult to use effects of blocks.",
          category: "game",
          stacks: ["html", "sass", "javascript"],
        },
        {
          title: "Food delivery",
          lowercase: "fooddelivery",
          descriptions:
            "Another *food delivery landing page*, trying out Pug, the HTML preprocessor, and learning how to split the file for easy editing and maintenance.",
          category: "landing page",
          stacks: ["pug", "sass", "javascript"],
        },
        {
          title: "Midbank",
          lowercase: "midbank",
          descriptions:
            "A *banking landing page*, trying out TailwindCSS, a utility-first CSS framework packed with classes, and a convenience tool to make responsive on multiple display sizes with inline classes.",
          category: "landing page",
          stacks: ["html", "tailwindcss", "javascript"],
        },
      ],
    };
  },

  components: { Header, Home, About, Projects, Contact, Footer },
};
</script>

<template>
    <Header :name="name" :url="url" />
    <main>
      <Home :name="name" :quote="quote" />
      <About />
      <Projects :data="projects" />
      <Contact />
    </main>
    <Footer :name="name" :quote="quote2" />
</template>
