import { CHANGE_VIEW } from '../actions/types'
import { viewStateActions, viewState } from '../types/interface'

const initialState: viewState = {
    view: 'real' //real or historical
}

export default function (state = initialState, action: viewStateActions): viewState {
    switch (action.type) {
        case CHANGE_VIEW:
            return {
                ...state,
                view: action.view,
            }
        default:
            return state;
    }
}