// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, onClickExtend} = props
  const {id, suggestion} = item

  const change = () => {
    onClickExtend(suggestion)
  }

  return (
    <li className="listContainer" key={id}>
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="btn" onClick={change}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="img"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
