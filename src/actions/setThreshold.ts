import { SET_THRESHOLD } from './types'
import { Dispatch } from 'redux';

export const setThreshold = (value: number) => (dispatch: Dispatch) => {
    dispatch({
        type: SET_THRESHOLD,
        threshold: value,
    })
}
