import { applySnapshot, getSnapshot, SnapshotIn, types } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

const RootStoreModel = types
  .model('rootStore', {
    rootStoreIsActive: types.boolean
  })
  .views((self) => ({
    // views here
  }))
  .actions((self) => {
    // volatiles here
    let initialState: SnapshotIn<any>;
    return {
      afterCreate() {
        initialState = getSnapshot(self)
        if (self) return self.rootStoreIsActive = true;
      },
      resetState() {
        return applySnapshot(self, initialState);
      }
    }
  });

  const rootStore = makeInspectable(RootStoreModel.create({rootStoreIsActive: false}))

  export { rootStore, };