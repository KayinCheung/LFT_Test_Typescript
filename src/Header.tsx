import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeView } from './actions/changeView'

import './App.css';

interface Props {
  changeView: (view: string) => void
}

class Header extends React.PureComponent<Props> {

  render() {
    let { changeView } = this.props

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation" >
        <div className="navbar-brand">
          <p className="navbar-item">
            Header
      </p>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary"
                onClick={() => changeView("real")}>
                View Real Time
          </button>
              <button className="button is-primary"
                onClick={() => changeView("historical")}>
                View Historical Data
          </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state: any) => ({
  view: state.view.view
})
export default connect(mapStateToProps, { changeView })(Header);
