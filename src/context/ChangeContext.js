import React from 'react'

const ChangeContext = React.createContext({
  isValue: false,
  isValueHandle: () => {},
  isValue1: false,
  isValueHandle1: () => {},
  rideChange: true,
  isRideChange: () => {},
  isRideChange1: () => {},
})

export default ChangeContext
