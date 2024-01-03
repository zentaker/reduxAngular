import { Action } from "../ngrx-fake/ngrx";




//reducer
// no tenga comunicacion al exterior  
export const contadorReducer = (state = 10, action: Action) => {
    switch(action.type){
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'RESET':
            return state = 0
        default:
            return state
    }
}