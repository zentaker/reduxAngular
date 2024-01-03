import { incrementadorAction, multiplicadorAction } from "./contador/contador.action";
import { contadorReducer } from "./contador/contador.reducer";
import { Action, reducer } from "./ngrx-fake/ngrx";

class Store<T> {


    constructor(private reducer: reducer<T>, private state: T){}
    getState(){
        return this.state;
    }
    //ejecuta la accion
    dispatch(accion: Action){
        this.state = this.reducer(this.state, accion);
    }
}

const store = new Store(contadorReducer,10);//10 estado incial de la aplicacion
 console.log(store.getState());

 //disparar el incrementador
 store.dispatch(incrementadorAction);
 store.dispatch(incrementadorAction);

 console.log(store.getState());

 store.dispatch(multiplicadorAction);
 console.log(store.getState());