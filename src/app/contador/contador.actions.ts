import { createAction } from '@ngrx/store';

//creacion de una accion 
export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');