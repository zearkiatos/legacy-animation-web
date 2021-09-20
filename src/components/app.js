import { without } from "lodash";
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
      return this.state.quotes.map((item, index) => {
        return (
            <li className="list-group-item" key={item}>
                {item}
                <button onClick={this.onRemoveClick.bind(this, item)} className="remove btn btn-danger">Remove</button>
            </li>
        )
      })
  }

  render() {
      return (
        <div>
            <button onClick={this.onAddClick.bind(this)}>Add</button>
            <ul className="list-group">
                {this.renderQuotes()}
            </ul>
        </div>
      );
  }
}

export default App;
