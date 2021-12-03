<template>
  <div class="modal fixed top-0 left-0 w-full h-full flex justify-center items-center" :class="{'--show': openModal}">
    <div class="rounded bg-xf p-48">
      <slot name="Modal_children"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openModal: {
      required: true,
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style>
.modal {
  background-color: rgba(#000, 0.5);
  transition: opacity 0.3s;

  &.\-\-show {
    opacity: 1;
    z-index: 10;
  }

  &:not(.\-\-show) {
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
}
</style>