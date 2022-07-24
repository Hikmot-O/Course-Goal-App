import CourseGoalList from "./CourseGoalList";

import "./CourseGoals.css";

const CourseGoals = (props) => {
  return (
    <div className="goal-list">
      <ul id="goals">
        {props.goals.map((goal) => (
            <CourseGoalList key={goal.id} goal={goal.value}></CourseGoalList>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoals;
