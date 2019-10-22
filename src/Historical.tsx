import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getHistorical } from './actions/GetHistoricalPrice'
import { setThreshold } from './actions/setThreshold'
import Ticker from './Ticker'
import ThresholdInput from './ThresholdInput'
import { AppState } from './reducers'
import { tickerDataTime } from './types/interface'

let pageSize: number = 120

interface Props {
    data: tickerDataTime[]
    startTime: number
    endTime: number
    loading: boolean
    threshold: number
    getHistorical: () => void
}

interface State{
    page: number
}

class Historical extends React.Component<Props,State> {
    state: State = {
        page: 0
    }

    componentDidMount() {
        this.props.getHistorical()
    }

    render() {
        let { data, startTime, endTime, loading, threshold, getHistorical }: Props = this.props
        if (loading === true) return null
        
        let start: string = generateTime(startTime)
        let end: string = generateTime(endTime)

        let [left5s, left30s, right5s, right30s] = ['< Prev', '<< Prev 10%', 'Next >', 'Skip 10%>>']
        let prices = data
        
        let totalPage: number = Math.ceil(this.props.data.length / pageSize)

        let toDisplay = prices.slice((this.state.page * pageSize), (this.state.page + 1) * pageSize)

        let pageStartTime: string = generateTime(toDisplay[0]['time'])
        let pageEndTime: string = generateTime(toDisplay[toDisplay.length - 1]['time'])

        return (
            <div className="container is-centered">
                <div>
                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <ThresholdInput />

                            </div>
                            <div className="level-item">
                                Current Threshold: {threshold}
                            </div>
                        </div>
                        <div className="level-item">
                            <button className="button is-primary" onClick={() => getHistorical()}>Reload Historical Data</button>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <div className="buttons is-centered">
                                    <button className="button is-primary" onClick={() => this.setState({ page: Math.max(this.state.page - Math.round(totalPage / 10), 0) })}>{left30s}</button>
                                    <button className="button is-primary" onClick={() => this.setState({ page: Math.max(this.state.page - 1, 0) })}>{left5s}</button>
                                    <button className="button is-primary" onClick={() => this.setState({ page: Math.min(this.state.page + 1, totalPage - 1) })}>{right5s}</button>
                                    <button className="button is-primary" onClick={() => this.setState({ page: Math.min(this.state.page + Math.round(totalPage / 10), totalPage - 1) })}>{right30s}</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <br />
                <div>
                    Historical Data available: {start} to {end}<br /><br />

                    Time range of current page: {pageStartTime} to {pageEndTime}<br />
                    Page {this.state.page + 1} of {totalPage}<br /><br />
                </div>
                <div className="columns is-flex is-multiline">
                    {Object.keys(toDisplay).map((ticker,i) => (
                        <div className="column is-1" key={`${i}${toDisplay[i].symbol}${toDisplay[i].price}`}>
                        <div className={toDisplay[i].price < threshold ? `has-background-danger has-text-white` : 'has-background-success'}>
                            {toDisplay[i].symbol} :<br /> {toDisplay[i].price}
                        </div>
                    </div>
                    ))}

                </div>

            </div>
        );
    }
}

const generateTime = (epoch: number) => {
    let time = new Date(epoch * 1000)
    let output : string = `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`
    return output
}

const pad = (input: number) => {
    let output: string
    if (input < 10) {
        output = '0' + String(input)
    } else{
        output = String(input)
    }
    return output
}



const mapStateToProps = (state: AppState) => ({
    data: state.historical.data,
    startTime: state.historical.startTime,
    endTime: state.historical.endTime,
    loading: state.historical.loading,
    threshold: state.threshold.threshold

})

export default connect(mapStateToProps, { getHistorical, setThreshold })(Historical);
