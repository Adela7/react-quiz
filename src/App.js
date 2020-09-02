import React, { Component } from 'react';
var sum = 0;
const step = 1;

// Counter Component
class Counter extends Component {
  // constructor(props, context) {
  //   super(props, context);

  // this.state = {
  //   value: props.value,
  //   summ: props.summ,
  //   onIncrement: props.onIncrement,
  //   onDecrement: props.onDecrement,
  // };

  render() {
    const { value, onDecrement, onIncrement } = this.props;
    // const { value } = this.props;

    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button
            className="button is-danger is-small"
            onClick={onDecrement}
            type="button">
            -
          </button>
          <button
            className="button is-success is-small"
            onClick={onIncrement}
            type="button">
            +
          </button>
        </div>
      </div>
    );
  }
}

function Total(props) {
  return <div>{props.sum}</div>;
}

class App extends Component {
  constructor(props, context) {
    super(props, context);

    // state data for 3 counters
    this.state = {
      data: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
      ],
      // summ: 0,
      // step: 2,
    };
  }

  onIncrement = (step) => {
    sum = sum + step;

    this.setState((state) => ({
      id: this.state.data.id,
      value: this.state.data.value + step,
    }));

    return this.state.value;
  };

  onDecrement = (step) => {
    sum = sum - step;

    this.setState((state) => ({ value: state.value - step }));
    return this.state.value;
  };

  render() {
    console.log(this.state.value);

    return (
      <div>
        {this.state.data.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            onIncrement={() => this.onIncrement(step)}
            onDecrement={() => this.onDecrement(step)}
          />
        ))}

        <Total sum={sum} />
      </div>
    );
  }
}

export default App;
