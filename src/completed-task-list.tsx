import { Task } from "./reducers/task-reducer"

type CompletedTasksProps = {
    completedTasks: Task[]
}


export function CompletedTaskList(props: CompletedTasksProps){

    return <ul>
        {props.completedTasks.map(t => <li>{t.name} {t.priority>10 ? <b>BIG JOB FINISHED</b>: <></>}</li>)}
    </ul>

}