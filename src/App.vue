<template>
  <div id="app">
    <Header />
    <Index />
    <span class="material-icons-outlined">shopping_cart</span>
    <span class="material-icons-outlined">format_list_bulleted</span>
    <span class="material-icons-outlined">done</span>
    <span class="material-icons-outlined">email</span>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Index from './view/index.vue';

export default {
  name: 'App',
  components: {
    Header: Header,
    Index: Index,
  }
}
</script>

<style></style>
