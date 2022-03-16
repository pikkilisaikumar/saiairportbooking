import './index.css'

const TypeOfItem = props => {
  const {each, isActiveCase, onIsActiveBookItem} = props
  const {name, id} = each

  const onHandleBookItems = () => {
    onIsActiveBookItem(id)
  }

  const stylingclassName = isActiveCase
    ? 'name-book-item-paragraph'
    : 'name-book-item-paragraph1'
  return (
    <li className="m-3">
      <button
        type="button"
        className="button-special-book-item"
        onClick={onHandleBookItems}
      >
        <div>
          <p className={stylingclassName}>{name}</p>
        </div>
      </button>
    </li>
  )
}

export default TypeOfItem
