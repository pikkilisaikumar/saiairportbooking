import {Component} from 'react'

import AirPort from '../AirPort'

import ToAirPort from '../ToAirPort'

import CityRide from '../CityRide'

import Header from '../Header'

import ChangeContext from '../../context/ChangeContext'

import './index.css'

class SampleHeader extends Component {
  state = {isColorBtn: true}

  onHandleColor = () => {
    this.setState({isColorBtn: true})
  }

  onHandleColor1 = () => {
    this.setState({isColorBtn: false})
  }

  render() {
    const {isColorBtn} = this.state

    return (
      <ChangeContext.Consumer>
        {value => {
          let hidingornot

          const {isValue, isValue1, rideChange} = value

          if (isValue) {
            hidingornot = false
          } else {
            hidingornot = true
          }

          if (isValue1) {
            hidingornot = false
          } else {
            hidingornot = true
          }

          console.log(hidingornot)
          console.log('Thanks')

          return (
            <>
              {hidingornot && <Header />}
              <div>
                {hidingornot && (
                  <div className="from-to-airport-button-container">
                    {rideChange && (
                      <button
                        onClick={this.onHandleColor}
                        className={
                          isColorBtn
                            ? 'fromairport-button'
                            : 'fromairport-button1'
                        }
                        type="button"
                      >
                        From AirPort
                      </button>
                    )}

                    {rideChange && (
                      <button
                        type="button"
                        onClick={this.onHandleColor1}
                        className={
                          isColorBtn
                            ? 'fromairport-button1'
                            : 'fromairport-button'
                        }
                      >
                        To AirPort
                      </button>
                    )}
                  </div>
                )}
                {isColorBtn && rideChange === true && <AirPort />}
                {!isColorBtn && rideChange === true && <ToAirPort />}
                {rideChange === false && <CityRide />}
              </div>
            </>
          )
        }}
      </ChangeContext.Consumer>
    )
  }
}

export default SampleHeader

// rideChange
