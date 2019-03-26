import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.filter(exercise => exercise.id !== action.payload)
      };
      case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [action.payload, ...state.exercises]
      };
    default:
      return state;
  }
}

export class Provider extends Component {
  state = {
    exercises: [
      {
        id: 1,
        name: "Deadlift",
        weight: "140 kg",
        intensity: "5 Reps and 5 Rets",
        description: "Conventional deadlift: The deadlift can be broken down into three parts: The setup, the initial pull or drive, and the lockout"
      },
      {
        id: 2,
        name: "Squat",
        weight: "100 kg",
        intensity: "10 Reps and 4 Sets",
        description: "Stand tall with your feet hip distance apart. Your hips, knees, and toes should all be facing forward.Bend your knees and extend your buttocks backward as if you are going to sit back into a chair. Make sure that you keep your knees behind your toes and your weight in your heels. Rise back up and repeat."
      },
      {
        id: 3,
        name: "Chins",
        weight: "Bodyweight",
        intensity: "All you can do for 30 sec, the rest 30 sec and repeat",
        description: "Grab the pull-up bar with the palms facing your torso and a grip closer than the shoulder width. As you have both arms extended in front of you holding the bar at the chosen grip width, keep your torso as straight as possible while creating a curvature on your lower back and sticking your chest out.This is your starting position.Tip: Keeping the torso as straight as possible maximizes biceps stimulation while minimizing back involvement As you breathe out, pull your torso up until your head is around the level of the pull- up bar.Concentrate on using the biceps muscles in order to perform the movement.Keep the elbows close to your body.Tip: The upper torso should remain stationary as it moves through space and only the arms should move.The forearms should do no other work other than hold the bar. After a second of squeezing the biceps in the contracted position, slowly lower your torso back to the starting position; when your arms are fully extended.Breathe in as you perform this portion of the movement"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;