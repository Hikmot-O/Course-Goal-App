import CourseGoalList from "./CourseGoalList";

import "./CourseGoals.css";

const CourseGoals = (props) => {
  const deleteGoalHandler = (id) => {
    props.onDeleteGoal(id);  
 };

  return (
    <div className="goal-list">
      <ul id="goals">
        {props.goals.map((goal) => (
          <CourseGoalList
          onDelete={deleteGoalHandler}
            id={goal.id}
            key={goal.id}
            goal={goal.value}
          ></CourseGoalList>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoals;
