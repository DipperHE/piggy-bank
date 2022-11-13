import tagsModel from "@/models/tagsModel";

export default {
  tagList: tagsModel.fetch(),
  createTag: (name: string) => {
    const message = tagsModel.create(name);
    if (message === "duplicated") {
      window.alert("标签名重复了");
    } else if (message === "success") {
      window.alert("添加成功");
    }
  },
  removeTag: (id: string) => {
    return tagsModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagsModel.update(id, name);
  },
  findTag(id: string) {
    return this.tagList.filter((t) => t.id === id)[0];
  },
};
