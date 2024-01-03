//accion
//que es lo que tiene que hacer
export interface Action {
    type: string;
    payload?: any;
}


export interface reducer<T>{
    //siempre regresa el mismo valor
    (stare: T, accion: Action):T
}