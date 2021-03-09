// createAction, is factory function that is used to define
// action definition for actions dispatched from UI
// props, the action parameter aka Payload like EventArgs
import { createAction, props } from "@ngrx/store";
import { ProductInfo } from "./../models/app.productinfo.model";

// request action or action that will be dispatched
export const getProducts = createAction(
   '[Product] Get Product' // action Type, a developer freindly name
);

// success action
export const getProductsSuccess= createAction(
  '[Proiduct] Get Product Success',
  props<{products: ProductInfo[]}>() // payload (either input or outparameter)
);

// getProudctById, payload will be id
// getProudctByIdSuccess, payload will be ProductInfo

export const postProduct = createAction(
  '[Product] Post Product',
  props<{payload:ProductInfo}>()
);

export const postProductSuccess = createAction(
  '[Product] Post Product Success',
  props<{payload:ProductInfo}>()
);


// putProudct, payload will be ProductInfo
// putProudctSuccess, payload will be ProductInfo


// deleteProudctById, payload will be id
// deleteProudctByIdSuccess, payload will be ProductInfo
