import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";

class AddExercise extends Component {
  state = {
    name: "",
    weight: "",
    intensity: "",
    description: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    
    const { name, weight, intensity, description } = this.state;

    const newExercise = {
      id: uuid(),
      name,
      weight,
      intensity,
      description
    }

    dispatch({type: "ADD_EXERCISE", payload: newExercise});

    this.setState({
      name: "",
      weight: "",
      intensity: "",
      description: "",

    });

    this.props.history.push("/");

  }

  render() {
    const { name, weight, intensity, description,} = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3 mt-5">
              <div className="card-header"><h3>Add exercise</h3></div>
              <div className="card-body">
                <form style={{fontSize: "25px"}} onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">

                    <label htmlFor="name">Exercise</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Exercises name..."
                      value={name}
                      onChange={this.onChange}
                      className={"form-control form-control-lg"}
                      required
        
                    />
  
                  </div>
                  <div className="form-group">
                    <label htmlFor="weight">Weight</label>
                    <input
                      type="text"
                      name="weight"
                      className="form-control form-control-lg"
                      placeholder="Enter Weight..."
                      value={weight}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="intensity">Intensity</label>
                    <input
                      type="text"
                      name="intensity"
                      className="form-control form-control-lg"
                      placeholder="Enter Intensity..."
                      value={intensity}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      type="text"
                      name="description"
                      className="form-control form-control-lg"
                      placeholder="Enter an description of the exersice..."
                      value={description}
                      onChange={this.onChange}
                    />
                  </div>
                  
                  <input
                    style={{fontSize: "25px"}}
                    type="submit"
                    value="Add Exercise"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
      );
    }
  }
  
  export default AddExercise;
