import * as types from '../constants/actionType';

export interface IAdd {
    type: typeof types.ADD
}

export interface ISubtract {
    type: typeof types.SUBTRACT
}

export type Action = IAdd | ISubtract;

export const add = (): IAdd => {
    return {
        type: types.ADD
    }
}

export const subtract = (): ISubtract => {
    return {
        type: types.SUBTRACT
    }
}

export const addAsync = (): any => (dispatch: any) => {
    setTimeout(function () {
        dispatch({type: types.ADD})
    }, 1000);
}