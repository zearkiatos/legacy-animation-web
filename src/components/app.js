import { without } from "lodash";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import React, { Component } from "react";
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
          <ReactCSSTransitionGroup {...transitionOptions}>
            {this.renderQuotes()}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}

export default App;
