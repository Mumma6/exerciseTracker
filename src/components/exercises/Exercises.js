import React, { Component } from 'react';
import Exercise from "./Exercise";
import { Consumer } from "../../context";

class Exercises extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          const { exercises } = value;
          return (
            <React.Fragment>
              <h1 style={{textAlign: "center"}} className="display-4 mb-2">
                <span className="text-danger">Exercise </span>List
              </h1>
              {exercises.map(exercise => (
                <Exercise
                  key={exercise.id}
                  exercise={exercise}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Exercises;