<template>
  <div class="error" :class="{ 'error--hide': visibleClass }">
    <p class="error__text">
      {{ errorText }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    errorText: {
      type: String,
      required: true,
    },

    visibleClass: Boolean,
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
.error {
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: $padding-sm;
  width: fit-content;
  margin: 0 auto;
  right: 0;
  left: 0;
  min-height: 40px;
  top: 10vh;
  @include primary-component;
  background-color: rgba(200, 255, 230, 1);
  box-shadow: inset 0px 3px 10px rgba(255, 255, 255, 0.2),
    inset 0px -2px 3px rgba(0, 0, 0, 0.1);
  transition: transform 400ms cubic-bezier(0.3, 2, 0.2, 1),
    opacity 500ms ease-out;

  &:hover {
    transform: scale(1.02);
  }

  &--hide {
    opacity: 1;
  }
}
.error__text {
  font-family: $font-primary;
  color: $text-contrast;
  font-weight: bold;
  -moz-user-select: none;
  -webkit-user-select: none;
}
</style>
