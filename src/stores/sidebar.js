import {extendObservable, computed, toJS} from "mobx";
import {sidebarContent} from "./sidebar-content";
import search from "./sidebar-search";

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

  hasSidebar(pathname) {
    return pathname.match(/^\/docs/) || pathname.match(/^\/guides/);
  }

  reset() {
    this.searchText = "";
    this.sidebarContent = sidebarContent;
  }
}

export default new SidebarStore();
