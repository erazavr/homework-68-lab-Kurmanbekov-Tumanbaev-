import React, {Component} from 'react';
import './Counter.css';
import {connect} from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div className="Counter">
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.increaseCounter}>Increase</button>
                <button onClick={this.props.decreaseCounter}>Decrease</button>
                <button onClick={this.props.addCounter}>Increase by 5</button>
                <button onClick={this.props.subtractCounter}>Decrease by 5</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      counter: state.counter,
  }
};

const mapDispatchToProps = dispatch => {
  return {
      increaseCounter: () => dispatch({type: 'INCREMENT'}),
      decreaseCounter: () => dispatch({type: 'DECREMENT'}),
      addCounter: () => dispatch({type: 'ADD', value: 5}),
      subtractCounter: () => dispatch({type: 'SUBTRACT', value: 5}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);