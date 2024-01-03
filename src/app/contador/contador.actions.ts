import { createAction, props } from '@ngrx/store';

//creacion de una accion 
export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');

export const multiplicar = createAction(
    '[Contador] Multiplicar',
    //espesificarle caracterisitcas a la accion
    props<{numero: number}>()
    );
export const dividir = createAction(
    '[Contador] Dividir',
    props<{numero: number}>()
    );

export const reset = createAction('[Contador] Reset');