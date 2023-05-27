<script>
export default {
  name: "Navbar",
  props: {
    links: Array,
  },
};
</script>
<template>
  <nav>
    <ul class="flex">
      <li v-for="(link, index) in links" :key="index">
        <router-link
          class="px-3 py-2 bg-cyan-600 mx-2 text-white rounded-lg hover:bg-cyan-100 hover:text-black duration-500"
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
