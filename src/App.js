import {Component} from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import AirPortHeader from './components/AirPortHeader'

import ChangeContext from './context/ChangeContext'

import CityRide from './components/CityRide'

import './App.css'

class App extends Component {
  state = {isValue: false, isValue1: false, rideChange: true}

  isValueHandle = () => {
    this.setState({isValue: true, isValue1: true})
  }

  isValueHandle1 = () => {
    this.setState({isValue: true, isValue1: true})
  }

  isRideChange = () => {
    this.setState({rideChange: true})
  }

  isRideChange1 = () => {
    this.setState({rideChange: false})
  }

  render() {
    const {isValue, isValue1, rideChange} = this.state

    return (
      <div className="container">
        <ChangeContext.Provider
          value={{
            isValue,
            rideChange,
            isValue1,
            isValueHandle: this.isValueHandle,
            isValueHandle1: this.isValueHandle1,
            isRideChange: this.isRideChange,
            isRideChange1: this.isRideChange1,
          }}
        >
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={AirPortHeader} />
              <Route exact path="/ride" component={CityRide} />
            </Switch>
          </BrowserRouter>
        </ChangeContext.Provider>
      </div>
    )
  }
}

export default App
