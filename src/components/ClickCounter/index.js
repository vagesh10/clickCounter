import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncreament = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h2 className="head">
          The Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h2>
        <p className="para">click the button to increase the count!</p>
        <button className="button" type="submit" onClick={this.onIncreament}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
