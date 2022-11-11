const localStorageKeyName = "tags";
type Tag = {
  id: string;
  name: string;
};
type TagsModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => "success" | "duplicated"; // 联合类型
  save: () => void;
};
const tagsModel: TagsModel = {
  data: [],
  create(name) {
    const names = this.data.map((item) => item.name);
    if (names.indexOf(name) >= 0) {
      return "duplicated";
    }
    this.data.push({ id: name, name: name });
    this.save();
    return "success";
  },
  fetch() {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    );
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
};

export default tagsModel;
