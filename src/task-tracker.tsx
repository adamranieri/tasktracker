import { useReducer } from "react"
import { taskTrackerReducer, TaskTrackerState } from "./reducers/task-reducer"

const intialState: TaskTrackerState ={
    taskNameInput:"",
    taskPriorityInput:0,
    incompleteTasks:[],
    completedTasks:[]

}

/// you are allowed 1 default export per file
export default function TaskTracker(){

    const [trackerState, dispatch] = useReducer(taskTrackerReducer, intialState );


    return <>
    
        <h1>Task Tracker</h1>


        <label htmlFor="taskName">Task Name</label>
        <input id="taskName" type="text" placeholder="dishes" onChange={e=>dispatch({type:"SET_TASK_NAME", payload:e.target.value})} />

        <label htmlFor="priority">Task Priority</label>
        <input id="priority" type="number" onChange={e=>dispatch({type:"SET_TASK_PRIORITY", payload:Number(e.target.value)})} />

        <button onClick={()=>dispatch({type:"ADD_TASK"})}>Add task</button>


        <h3>Incomplete Tasks</h3>
        <h3>Sort By</h3>
        <button>Priority high-low</button>
        <button>Alphabeticallly</button>

        <ul>
            {trackerState.incompleteTasks.map(t => <li>{t.name} <b>Priority: {t.priority}</b> 
                <button onClick={()=>dispatch({type:"MARK_COMPLETE", taskId:t.id})}>Complete</button>
            </li>)}
        </ul>

        <h3>Completed Tasks</h3>
        <ul>
            {trackerState.completedTasks.map(t => <li>{t.name}</li>)}
        </ul>

    </>
}