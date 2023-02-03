import { useReducer } from "react"
import { CompletedTaskList } from "./completed-task-list";
import { IncompleteTaskList } from "./incomplete-task-list";
import { taskTrackerReducer, TaskTrackerState } from "./reducers/task-reducer"

const intialState: TaskTrackerState ={
    taskNameInput:"",
    taskPriorityInput:0,
    incompleteTasks:[],
    completedTasks:[]

}

/// you are allowed 1 default export per file

// container and presentation component design pattern in React
// Container component is a component that holds a stateful value. From useState or useReducer
// Presentation Component DOES NOT have it's own state and is primarilly concerned with the LOOK of the component.
// Rendering out lists for instance
// ALWAYS try to reduce the amount of stateful components you have. The more presentation components you have the easier your application
// is to test and debug
export default function TaskTracker(){

    const [trackerState, dispatch] = useReducer(taskTrackerReducer, intialState );
    // Data and state can only FLOW DOWNWARDS. Parent to children
    // Sibling component cannot communicate in any way
    


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
        <IncompleteTaskList incompleteTasks={trackerState.incompleteTasks} dispatch={dispatch}/>

        <h3>Completed Tasks</h3>
        <CompletedTaskList completedTasks={trackerState.completedTasks}/>

    </>
}