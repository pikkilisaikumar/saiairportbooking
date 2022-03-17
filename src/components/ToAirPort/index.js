import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {BsFillPencilFill} from 'react-icons/bs'

import {BiCurrentLocation} from 'react-icons/bi'

import PayCash from '../PayCash'

import MiniSedanSuv from '../MiniSedanSuv'

import GetCityItems from '../GetCityItems'

import TypeOfItem from '../TypeOfItem'

import ChangeContext from '../../context/ChangeContext'

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

class ToAirPort extends Component {
  state = {
    listDetails: {},
    selectedVechile: false,
    isActive: listBookingItem[0].id,
    ActiveCity: 'Select City',
    airPortList: [],
    mobileNo: '',
    sourceCityName: '',
    selectAirport: '',
    date1: '',
    time1: '',
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

      const paricularAirPort = jsondata[`${ActiveCity}`]

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
    this.setState({date1: event.target.value})
  }

  onHandleTime = event => {
    this.setState({time1: event.target.value})
  }

  toLocationHandle = event => {
    const {ActiveCity} = this.state
    if (ActiveCity === 'Select City' && event.target.value === '') {
      this.setState({toLocation: event.target.value, selectedVechile: false})
    } else if (ActiveCity !== 'Select City' && event.target.value !== '') {
      console.log('EVERY THING IS OKK')
      this.setState({toLocation: event.target.value, selectedVechile: true})
    } else {
      this.setState({toLocation: event.target.value, selectedVechile: false})
    }
  }

  referalHandleOne = event => {
    this.setState({referalCode: event.target.value})
  }

  ApplyBtnHandle = () => {
    const {referalCode} = this.state
    if (referalCode === '') {
      this.setState({isReferalCodeTrue: true})
    } else if (referalCode.length !== 4) {
      this.setState({isReferalCodeTrue: true})
    } else {
      this.setState({isReferalCodeTrue: false})
    }
  }

  confirmBtn = () => {
    const {
      mobileNo,
      ActiveCity,
      date1,
      time1,
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
      mobileNo.length !== 10 &&
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
        date: date1,
        time: time1,
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
      date1,
      isReferalCodeTrue,
      time1,
      toLocation,
      referalCode,
      isMobileTrue,
      isTrueConfirmBtn,
      isToLocation,
      isChecked,
      listDetails,
      selectedVechile,
    } = this.state

    return (
      <ChangeContext.Consumer>
        {value => {
          const {isValueHandle} = value

          const confirmButtonToAirPort = () => {
            isValueHandle()
          }

          return (
            <div>
              {isChecked ? (
                <>
                  <div>
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
                      <div className="mt-2 mb-3 mobileNumber-container">
                        <input
                          onChange={this.toLocationHandle}
                          value={toLocation}
                          type="text"
                          placeholder="Pickup location"
                          className="form-control mobile-number-input-box"
                        />
                        <BiCurrentLocation />
                      </div>
                      {isToLocation && (
                        <p className="required-field">
                          *Please fill out this pickup location field
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
                              <option
                                key={eachAir.id}
                                value={eachAir.sourceName}
                              >
                                {eachAir.sourceName}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 getcity-airport-container">
                        <div className="mobileairport-container m-2">
                          <input
                            onChange={this.onHandleDate}
                            type="date"
                            value={date1}
                            className="date-time-input-element form-control"
                          />
                        </div>
                        <div className="mobileairport-container m-2">
                          <input
                            value={time1}
                            onChange={this.onHandleTime}
                            type="time"
                            className="date-time-input-element form-control"
                          />
                        </div>
                      </div>
                      <div>
                        <MiniSedanSuv
                          typeOfVehicleHandle={this.typeOfVehicleHandle}
                          selectedVechile={selectedVechile}
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
                          <button
                            type="button"
                            className="confirm-pickup-stying-one"
                            onClick={confirmButtonToAirPort}
                          >
                            Confirm pickup
                          </button>
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
        }}
      </ChangeContext.Consumer>
    )
  }
}

export default ToAirPort
