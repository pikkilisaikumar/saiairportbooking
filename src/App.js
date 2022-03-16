import {BrowserRouter, Route, Switch} from 'react-router-dom'

import AirPort from './components/AirPort'

import CityRide from './components/CityRide'

import './App.css'

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AirPort} />
        <Route exact path="/ride" component={CityRide} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
