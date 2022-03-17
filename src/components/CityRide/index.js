import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {BsFillPencilFill} from 'react-icons/bs'

import {BiCurrentLocation} from 'react-icons/bi'

import {ImSearch} from 'react-icons/im'

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

class AirPort extends Component {
  state = {
    listDetails: {},
    selectedVechile: false,
    isActive: listBookingItem[0].id,
    ActiveCity: 'Select City',
    mobileNo: '',
    sourceCityName: '',
    selectAirport: '',
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    toLocation: '',
    TypeCar:
      'https://mobisign-bucket.s3.ap-south-1.amazonaws.com/Cabs/departure_assets/new10Feb/new/Quickride/Sedan.jpg',
    referalCode: '',
    isChecked: true,
    isMobileTrue: false,
    isTrueConfirmBtn: true,
    isToLocation: false,
    isReferalCodeTrue: false,
    isDropTrue: false,
    dropText: '',
  }

  typeOfVehicleHandle = image => {
    this.setState({TypeCar: image})
  }

  handleTheAirPort = city => {
    this.setState({ActiveCity: city, isTrueConfirmBtn: false})
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
      date,
      time,
      toLocation,
      referalCode,
      dropText,
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
        date,
        time,
        fromState: toLocation,
        toState: dropText,
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

  dropLocationBlur = event => {
    if (event.target.value === '') {
      this.setState({isDropTrue: true})
    } else {
      this.setState({isDropTrue: false, dropText: event.target.value})
    }
  }

  render() {
    const {
      isActive,
      ActiveCity,
      mobileNo,
      isReferalCodeTrue,
      toLocation,
      referalCode,
      isMobileTrue,
      isTrueConfirmBtn,
      isToLocation,
      isChecked,
      listDetails,
      selectedVechile,
      isDropTrue,
    } = this.state

    return (
      <ChangeContext.Consumer>
        {value => {
          const {isValueHandle} = value

          const handleConfirmpickup = () => {
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
                      <div className="mb-3 getcity-airport-container mobileNumber-container">
                        <GetCityItems
                          ActiveCity={ActiveCity}
                          handleTheAirPort={this.handleTheAirPort}
                        />
                      </div>
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
                          *Please fill out this Pickup location field
                        </p>
                      )}
                      <div className="mt-2 mb-3 mobileNumber-container">
                        <input
                          onBlur={this.dropLocationBlur}
                          type="text"
                          placeholder="Drop location"
                          className="form-control mobile-number-input-box"
                        />
                        <ImSearch />
                      </div>
                      {isDropTrue && (
                        <p className="required-field">
                          *Please fill out this Drop location field
                        </p>
                      )}
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
                            className="confirm-button-pickup"
                            onClick={handleConfirmpickup}
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

export default AirPort
