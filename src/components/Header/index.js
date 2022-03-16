import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {isTrue: true}

  onclick = () => {
    this.setState({isTrue: true})
  }

  onclick1 = () => {
    this.setState({isTrue: false})
  }

  render() {
    const {isTrue} = this.state
    return (
      <nav className="nav-header">
        <Link to="/" className="link-item" onClick={this.onclick}>
          {isTrue ? (
            <h1 className="airport-city-cab">AIRPORT CAB</h1>
          ) : (
            <h1 className="airport-city-cab1">AIRPORT CAB</h1>
          )}
        </Link>
        <Link to="/ride" className="link-item" onClick={this.onclick1}>
          {isTrue ? (
            <h1 className="airport-city-cab1">CITY RIDE</h1>
          ) : (
            <h1 className="airport-city-cab">CITY RIDE</h1>
          )}
        </Link>
      </nav>
    )
  }
}

export default Header
