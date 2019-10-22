import { SET_THRESHOLD } from '../actions/types'
import { thresholdStateActions, thresholdState } from '../types/interface'

const initialState: thresholdState = {
    threshold: 1000
}

export default function (state = initialState, action: thresholdStateActions): thresholdState {
    switch (action.type) {
        case SET_THRESHOLD:
            return {
                ...state,
                threshold: action.threshold
            }

        default:
            return state;
    }
}