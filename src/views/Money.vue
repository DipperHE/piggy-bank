<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="notes">
      <FormItem
        placeholder="在这里输入备注"
        fieldName="备注"
        @update:value="onUpdateNotes"
      />
    </div>
    <Tags :dataSource.sync="tags" @update:value="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component, Watch } from "vue-property-decorator";
import recordsModel from "@/models/recordsModel";
import tagsModel from "@/models/tagsModel";

const records = recordsModel.fetch();
const tags = tagsModel.fetch();

@Component({
  components: { Tags, FormItem, Types, NumberPad },
})
export default class Money extends Vue {
  tags = tags;
  records: RecordItem[] = records;
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
  saveRecord() {
    const record2: RecordItem = recordsModel.clone(this.record);
    record2.createdAt = new Date();
    this.records.push(record2);
  }
  @Watch("records")
  onRecordListChange() {
    recordsModel.save(this.records);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
</style>
