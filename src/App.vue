<template>
  <div>
    <Navbar :navbar-text="getPageName" />
    <div class="wrapper" v-if="isRootDir"><router-view /></div>
    <router-view v-else />
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
export default {
  data: function() {
    return {}
  },
  computed: {
    isRootDir() {
      return this.$route.path === "/"
    },
    getPageName() {
      return this.$route.path === "/"
        ? "LeadHit"
        : `Leadhit: ${this.$route.path.slice(1)}`
    },
  },

  components: {
    Navbar,
  },
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
