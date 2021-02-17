import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = {
  fruit: 1,
  bread: 2,
  cheese: 3,
  dessert: 4,
  charcuterie: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
createSelector(
  [selectCollections],
  collections =>
    collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
))
