import { Task, TaskTrackerAction } from "./reducers/task-reducer"

type IncompleteTasksProps = {
    incompleteTasks: Task[]
    dispatch: React.Dispatch<TaskTrackerAction>
}


export function IncompleteTaskList(props: IncompleteTasksProps){
    return <ul>
        {props.incompleteTasks.map(t => <li>{t.name} <b>Priority: {t.priority}</b> 
        <button onClick={()=>props.dispatch({type:"MARK_COMPLETE", taskId:t.id})}>Mark complete</button></li>)}
    </ul>
}