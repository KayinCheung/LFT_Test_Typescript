import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import Historical from './Historical'
import RealTime from './RealTime'
import { getPrice } from './actions/GetPrice'
import { AppState } from './reducers'

interface Props{
  getPrice: () => void
}

class Body extends React.Component<Props> {

  componentDidMount() {
    let { getPrice } = this.props
    getPrice()
  }

  render() {
    return (
      <div>
        {this.props.view === 'historical' ? <Historical /> : <RealTime />}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  view: state.view.view
})

export default connect(mapStateToProps, {getPrice})(Body);
