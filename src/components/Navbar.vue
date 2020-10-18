<template>
  <nav class="navbar">
    <h1 class="navbar__text">
      <router-link class="navbar__link" to="/">{{ navbarText }}</router-link>
    </h1>
  </nav>
</template>

<script>
import {} from "vue"
export default {
  props: {
    navbarText: String,
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
.navbar {
  @include primary-component;
  font-family: $font-primary;
  background-color: $primary;
  height: 4vh;
  width: 95%;
  margin: 0px auto;
  color: $text-primary;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.navbar__link {
  text-decoration: none;
  &:visited {
    color: inherit;
  }
}
</style>
