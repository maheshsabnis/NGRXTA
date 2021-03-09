// createReducer, the function that will define Reducer with two parameters
// first parameter: the initial state of the store, that will updated
// when the action is dispatched and executed
// second Parameter: the 'on()' function, this is used to
// listen the action that is dispatched from the UI

// upon the action dispatched and its execution the store will
// be updated using the return values (if any) from the action
import { createReducer,on } from "@ngrx/store";
// the actions those are dispatched
import { ProductActions } from "./../actions/index";
// the intial state of the store
import { initialProductState } from "./../state/app.product.state";

export const reducer = createReducer(
   initialProductState,
   on(ProductActions.getProductsSuccess,(state, {products})=> ({
     ...state,  // update the state by adding products in it
                // Object.create(state, products)
     products
   })),
   on(ProductActions.postProductSuccess,(state,payload)=>({
      ...state, payload
   }))
   // on() putProductSuccess
   // on() deleteProductSuccess
   // on() getProductByIdSuccess
);

