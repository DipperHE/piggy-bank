<template>
  <div class="nav-wrapper">
    <div class="content">Money.vue</div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>
