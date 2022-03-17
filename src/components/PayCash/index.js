import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {MdOutlineHorizontalRule} from 'react-icons/md'

import {SiSamsungpay, SiAmazonpay} from 'react-icons/si'

import {ImCreditCard} from 'react-icons/im'

import {FaCcMastercard} from 'react-icons/fa'

import ChangeContext from '../../context/ChangeContext'

import './index.css'

class PayCash extends Component {
  state = {isPresentDetails: true}

  okButtonHandle = () => {
    this.setState({isPresentDetails: false})
  }

  render() {
    const {isPresentDetails} = this.state
    const {listDetails} = this.props

    const {phoneNumber, date, time, toState, TypeCar, fromState} = listDetails

    return (
      <ChangeContext.Consumer>
        {value => {
          const {isValueHandle} = value

          const okButtonHandle = () => {
            isValueHandle()
          }

          return (
            <div>
              {isPresentDetails ? (
                <>
                  <div className="pay-cash-container">
                    <div className="box-container-payment-option">
                      <div className="hrline-payment-content-paragraph">
                        <MdOutlineHorizontalRule className="hrline-paycash" />
                        <p className="pay-ment-option-paragraph">
                          Payment Option
                        </p>
                      </div>
                      <div className="payment-white-container mb-3">
                        <SiSamsungpay className="paylater-icon" />
                        <button type="button" className="ml-3 paylater-button">
                          Pay Later
                        </button>
                      </div>
                      <div className="payment-white-container mb-3">
                        <FaCcMastercard className="master-card-icons" />
                        <button type="button" className="ml-3 paylater-button">
                          Debit/Credit Card
                        </button>
                      </div>
                      <div className="payment-white-container mb-3">
                        <ImCreditCard className="im-card-icons" />
                        <button type="button" className="ml-3 paylater-button">
                          UPI
                        </button>
                      </div>
                      <div className="payment-white-container">
                        <SiAmazonpay className="master-card-icons" />
                        <Popup
                          modal
                          trigger={
                            <button
                              type="button"
                              className="ml-3 paylater-button"
                            >
                              Pay by Cash
                            </button>
                          }
                        >
                          {() => (
                            <>
                              <div className="pop-container-one">
                                <img
                                  src="https://cdn1.vectorstock.com/i/1000x1000/86/70/check-mark-symbol-tick-yes-button-dirty-grunge-vector-29308670.jpg"
                                  alt="congratulation"
                                  className="congratulation-images-styling"
                                />
                                <h1 className="contratualation-heading">
                                  Congratulations!
                                </h1>
                                <p>Booking has been successful</p>
                                <button
                                  type="button"
                                  className="trigger-button  btn btn-danger"
                                  onClick={this.okButtonHandle}
                                >
                                  <button
                                    type="button"
                                    className="okk-button-styling"
                                    onClick={okButtonHandle}
                                  >
                                    OK
                                  </button>
                                </button>
                              </div>
                            </>
                          )}
                        </Popup>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="trip-details-container">
                  <div className="trip-fare-container mb-2">
                    <h1 className="trip-details-heading-one">Trip Details</h1>
                    <img
                      src={TypeCar}
                      alt="car"
                      className="styling-one-image-in-trip-details"
                    />
                  </div>
                  <div className="mb-3">
                    <p className="from-paragraph">From</p>
                    <p>{fromState}</p>
                  </div>

                  <div className="mb-3">
                    <p className="from-paragraph">To</p>
                    <p>{toState}</p>
                  </div>
                  <div className="mb-3">
                    <p className="from-paragraph">time</p>
                    <p>{time}</p>
                  </div>
                  <div className="mb-3">
                    <p className="from-paragraph">date</p>
                    <p>{date}</p>
                  </div>
                  <div className="mb-3">
                    <p className="from-paragraph">MobileNumber</p>
                    <p>{phoneNumber}</p>
                  </div>
                  <div className="mb-3">
                    <p className="from-paragraph">Trip fare</p>
                    <div className="trip-fare-container mb-2">
                      <p>Base Fare</p>
                      <p>undefined</p>
                    </div>
                    <div className="trip-fare-container mb-2">
                      <p>Cancellation Fee</p>
                      <p>Rs.0</p>
                    </div>
                    <div className="trip-fare-container mb-2">
                      <p>Discount</p>
                      <p>Rs.0</p>
                    </div>
                    <p>Payment method</p>
                    <p>Pending</p>
                    <div className="trip-fare-container mb-2">
                      <p className="from-paragraph">
                        Estimated Distance:1,575km
                      </p>
                      <p>undefined</p>
                    </div>
                    <button type="button" className="btn btn-danger">
                      Download Confirmation
                    </button>
                  </div>
                </div>
              )}
            </div>
          )
        }}
      </ChangeContext.Consumer>
    )
  }
}

export default PayCash
