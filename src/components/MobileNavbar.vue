<script>
export default {
  name: "MobileNavbar",
  props: {
    links: Array,
  },
};
</script>
<template>
  <nav>
    <div class="flex justify-between mx-2 my-5">
      <img src="../assets/logo .png" alt="" />
      <i
        @click="$emit('close')"
        class="fa-solid fa-circle-xmark text-3xl text-cyan-500"
      ></i>
    </div>
    <ul class="gap-5 lg:flex-row lg:gap-0">
      <li v-for="(link, index) in links" :key="index">
        <router-link
          @click="$emit('routerLinkClicked')"
          class="px-3 py-2 bg-cyan-600 m-2 block text-white rounded-lg hover:bg-cyan-100 hover:text-black duration-500"
          :to="link.route"
          >{{ link.name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  background-color: #bce0e1;
  color: #000;
}
</style>
