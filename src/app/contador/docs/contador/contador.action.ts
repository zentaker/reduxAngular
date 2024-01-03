import { Action } from "../ngrx-fake/ngrx";

//acciones
export const incrementadorAction: Action ={
    type: "INCREMENTAR"
};
export const decrementadorAction: Action ={
    type: "DECREMENTAR"
};
export const multiplicadorAction: Action ={
    type: "MULTIPLICAR",
    payload: 2
};
export const resetAction: Action ={
    type: "RESET"
};
