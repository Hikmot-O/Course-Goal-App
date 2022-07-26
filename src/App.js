import { useState } from "react";
import CourseInput from "./components/CourseInput";
import CourseGoals from "./components/CourseGoals";
import "./App.css";

function App() {
  const GOAL_DUMMY = [
    {id: 'no1', value: "Do all exercises!"},
    {id: 'no2', value: "Finish this course!"},
  ]

  const [GOALS, setGOALS] = useState(GOAL_DUMMY);

  const addGoalHandler = (newGoal) => {
    setGOALS((prevGoals) => {
      console.log(newGoal, prevGoals);
      return [newGoal, ...prevGoals];
    });
  }

  const deleteGoalHandler = (id) =>{
    setGOALS(prevGoals => {
            return prevGoals.filter(goal => goal.id !== id);
          });

  }
  return (
    <div>
      <div id="goal-form">
        <CourseInput onAddGoal={addGoalHandler}></CourseInput>
      </div>
      <div>
        <CourseGoals goals={GOALS} onDeleteGoal={deleteGoalHandler}></CourseGoals>
      </div>
    </div>
  );
}

export default App;
