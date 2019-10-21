import { CHANGE_VIEW } from './types'
import { Dispatch } from 'redux';

export const changeView = (view: string) => (dispatch: Dispatch) => {
    dispatch({
        type: CHANGE_VIEW,
        view: view,
    })
}
