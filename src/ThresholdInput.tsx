import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setThreshold } from './actions/setThreshold'

interface Props{
    setThreshold: (val: string) => void
}

class ThresholdInput extends React.PureComponent<Props> {
    render() {
        let { setThreshold } : Props = this.props
        return (
            <div className="field has-addons">
                <div className="control">
                    <input className="input" id="setThreshold" type="number" name="search" placeholder="Set Threshold" />
                </div>

                <div className="control">
                    <button className="button is-primary" type="submit" name="button"
                        onClick={() => setThreshold((document.getElementById("setThreshold") as HTMLInputElement).value)}>Update</button>
                </div>
            </div>
        )
    }
}


export default connect(null, { setThreshold })(ThresholdInput);
