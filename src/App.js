// import React, { Component } from 'react';

// // state data for 3 counters
// const data = [
//   { id: 1, value: 0 },
//   { id: 2, value: 0 },
//   { id: 3, value: 0 },
// ];

// // Counter Component
// class Counter extends Component {
//   render() {
//     const { value } = this.props;
//     return (
//       <div className="counter">
//         <b>{value}</b>
//         <div className="counter-controls">
//           <button className="button is-danger is-small">-</button>
//           <button className="button is-success is-small">+</button>
//         </div>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor(props, context) {
//     super(props, context);
//   }

//   render() {
//     return (
//       <div>
//         {data.map((counter) => (
//           <Counter key={counter.id} value={counter.value} />
//         ))}
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';

// Counter Component
class Counter extends Component {
  onIncrement = () => {
    this.setState((state) => ({ value: state.value + 1 }));
  };

  onDecrement = () => {
    this.setState((state) => ({ value: state.value - 1 }));
  };

  render() {
    const value = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button
            className="button is-danger is-small"
            onClick={this.onDecrement}
            type="button">
            -
          </button>
          <button
            className="button is-success is-small"
            onClick={this.onIncrement}
            type="button">
            +
          </button>
        </div>
      </div>
    );
  }
}

// class Total extends Component {
//   onIncrement = () => {
//     this.setState((state) => ({ value: state.value + 1 }));
//   };

//   onDecrement = () => {
//     this.setState((state) => ({ value: state.value - 1 }));
//   };

//   render() {
//     const { value } = this.props;
//     return (
//       <div className="counter">

//       </div>
//     );
//   }
// }

class App extends Component {
  constructor(props, context) {
    super(props, context);

    // state data for 3 counters
    this.state = {
      data: [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.data.map((counter) => (
          <Counter key={this.state.data.id} value={this.state.data.value} />
        ))}
      </div>
      //   <div>
      //   {this.state.data.map((counter) => (
      //     <Total total={total.total} />
      //   ))}
      //   </div>
    );
  }
}

export default App;
