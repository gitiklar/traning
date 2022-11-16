import React from "react";
import ReactDOM from "react-dom";

const WithClock = (Component) => {
  return class WithClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = { ticks: 0 };
    }

    componentDidMount() {
      this.timer = setInterval(this.tick.bind(this), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.timer);
    }

    tick() {
      this.setState((state) => ({ ticks: state.ticks + 1 }));
    }

    render() {
      return <Component {...this.props} ticks={this.state.ticks} />;
    }
  };
};

const NewsTicker = WithClock(
  class NewsTicker extends React.Component {
    render() {
      const { items, ticks } = this.props;
      const itemIndex = ticks % items.length;

      return <p>{items[itemIndex]}</p>;
    }
  }
);

const Clock = WithClock(
  class Clock extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { ticks } = this.props;

      return <p>Ticks... {ticks}</p>;
    }
  }
);

export const MyApp = () => {
  const items = [
    "I lit up from Reno",
    "I was trailed by twenty hounds",
    "Didn't get to sleep that night",
    "Till the morning came around",
  ];

  return (
    <div>
      <Clock />
      <NewsTicker items={items} />
    </div>
  );
};
