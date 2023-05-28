<script>
import MobileNavbar from "./components/MobileNavbar.vue";
import Navbar from "./components/Navbar.vue";

export default {
  data() {
    return {
      width: window.innerWidth,
      isMenuOpen: false,
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
    MobileNavbar,
  },
};
</script>

<template>
  <main class="bg-slate-100 relative">
    <div
      :class="isMenuOpen ? 'showNav' : ''"
      class="mobile-navbar fixed w-52 bg-white z-20 duration-500"
    >
      <MobileNavbar
        @routerLinkClicked="isMenuOpen = false"
        @close="isMenuOpen = false"
        :links="navLinks"
      />
    </div>
    <div
      v-if="isMenuOpen"
      @click="isMenuOpen = false"
      class="top-0 left-0 bottom-0 right-0 bg-slate-500 fixed z-10 opacity-50"
    ></div>
    <div class="sm:w-9/12 mx-auto w-11/12">
      <!-- <header
        class="block sm:flex justify-between sm:h-32 md:h-32 h-32 items-center text-center relative w-full py-3"
      >
        <img
          class="absolute left-1/2 -translate-x-1/2 sm:left-0 md:left-0 sm:translate-x-0"
          src="./assets/logo .png"
          alt=""
          srcset=""
        />
        <h2
          class="sm:text-4xl md:text-2xl bottom-0 sm:top-1/2 md:top-1/2 text-center text-cyan-500 font-mono font-semibold sm:w-auto absolute sm:right-12"
        >
          Talent Acquisition System
        </h2>
      </header> -->
      <header
        class="flex sm:justify-between h-24 items-center sm:flex-row flex-col p-4"
      >
        <img class="" src="./assets/logo .png" alt="" srcset="" />
        <h2 class="sm:text-4xl text-2xl text-cyan-500">
          Talent Acquisition System
        </h2>
      </header>
      <div class="border">
        <div
          class="w-full h-10 bg-cyan-500 flex items-center text-white p-4 my-3"
        >
          <i
            @click="isMenuOpen = true"
            class="fa-solid fa-bars mr-3 text-xl"
          ></i>
          Edit Resume
        </div>
        <Navbar v-if="width > 1400" class="my-3" :links="navLinks" />
        <router-view></router-view>
      </div>
    </div>

    <footer class="w-full bg-gray-200 mt-16">
      <div
        class="w-full mx-auto flex flex-col md:flex-row gap-2 justify-around items-center py-5"
      >
        <div class="pt-4 items-center pb-4">
          <span class="font-light md:font-bold text-center">Follow us:</span>
        </div>
        <div class="">
          <a href="https://twitter.com/" target="_blank"
            ><i
              class="fa-brands fa-twitter px-3 text-2xl lg:text-4xl text-cyan-500"
            ></i
          ></a>
          <a href="https://www.facebook.com/" target="_blank"
            ><i
              class="fa-brands fa-facebook px-3 text-2xl lg:text-4xl text-cyan-500"
            ></i
          ></a>
          <a href="https://www.linkedin.com/" target="_blank"
            ><i
              class="fa-brands fa-linkedin px-3 text-2xl lg:text-4xl text-cyan-500"
            ></i
          ></a>
          <a href="https://www.youtube.com/" target="_blank"
            ><i
              class="fa-brands fa-youtube px-3 text-2xl lg:text-4xl text-cyan-500"
            ></i
          ></a>
          <a href="https://www.flickr.com/" target="_blank"
            ><i
              class="fa-brands fa-flickr px-3 text-2xl lg:text-4xl text-cyan-500"
            ></i
          ></a>
        </div>
        <div class="text-center">
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

.mobile-navbar {
  height: 100vh;
}
.mobile-navbar {
  transform: translateX(-208px);
}
.showNav {
  transform: translateX(0);
}
</style>
