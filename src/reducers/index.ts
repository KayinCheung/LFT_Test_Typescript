import { combineReducers } from 'redux';
import priceReducer from './priceReducer';
import freqReducer from './freqReducer';
import historicalReducer from './historicalReducer';
import viewReducer from './viewReducer';
import thresholdReducer from './thresholdReducer';



const rootReducer = combineReducers({
    price: priceReducer,
    historical: historicalReducer,
    freq: freqReducer,
    view: viewReducer,
    threshold: thresholdReducer
})

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>