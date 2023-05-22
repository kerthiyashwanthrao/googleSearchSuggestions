// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {word: ''}

  onchange = event => {
    this.setState({word: event.target.value})
  }

  onClickExtend = value => {
    this.setState({
      word: value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {word} = this.state

    const updatedList = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(word.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="imgContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="logo"
            alt="google logo"
          />
        </div>
        <div className="card">
          <div className="inputContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="searchImg"
              alt="search icon"
            />
            <input
              type="search"
              className="input"
              onChange={this.onchange}
              value={word}
            />
          </div>
          <ul className="ulContainer">
            {updatedList.map(item => (
              <SuggestionItem
                key={item.id}
                item={item}
                onClickExtend={this.onClickExtend}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
