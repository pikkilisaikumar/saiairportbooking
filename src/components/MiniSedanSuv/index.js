import {Component} from 'react'

import VechicleItem from '../VechicleItem'

import './index.css'

class MiniSedanSuv extends Component {
  state = {vehicleItem: [], activeData: 1}

  componentDidMount() {
    this.getVechileItem()
  }

  getVechileItem = async () => {
    const apiUrl =
      'https://preprod.mojoboxx.com/preprod/webapi/getCabPartnerDataRR?type=AC&city=DEL'
    const vechileresponse = await fetch(apiUrl)
    const vechileData = await vechileresponse.json()

    const vechileImage = vechileData[0].partner_image
    const actualImages = vechileImage.split(',')

    const vechiledata = [
      {
        id: 1,
        imageUrl: actualImages[0],
        name: 'Mini',
      },
      {
        id: 2,
        imageUrl: actualImages[1],
        name: 'Sedan',
      },
      {
        id: 3,
        imageUrl: actualImages[2],
        name: 'SUV',
      },
    ]

    this.setState({vehicleItem: vechiledata})
  }

  getVechicleHandle = id => {
    this.setState({activeData: id})
  }

  render() {
    const {vehicleItem, activeData} = this.state
    const {typeOfVehicleHandle} = this.props
    return (
      <ul className="unorderlist-vechile">
        {vehicleItem.map(eachVechicle => (
          <VechicleItem
            typeOfVehicleHandle={typeOfVehicleHandle}
            key={eachVechicle.id}
            eachVechicle={eachVechicle}
            activeVechicle={activeData === eachVechicle.id}
            getVechicleHandle={this.getVechicleHandle}
          />
        ))}
      </ul>
    )
  }
}

export default MiniSedanSuv
