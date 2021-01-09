<template>
  <transition name="modal">
    <div class="modal">
      <div class="modal-bg"></div>
      <div class="modal-main" :class="classMain">
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    classMain: String
  },
  mounted() {
    localStorage.b = 1

  }
}
</script>
