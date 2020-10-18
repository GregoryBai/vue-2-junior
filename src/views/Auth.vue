<template>
  <div>
    <ul class="page__auth">
      <li class="auth__item">
        <label for="auth__input" class="input__label">Enter URL:</label>
      </li>
      <li class="auth__item">
        <input
          placeholder="website id"
          type="text"
          id="auth__input"
          :value="authInput"
          @change="handleChange($event)"
          @keydown="handleChange($event)"
          @keydown.enter="handleEnter"
          class="auth__input"
        />
      </li>
      <li class="auth__item">
        <button class="auth__button" type="button" @click="handleEnter">
          Enter
        </button>
      </li>
    </ul>
    <textError :error-text="errorText" :visible-class="hideError" v-if="true" />
  </div>
</template>

<script>
// ? set v-if to "hideError" to remove the error's transition effect
// @ is an alias to /src

import textError from "../components/textError"
import { filledRequestData } from "../helpers/helpers"
export default {
  name: "Auth",
  data() {
    return {
      errorText: "id сайта должен содержать 24 символа",
      authInput: "",
      hideError: false,
    }
  },

  computed: {
    isAuthInputOK() {
      return this.authInput.length === 24
    },
  },

  methods: {
    handleChange(e) {
      this.hideError = false
      this.authInput = e.target.value.trim()
      console.log(this.authInput)
    },

    handleEnter() {
      if (this.isAuthInputOK) {
        filledRequestData(this.authInput).then((data) => {
          if (data.message === "ok") {
            localStorage.setItem("leadhit-site-id", this.authInput)
            this.$router.push("/analytics")
          }
        })
      } else {
        this.hideError = true
      }
    },
  },

  components: {
    textError,
  },
}
</script>
<style lang="scss" scoped>
@import "../styles/base.scss";
.page__auth {
  @include primary-component;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
}

.auth__item {
  margin: 8px 0px;
}

.auth__input {
  @include shadow;
  text-align: center;
}

.input__label {
  font-family: $font-primary;
  font-weight: bold;
}

.auth__button {
  @include primary-button;
  font-weight: bold;
}
</style>
