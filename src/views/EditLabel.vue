<template>
  <Layout>
    <div>
      <Icon name="left" />
      <span>编辑标签</span>
    </div>
    <Notes fieldName="标签名" placeholder="请输入标签名" />
  </Layout>
</template>

<script lang="ts">
import Notes from "@/components/Money/Notes.vue";
import tagsModel from "@/models/tagsModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { Notes },
})
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
