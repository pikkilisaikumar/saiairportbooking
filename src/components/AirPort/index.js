import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {BsFillPencilFill} from 'react-icons/bs'

import {BiCurrentLocation} from 'react-icons/bi'

import AirPortHeader from '../AirPortHeader'

import PayCash from '../PayCash'

import MiniSedanSuv from '../MiniSedanSuv'

import GetCityItems from '../GetCityItems'

import TypeOfItem from '../TypeOfItem'

import Header from '../Header'

import './index.css'

const listBookingItem = [
  {id: uuidv4(), name: 'Ride'},
  {
    id: uuidv4(),
    name: 'Rental',
  },
  {
    id: uuidv4(),
    name: 'Outstation',
  },
]

class AirPort extends Component {
  state = {
    listDetails: {},
    isActive: listBookingItem[0].id,
    ActiveCity: 'Select City',
    airPortList: [],
    mobileNo: '',
    sourceCityName: '',
    selectAirport: '',
    date: '',
    time: '',
    toLocation: '',
    TypeCar:
      'https://mobisign-bucket.s3.ap-south-1.amazonaws.com/Cabs/departure_assets/new10Feb/new/Quickride/Sedan.jpg',
    referalCode: '',
    isChecked: true,
    isMobileTrue: false,
    isTrueConfirmBtn: true,
    isToLocation: false,
    isReferalCodeTrue: false,
  }

  componentDidMount() {
    this.getCityList()
  }

  typeOfVehicleHandle = image => {
    this.setState({TypeCar: image})
  }

  handleTheAirPort = city => {
    this.setState({ActiveCity: city, isTrueConfirmBtn: false}, this.getCityList)
  }

  getCityList = async () => {
    const {ActiveCity} = this.state
    if (ActiveCity === 'Select City') {
      const itemCity = [
        {
          id: uuidv4(),
          sourceName: 'Select Ternminal',
        },
      ]
      this.setState({airPortList: itemCity})
    } else {
      const responsedata = await fetch(
        'https://preprod.mojoboxx.com/preprod/webapi/meruPickupPoint',
      )
      const jsondata = await responsedata.json()
      console.log(jsondata)
      const paricularAirPort = jsondata[`${ActiveCity}`]
      console.log(paricularAirPort)
      if (paricularAirPort === undefined) {
        this.setState({airPortList: []})
      } else {
        const totalAirPort = paricularAirPort.map(eachAirPort => ({
          id: eachAirPort.id,
          sourceName: eachAirPort.source_name,
          sourceCity: eachAirPort.source_city,
        }))

        this.setState({
          airPortList: totalAirPort,
          selectAirport: totalAirPort[0].sourceName,
          sourceCityName: totalAirPort[0].sourceCity,
        })
      }
    }
  }

  onIsActiveBookItem = item => {
    this.setState({isActive: item})
  }

  onMobileNumberHandle = event => {
    this.setState({mobileNo: event.target.value})
  }

  onAirportHandle = event => {
    console.log(event.target.value)
    this.setState({selectAirport: event.target.value})
  }

  onHandleDate = event => {
    this.setState({date: event.target.value})
  }

  onHandleTime = event => {
    this.setState({time: event.target.value})
  }

  toLocationHandle = event => {
    this.setState({toLocation: event.target.value})
  }

  referalHandleOne = event => {
    this.setState({referalCode: event.target.value})
  }

  ApplyBtnHandle = () => {
    const {referalCode} = this.state
    if (referalCode === '') {
      this.setState({isReferalCodeTrue: true})
    } else {
      this.setState({isReferalCodeTrue: false})
    }
  }

  confirmBtn = () => {
    const {
      mobileNo,
      ActiveCity,
      date,
      time,
      toLocation,
      referalCode,
      TypeCar,
      selectAirport,
      sourceCityName,
    } = this.state
    if (
      mobileNo === '' &&
      ActiveCity !== 'Select City' &&
      toLocation !== '' &&
      referalCode !== ''
    ) {
      this.setState({
        isMobileTrue: true,
        isReferalCodeTrue: false,

        isToLocation: false,
      })
    } else if (
      mobileNo !== '' &&
      ActiveCity !== 'Select City' &&
      toLocation === '' &&
      referalCode !== ''
    ) {
      this.setState({
        isMobileTrue: false,
        isToLocation: true,
        isReferalCodeTrue: false,
      })
    } else if (
      mobileNo !== '' &&
      ActiveCity !== 'Select City' &&
      toLocation !== '' &&
      referalCode === ''
    ) {
      this.setState({
        isReferalCodeTrue: true,
        isMobileTrue: false,
        isToLocation: false,
      })
    } else if (
      mobileNo === '' &&
      ActiveCity !== 'Select City' &&
      toLocation === '' &&
      referalCode === ''
    ) {
      this.setState({
        isReferalCodeTrue: true,
        isMobileTrue: true,
        isToLocation: true,
      })
    } else if (
      mobileNo === '' &&
      ActiveCity !== 'Select City' &&
      toLocation === '' &&
      referalCode !== ''
    ) {
      this.setState({
        isReferalCodeTrue: false,
        isMobileTrue: true,
        isToLocation: true,
      })
    } else if (
      mobileNo === '' &&
      ActiveCity !== 'Select City' &&
      toLocation !== '' &&
      referalCode === ''
    ) {
      this.setState({
        isReferalCodeTrue: true,
        isMobileTrue: true,
        isToLocation: false,
      })
    } else if (
      mobileNo !== '' &&
      ActiveCity !== 'Select City' &&
      toLocation === '' &&
      referalCode === ''
    ) {
      this.setState({
        isReferalCodeTrue: true,
        isMobileTrue: false,
        isToLocation: true,
      })
    } else {
      const finalData = {
        phoneNumber: mobileNo,
        date,
        time,
        fromState: ActiveCity,
        toState: toLocation,
        referenceCode: referalCode,
        TypeCar,
        selectAirport,
        sourceCityName,
      }

      this.setState({
        isReferalCodeTrue: false,
        isMobileTrue: false,
        isToLocation: false,
        isChecked: false,
        listDetails: finalData,
      })
    }
  }

  render() {
    const {
      isActive,
      ActiveCity,
      airPortList,
      mobileNo,
      selectAirport,
      date,
      isReferalCodeTrue,
      time,
      toLocation,
      referalCode,
      isMobileTrue,
      isTrueConfirmBtn,
      isToLocation,
      isChecked,
      listDetails,
    } = this.state
    return (
      <div>
        {isChecked ? (
          <>
            <Header />
            <div>
              <AirPortHeader />
              <ul className="unorderlist-book-items">
                {listBookingItem.map(eachone => (
                  <TypeOfItem
                    key={eachone.id}
                    each={eachone}
                    isActiveCase={eachone.id === isActive}
                    onIsActiveBookItem={this.onIsActiveBookItem}
                  />
                ))}
              </ul>
              <div className="all-input-box-container">
                <div className="mt-2 mb-3 mobileNumber-container">
                  <input
                    onChange={this.onMobileNumberHandle}
                    type="text"
                    placeholder="Enter Your Mobile Number"
                    className="form-control mobile-number-input-box"
                    value={mobileNo}
                  />

                  <BsFillPencilFill />
                </div>
                {isMobileTrue && (
                  <p className="required-field">
                    *please Enter a valid phone number
                  </p>
                )}
                <div className="mb-3 getcity-airport-container">
                  <GetCityItems
                    ActiveCity={ActiveCity}
                    handleTheAirPort={this.handleTheAirPort}
                  />
                  <div className="mobileairport-container m-2">
                    <select
                      className="form-control selectelement-styling-airport"
                      onChange={this.onAirportHandle}
                      value={selectAirport}
                    >
                      {airPortList.map(eachAir => (
                        <option key={eachAir.id} value={eachAir.sourceName}>
                          {eachAir.sourceName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mobileairport-container m-2">
                    <input
                      onChange={this.onHandleDate}
                      type="date"
                      value={date}
                      className="date-time-input-element form-control"
                    />
                  </div>
                  <div className="mobileairport-container m-2">
                    <input
                      value={time}
                      onChange={this.onHandleTime}
                      type="time"
                      className="date-time-input-element form-control"
                    />
                  </div>
                </div>
                <div className="mt-2 mb-3 mobileNumber-container">
                  <input
                    onChange={this.toLocationHandle}
                    value={toLocation}
                    type="text"
                    placeholder="To location"
                    className="form-control mobile-number-input-box"
                  />
                  <BiCurrentLocation />
                </div>
                {isToLocation && (
                  <p className="required-field">
                    *Please fill out this drop location field
                  </p>
                )}
                <div>
                  <MiniSedanSuv
                    typeOfVehicleHandle={this.typeOfVehicleHandle}
                  />
                </div>
                <div className="mt-2 mb-3 mobileNumber-container">
                  <input
                    value={referalCode}
                    onChange={this.referalHandleOne}
                    type="text"
                    placeholder="Have a referal code?"
                    className="form-control mobile-number-input-box"
                  />
                  <button
                    type="button"
                    className="apply-button-styling"
                    onClick={this.ApplyBtnHandle}
                  >
                    <p className="apply-styling-paragraph">Apply</p>
                  </button>
                </div>
                {isReferalCodeTrue && (
                  <p className="required-field">
                    *please Enter the valid token
                  </p>
                )}
                {isTrueConfirmBtn ? (
                  <button type="button" className="btn btn-light">
                    Confirm pickup
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.confirmBtn}
                  >
                    Confirm pickup
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <PayCash listDetails={listDetails} />
        )}
      </div>
    )
  }
}

export default AirPort
