import { GET_PRICE } from '../actions/types'
import { realTimePriceActions, realTimePriceState, tickerData } from '../types/interface'

const initialState: realTimePriceState = {
    data: []
}

export default function (state = initialState, action: realTimePriceActions): realTimePriceState {
    let newData
    switch (action.type) {

        case GET_PRICE:
            newData = (action.data).concat(state.data)
            if (newData.length > 500) newData.length = 500

            return {
                ...state,
                data: newData,
            }


        default:
            return state;
    }
}