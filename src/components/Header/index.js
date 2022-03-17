import {Component} from 'react'

import ChangeContext from '../../context/ChangeContext'

import './index.css'

class Header extends Component {
  render() {
    return (
      <ChangeContext.Consumer>
        {value => {
          const {isRideChange, rideChange, isRideChange1} = value

          const onclick = () => {
            isRideChange()
          }

          const onclick1 = () => {
            isRideChange1()
          }

          return (
            <nav className="nav-header">
              {rideChange ? (
                <button
                  type="button"
                  onClick={onclick}
                  className="m-2 airport-city-ride-cab-button"
                >
                  <h1 className="airport-city-cab">AIRPORT CAB</h1>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onclick}
                  className="m-2 airport-city-ride-cab-button"
                >
                  <h1 className="airport-city-cab1">AIRPORT CAB</h1>
                </button>
              )}

              {rideChange ? (
                <button
                  type="button"
                  onClick={onclick1}
                  className="m-2 airport-city-ride-cab-button"
                >
                  <h1 className="airport-city-cab1">CITY RIDE</h1>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onclick1}
                  className="m-2 airport-city-ride-cab-button"
                >
                  <h1 className="airport-city-cab">CITY RIDE</h1>
                </button>
              )}
            </nav>
          )
        }}
      </ChangeContext.Consumer>
    )
  }
}

export default Header

// isRideChange, rideChange
