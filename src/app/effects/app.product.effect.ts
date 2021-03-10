import { ProductInfo } from './../models/app.productinfo.model';
import { IAppProductState } from './../state/app.state';
import { Injectable } from '@angular/core';
import { HttpService } from './../services/app.http.service';


// Store: The Store that will be used to maintain an application state
// select: This will will be used to execute selector to read/query data from store
import { Store, select } from "@ngrx/store";

// createEffect() the method used to create effect definition
// Actions: the input (action from UI) and output (actions resulted against inou actions) actions
// ofType: used to check which is the current action in execution

import { createEffect, Actions, ofType } from "@ngrx/effects";

import {switchMap} from  'rxjs/operators';
import { ProductActions } from '../actions';
import { of } from 'rxjs';

@Injectable()
export class ProductsEffect {

  // since the action calls method from the
  // service that returns Observable, this observable
  // must be subscribe by the effect. Then the effect will read
  // data from Observable and stored it in NGRX Store
  // to call method from service  then subscribe to responser and then to read data from response
  // use switchMap and pipe operators from rxjs/operators
  // .pipe() function of observable
  // thios will create a chain of function executions by executing them in series
  // the result of first can be used in second using switchMap()
  getProducts$ = createEffect(()=> this._action$.pipe(
     ofType(ProductActions.getProducts), // monitor the action dispatched from UI
     switchMap(()=>this._serv.getData()), // call method from HTTP Service
     // get suucess data and dispatch the Success Action with the received data
     // so that reducer will update this data in store
     switchMap((products:ProductInfo[]) => of(ProductActions.getProductsSuccess({products})))
  ));

  postProducts$ = createEffect(()=> this._action$.pipe(
    ofType(ProductActions.postProduct), // monitor the action dispatched from UI
    switchMap((param)=>this._serv.postData(param.payload)), // call method from HTTP Service
    // get suucess data and dispatch the Success Action with the received data
    // so that reducer will update this data in store
    switchMap((payload:ProductInfo) => of(ProductActions.postProductSuccess({payload})))
 ));


 // create effe4cts for Edit and Delete also to read data
 // from the store for loading for edit and delete

  // inject the Effect class with the Service for external calls
  // the _action$, represents the action that may or maynot retutn the Observable
  // Note: THis is equivalent to Observable<Actions>
  // The store object that will be updated using reducers or
  // the action may directly executed in Store to Read/Select any data
  constructor(private _serv:HttpService,
      private _action$: Actions,
      private _store: Store<IAppProductState>
    ){}
}
