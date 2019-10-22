import { SET_UPDATE_FREQ, GET_UPDATE_FREQ, SET_THRESHOLD, CHANGE_VIEW, GET_PRICE, GET_HISTORICAL, LOADING_HISTORICAL } from '../actions/types.js'

export interface tickerData {
    0: string,
    1: number,
}

export interface tickerDataTime {
    symbol: string,
    price: number,
    time: number
}

export interface freqState {
    freq: number
}

export interface getFreqStateAction extends freqState{
    type: typeof GET_UPDATE_FREQ,
}

export interface setFreqStateAction extends freqState{
    type: typeof SET_UPDATE_FREQ,
}

export type freqStateActions = getFreqStateAction | setFreqStateAction

export interface thresholdState {
    threshold: number
}

export interface setThresholdStateAction extends thresholdState{
    type: typeof SET_THRESHOLD,
}

export type thresholdStateActions = setThresholdStateAction


export interface realTimePriceState{
    data: tickerData[]
}

export interface updateRealTimePriceAction extends realTimePriceState {
    type: typeof GET_PRICE,
}

export type realTimePriceActions = updateRealTimePriceAction

export interface historicalPriceState {
    data: tickerDataTime[],
    startTime: number,
    endTime: number,
    loading: boolean
}

export interface getHistoricalPrice extends historicalPriceState{
    type: typeof GET_HISTORICAL,
}

export interface historicalPriceLoading{
    type: typeof LOADING_HISTORICAL,
    loading: boolean
}

export type historicalPriceActions = historicalPriceLoading | getHistoricalPrice

export interface viewState {
    view: string
}

export interface setViewStateAction extends viewState{
    type: typeof CHANGE_VIEW,
}

export type viewStateActions = setViewStateAction
