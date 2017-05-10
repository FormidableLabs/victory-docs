import {extendObservable} from "mobx";
import {sidebarContent} from "./components/sidebar/content";
import search from "./components/sidebar/search";

class SearchableStore {
  constructor() {
    extendObservable(this, {
      searchText: "",
      sidebarContent,
      searchIndex: search.createSearchIndex(sidebarContent)
    });
  }
}

export default new SearchableStore();
