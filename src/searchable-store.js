import {extendObservable} from "mobx";

class SearchableStore {
  constructor() {
    extendObservable(this, {
      searchText: ""
    });
  }
}

export default new SearchableStore();
