import {Component} from 'react'

import './index.css'

class AirPortHeader extends Component {
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
      <div>
        <div className="from-to-airport-button-container">
          <button
            onClick={this.onHandleColor}
            className={
              isColorBtn ? 'fromairport-button' : 'fromairport-button1'
            }
            type="button"
          >
            From AirPort
          </button>
          <button
            type="button"
            onClick={this.onHandleColor1}
            className={
              isColorBtn ? 'fromairport-button1' : 'fromairport-button'
            }
          >
            To AirPort
          </button>
        </div>
      </div>
    )
  }
}

export default AirPortHeader
