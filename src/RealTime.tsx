import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getUpdateFreq } from './actions/getUpdateFreq'
import { setUpdateFreq } from './actions/setUpdateFreq'
import { setThreshold } from './actions/setThreshold'
import Ticker from './Ticker'

import ThresholdInput from './ThresholdInput'

import { tickerData } from './types/interface'

interface Props {
  threshold: number,
  updateFreq: number,
  allData: tickerData[]
  setUpdateFreq: (val: string) => void
  getUpdateFreq: () => void
}

class RealTime extends React.Component<Props> {

  componentDidMount() {
    let { getUpdateFreq }: Props = this.props
    getUpdateFreq()
  }

  render() {
    let { threshold, updateFreq, allData, setUpdateFreq }: Props = this.props
    let prices = allData
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

            <div className="level-right">
              <div className="level-item">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" id="setFreq" type="number" name="search" placeholder="Set Update Frequency (ms)" />
                  </div>

                  <div className="control">
                    <button className="button is-primary" type="submit" name="button"
                      onClick={() => setUpdateFreq((document.getElementById("setFreq") as HTMLInputElement).value)}>Update</button>
                  </div>
                </div>
              </div>
              <div className="level-item">
                Current Update Freq: {updateFreq}ms
              </div>
            </div>
          </nav>
        </div>
        <div>
        </div>

        Showing last {prices.length} elements

        <div className="columns is-flex is-multiline">

          {Object.keys(prices).map((ticker, i) => (
            <div className="column is-1" key={`column${i}`}>
              <div className={prices[i][1] < threshold ? `has-background-danger has-text-white` : 'has-background-success'}>
                {prices[i][0]} :<br /> {prices[i][1]}
              </div>
            </div>
          ))}
        </div>


      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  allData: state.price.data,

  updateFreq: state.freq.freq,

  threshold: state.threshold.threshold
})

export default connect(mapStateToProps, { getUpdateFreq, setUpdateFreq, setThreshold })(RealTime);
