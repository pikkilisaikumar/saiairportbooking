import './index.css'

const VechicleItem = props => {
  const {
    eachVechicle,
    activeVechicle,
    getVechicleHandle,
    typeOfVehicleHandle,
  } = props
  const {id, name, imageUrl} = eachVechicle

  const vechicleStyling = activeVechicle
    ? 'styling-one-image'
    : 'styling-one-image1'

  const handleVechicleImage = () => {
    getVechicleHandle(id)
    typeOfVehicleHandle(imageUrl)
  }

  return (
    <li className="name-image-list-item m-2">
      <p>{name}</p>
      <button
        type="button"
        onClick={handleVechicleImage}
        className="button-vechicle-styling"
      >
        <img src={imageUrl} alt={`${name}${id}`} className={vechicleStyling} />
      </button>
      <hr className="hrline-styling" />
    </li>
  )
}

export default VechicleItem
