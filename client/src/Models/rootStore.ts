import { types } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

const RootStore = types
  .model('rootStore', {
    rootStoreIsActive: types.boolean
  })
  .actions((self) => ({
    afterCreate() {
      if (self) return self.rootStoreIsActive = true;
    }
  }))

  const rootStore = RootStore.create({rootStoreIsActive: false})
  makeInspectable(rootStore);

  export { rootStore, };