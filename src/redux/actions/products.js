import * as types from "./types";

export function getItems(user) {
  return { type: types.GET_Items, user };
}

export function getItemsSuccess(budget) {
  return { type: types.GET_ITEMS_SUCCESS, budget };
}

export function getItemsError(error) {
  return { type: types.GET_ITEMS_FAILURE, error };
}

export function updateItem() {
  return { type: types.UPDATE_ITEM };
}

export function updateItemSuccess(budget) {
  return { type: types.UPDATE_ITEM_SUCCESS, budget };
}

export function updateItemError(error) {
  return { type: types.UPDATE_ITEM_FAILURE, error };
}

export function getPurchases() {
  return { type: types.GET_PURCHASES };
}

export function getPurchasesSuccess(budget) {
  return { type: types.GET_PURCHASES_SUCCESS, budget };
}

export function getPurchasesError(error) {
  return { type: types.GET_PURCHASES_FAILURE, error };
}

export function updatePurchase() {
  return { type: types.UPDATE_PURCHASE };
}

export function updatePurchaseSuccess(budget) {
  return { type: types.UPDATE_PURCHASE_SUCCESS, budget };
}

export function updatePurchaseError(error) {
  return { type: types.UPDATE_PURCHASE_FAILURE, error };
}
