import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from "../../context";

import "../../App.css"


class Exercise extends Component {
  state = {
    showExerciseInfo: false
  };

  onShowClick = () => {
    this.setState({
      showExerciseInfo: !this.state.showExerciseInfo
    });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({type: "DELETE_EXERCISE", payload: id});
  };


  render() {
    const { id, name, weight, intensity, description } = this.props.exercise;
    const { showExerciseInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3 mt-4 bg-success text-light">
              <h4>
                {" "}
                <span onClick={this.onShowClick} style={{ cursor: "pointer" }}>
                  {" "}
                  {name} <i className="far fa-arrow-alt-circle-down cursor-pointer" />{" "}
                </span>
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>

              {showExerciseInfo ? (
                <ul style={{ fontSize: "20px" }} className="list-group text-dark">
                  <li className="list-group-item"><strong>Weight: </strong>{weight}</li>
                  <li className="list-group-item"><strong>Intensity: </strong>{intensity}</li>
                  <li className="list-group-item"><strong>Description: </strong>{description}</li>
                </ul>
              ) : null}
            </div>
          )
        }}
      </Consumer>
    );
  }
}

Exercise.propTypes = {
  exercise: PropTypes.object.isRequired
};

export default Exercise;