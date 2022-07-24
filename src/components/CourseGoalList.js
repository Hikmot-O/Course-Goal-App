import './CourseGoalList.css';

const CourseGoalList = (props) => {
    return (
        <li className='goal-item'>{props.goal}</li>
    )
}

export default CourseGoalList;