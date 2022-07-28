import './CourseGoalList.css';

const CourseGoalList = (props) => {
    const deleteHandler = () =>{
        console.log('Clicked!!!');
        console.log(props.id);
        props.onDelete(props.id);
    }

    return (
        <li className='goal-item' onClick={deleteHandler}>{props.goal} </li>
    )
}

export default CourseGoalList;