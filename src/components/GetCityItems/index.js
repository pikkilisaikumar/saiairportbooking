import {Component} from 'react'

import './index.css'

class GetCityItem extends Component {
  state = {cityList: []}

  componentDidMount() {
    this.cityList()
  }

  cityList = async () => {
    const responseCity = await fetch(
      'https://preprod.mojoboxx.com/preprod/webapi/getCityList',
    )
    const citydata = await responseCity.json()

    this.setState({cityList: citydata})
  }

  handleCitySelect = event => {
    const {handleTheAirPort} = this.props

    handleTheAirPort(event.target.value)
  }

  render() {
    const {cityList, ActiveCity} = this.state

    return (
      <div className="mobilecity-container">
        <select
          className="form-control selectelement-styling"
          value={ActiveCity}
          onChange={this.handleCitySelect}
        >
          <option value={ActiveCity}>Select City</option>
          {cityList.map(eachCity => (
            <option key={eachCity.id} value={eachCity.code}>
              {eachCity.name}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default GetCityItem
