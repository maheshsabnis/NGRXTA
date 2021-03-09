+ @ngrx/store@11.0.1
    - Main NGRX Store
+ @ngrx/router-store@11.0.1
    - Sharing Store across Route of Components  in Angular NGRX Appon 
+ @ngrx/core@1.2.0
    - The Core Object MOdel that has
        - Actions
        - Reducres
        - Store Management 
+ @ngrx/store-devtools@11.0.1
    - Store Simulators in Browsers
    - Remove this in Production    
+ @ngrx/effects@11.0.1
    - Effects for Asnync Calls

Actions

``` javascript
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
  props<{payload: ProductInfo[]}>() // payload (either input or outparameter)
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

```

The best way of exporting all actions at once is create a index.ts file with the following code    

``` javascript
// import all actions
import * as ProductActions from './actions';
// export them at once
export {ProductActions};

```


Define a Store Schema that will  provide an idea of storing data in NGRX Store when actions are executed

``` javascript
import { ProductInfo } from './../models/app.productinfo.model';
// define an interface that will provide an idea of schema of dtaa stored in
// store

// define schema
export interface IProductState {
  products:ProductInfo[]; // will store data from read oepration
  product:ProductInfo; // the object for Write Operations (Create/Update)
  selectedProduct:ProductInfo; // query the store for a specific record
}

// define an initial value
export const initialProductState:IProductState = {
  products:[],
  product:new ProductInfo(0,'','','','','',0),
  selectedProduct:new ProductInfo(0,'','','','','',0)
}

```

create a single for schema and initial value  to export them at once

``` javascript
import { IProductState,initialProductState } from "./app.product.state";

// the store object that will have schema and intial value
// 'products' is the name of the store that will contain
// all data
export interface IAppProductState{
  products: IProductState
}

```

Creating Reducers

``` javascript
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


```

export all reducres at once

``` javascript
// ActionReducerMap, combine all reducers are return them as a single reducer object
import {ActionReducerMap } from "@ngrx/store";
// initial state schema
import { IAppProductState } from "./../state/app.state";
// reducers
import { reducer } from "./app.product.reducers";

export const mainReducers: ActionReducerMap<IAppProductState,any> = {
  products: reducer  // all reducers will be referres as products to read/write operations on reh store
}

```

Create an Effect that will be used to monitor the dispatched input action detected from the UI
process these actions and dispatched output actions for input action
The effect is an angular servicen that will be injected in the module
so that actions dispatched from Components declared in the module will be monitored


``` javascript

```
