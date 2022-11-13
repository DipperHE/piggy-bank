import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import tagsModel from "./models/tagsModel";
import recordsModel from "./models/recordsModel";

Vue.config.productionTip = false;

Vue.component("Nav", Nav);
Vue.component("Layout", Layout);
Vue.component("Icon", Icon);

// record store
window.recordList = recordsModel.fetch();
window.createRecord = (record: RecordItem) => recordsModel.create(record);
// tag store
window.tagList = tagsModel.fetch();
window.createTag = (name: string) => {
  const message = tagsModel.create(name);
  if (message === "duplicated") {
    window.alert("标签名重复了");
  } else if (message === "success") {
    window.alert("添加成功");
  }
};
window.removeTag = (id: string) => {
  return tagsModel.remove(id);
};
window.updateTag = (id: string, name: string) => {
  return tagsModel.update(id, name);
};
window.findTag = (id: string) => {
  return window.tagList.filter((t) => t.id === id)[0];
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
