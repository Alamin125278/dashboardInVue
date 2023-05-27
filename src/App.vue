<script>
import Navbar from "./components/Navbar.vue";

export default {
  data() {
    return {
      navLinks: [
        {
          name: "Personal",
          route: "/personal",
        },
        {
          name: "Education",
          route: "/education",
        },
        {
          name: "Employment",
          route: "/employment",
        },
        {
          name: "Professional Degree",
          route: "/professional",
        },
        {
          name: "Training/Workshop",
          route: "/training",
        },
        {
          name: "Language",
          route: "/language",
        },
        {
          name: "References",
          route: "/references",
        },

        {
          name: "Others",
          route: "/others",
        },
      ],
    };
  },
  components: {
    Navbar,
  },
};
</script>

<template>
  <main class="bg-slate-100">
    <div class="w-9/12 mx-auto">
      <header class="flex justify-between h-20 items-center">
        <img src="./assets/logo .png" alt="" srcset="" />
        <h2 class="text-4xl text-cyan-500 font-mono font-semibold">
          Talent Acquisition System
        </h2>
      </header>
      <div class="border">
        <div class="w-full h-10 bg-cyan-500 flex items-center text-white p-4">
          Edit Resume
        </div>
        <Navbar class="my-3" :links="navLinks" />
        <router-view></router-view>
      </div>
    </div>

    <footer class="w-full bg-gray-200 mt-4">
      <div class="w-9/12 mx-auto h-20 flex justify-between items-center">
        <div>
          <span>Follow us</span>
        </div>
        <div>
          <span>Copyright 2023 icddr,b. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  </main>
</template>

<style>
/* header {
  background-color: #141b2d;
} */
</style>
