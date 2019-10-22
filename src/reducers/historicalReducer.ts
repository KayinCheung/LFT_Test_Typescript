import { GET_HISTORICAL, LOADING_HISTORICAL } from '../actions/types'
import { historicalPriceActions, historicalPriceState } from '../types/interface'

const initialState: historicalPriceState = {
    data: [],
    startTime: 0,
    endTime: 0,
    loading: true
}

export default function (state = initialState, action: historicalPriceActions): historicalPriceState {
    switch (action.type) {
        case GET_HISTORICAL:
            return {
                ...state,
                data: action.data,
                startTime: action.startTime,
                endTime: action.endTime,
                loading: false
            }
        case LOADING_HISTORICAL:
        return {
            ...state,
            loading: true
        }

        default:
            return state;
    }
}