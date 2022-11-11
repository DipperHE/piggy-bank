<template>
  <Layout> 编辑标签 </Layout>
</template>

<script lang="ts">
import tagsModel from "@/models/tagsModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagsModel.fetch();
    const tags = tagsModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped></style>
