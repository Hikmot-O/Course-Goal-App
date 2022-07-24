import { useState } from "react";

import Button from "../UI/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
    const[enteredValue, setEnteredValue] = useState('');

    const goalChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const goalValue = {
           id: Math.random().toString(),
           value: enteredValue,
        }

        if(enteredValue.trim().length === 0){
            return;
        };

        // props.onAddGoal(enteredValue);
        props.onAddGoal(goalValue);

        //Clear input field
        setEnteredValue('');
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalChangeHandler}/>
        <Button type='submit'>Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;
