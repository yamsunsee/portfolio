<script>
import axios from "axios";

export default {
  data() {
    return {
      isSending: false,
      isSent: false,
    };
  },

  methods: {
    async handleSubmit(event) {
      const formData = new FormData(event.target);
      const sheetdbURL = "https://sheetdb.io/api/v1/6p34060rldu29";

      try {
        this.isSending = true;
        await axios.post(sheetdbURL, formData);
        this.isSending = false;
        this.isSent = true;
      } catch (error) {
        console.log(error);
      }
    },

    handleResend() {
      this.isSent = false;
    },
  },
};
</script>

<template>
  <section id="contact" class="flex-col-center bg-contact-lightTheme dark:bg-contact-darkTheme">
    <div class="flex-col-center container py-20">
      <h2>
        <div>Contac<span>t</span></div>
        <i class="text-white">Please <span class="highlight">feel free</span> <br class="md:hidden" />to contact me!</i>
      </h2>
      <form
        v-if="!isSent"
        @submit.prevent="handleSubmit"
        class="flex w-full max-w-[64rem] flex-col gap-8 rounded bg-white p-4 dark:bg-neutral-900 md:p-8"
      >
        <div class="flex flex-col gap-2">
          <label for="name" class="uppercase tracking-widest">Name </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here..."
            class="rounded border p-4 placeholder:font-normal placeholder:italic focus:outline-none dark:border-neutral-800 dark:bg-neutral-800"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="email" class="uppercase tracking-widest">Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email here..."
            class="rounded border p-4 placeholder:font-normal placeholder:italic focus:outline-none dark:border-neutral-800 dark:bg-neutral-800"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="messages" class="uppercase tracking-widest">Messages</label>
          <textarea
            required
            type="text"
            id="messages"
            name="messages"
            placeholder="Write something for me..."
            class="resize-none rounded border p-4 placeholder:font-normal placeholder:italic focus:outline-none dark:border-neutral-800 dark:bg-neutral-800"
            rows="10"
          />
        </div>
        <button type="submit" class="button theme self-end">
          {{ isSending ? "Sending..." : "Send" }}
        </button>
      </form>
      <div v-else class="flex w-[64rem] flex-col gap-8 rounded bg-white p-8 dark:bg-neutral-900">
        <div class="text-lg font-normal italic">
          Thanks for getting in touch with me, and I will get back to you with my response shortly!
        </div>
        <button @click="handleResend" class="button theme self-end">Send again</button>
      </div>
    </div>
  </section>
</template>
