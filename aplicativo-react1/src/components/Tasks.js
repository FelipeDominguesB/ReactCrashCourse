import { useState } from "react";



const Tasks = () =>{
    const [taskList, setTasks] = useState([
        {
            id: 1,
            text: "Doctor's Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true
        },
        {
            id: 2,
            text: "Meeting At School",
            day: "Feb 6th at 1:30pm",
            reminder: true
        },
        {
            id: 3,
            text: "Food Shopping",
            day: "Feb 5th at 2:30pm",
            reminder: true
        }
    ]);
    return (
        <>
            {taskList.map((task) =>(<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks;