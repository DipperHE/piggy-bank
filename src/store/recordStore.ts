import recordsModel from "@/models/recordsModel";

export default {
  recordList: recordsModel.fetch(),
  createRecord: (record: RecordItem) => recordsModel.create(record),
};
