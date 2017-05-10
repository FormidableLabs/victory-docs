import {extendObservable, computed, toJS} from "mobx";
import {sidebarContent} from "./components/sidebar/content";
import search from "./components/sidebar/search";

class SidebarStore {
  constructor() {
    extendObservable(this, {
      searchText: "",
      sidebarContent,
      searchIndex: computed(() => {
        return search.createSearchIndex(toJS(this.sidebarContent));
      }),
      sidebarMatchingNodes: computed(() => {
        return search.getMatching(this.searchText, this.searchIndex);
      })
    });
  }
}

export default new SidebarStore();
