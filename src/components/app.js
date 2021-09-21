import { without } from "lodash";
import React, { Component, PropTypes } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Faker from "faker";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { quotes: [] };
  }

  onAddClick() {
    const quote = Faker.lorem.sentence();
    this.setState({ quotes: [...this.state.quotes, quote] });
  }

  onRemoveClick(quote) {
    this.setState({ quotes: without(this.state.quotes, quote) });
  }

  renderQuotes() {
    console.log(this.state.quotes);
    return this.state.quotes.map((item, index) => {
      return (
        <li className="list-group-item" key={item}>
          {item}
          <button
            onClick={this.onRemoveClick.bind(this, item)}
            className="remove btn btn-danger"
          >
            Remove
          </button>
        </li>
      );
    });
  }

  render() {
    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500,
    };
    return (
      <div>
        <button onClick={this.onAddClick.bind(this)}>Add</button>
        <ul className="list-group">
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout="500"
            transitionLeaveTimeout="500"
          >
            {this.renderQuotes()}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}

export default App;
