//el que va a recivir las acciones 

import { Action, createReducer, on } from "@ngrx/store";
import { decrementar, dividir, incrementar, multiplicar, reset } from "./contador.actions";

/* export function contadorReducer(state: number = 10, action: Action){
    //operaciones autonomas
    //no puede realizar peticiones al exterior 

    switch (action.type) {
        case incrementar.type:
            return state + 1;
        case decrementar.type:
            return state -1;
            
            
    
        default:
            return state;
    }

} */

export const initialState = 20;

export const contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(reset, state => initialState),
  on(multiplicar, (state, props )=> state * props.numero),
  on(dividir, (state, props )=> state / props.numero)
);