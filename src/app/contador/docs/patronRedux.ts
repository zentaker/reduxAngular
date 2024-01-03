
//accion
//que es lo que tiene que hacer
export interface Action {
    type: string;
    payload?: any;
}



//reducer
// no tenga comunicacion al exterior  
function reducer(state = 10, action: Action) {
    switch(action.type){
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        default:
            return state
    }

  
}


//usar el reducer

//acciones
const incrementadorAction: Action ={
    type: "INCREMENTAR"
};
const decrementadorAction: Action ={
    type: "DECREMENTAR"
};
const multiplicadorAction: Action ={
    type: "MULTIPLICAR",
    payload: 2
};

console.log(reducer(10,incrementadorAction));
console.log(reducer(10,decrementadorAction));
console.log(reducer(10, multiplicadorAction));
