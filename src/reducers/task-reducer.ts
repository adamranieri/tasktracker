//1. Create a state type
export type Task = {
    id: number
    name: string
    priority: number
}

export type TaskTrackerState ={
    taskNameInput: string,
    taskPriorityInput: number,
    completedTasks: Task[]
    incompleteTasks: Task[]
}

//2. Actions
export type SetTaskNameAction = {type:"SET_TASK_NAME", payload:string}; // payload is just a convention
export type SetTaskPriorityAction = {type:"SET_TASK_PRIORITY", payload:number};
export type MarkCompleteAction = {type:"MARK_COMPLETE", taskId:number};//id of the task to mark complete
export type AddTask = {type:"ADD_TASK"};
export type TaskTrackerAction = SetTaskNameAction | SetTaskPriorityAction | MarkCompleteAction | AddTask;


export function taskTrackerReducer(state: TaskTrackerState, action: TaskTrackerAction): TaskTrackerState{
    const newState: TaskTrackerState = JSON.parse(JSON.stringify(state));

    switch(action.type){

        case "SET_TASK_NAME":{
            newState.taskNameInput = action.payload;
            return newState;
        }

        case "SET_TASK_PRIORITY":{
            newState.taskPriorityInput = action.payload;
            return newState;
        }


        case "ADD_TASK":{
            const task: Task = {name:newState.taskNameInput, priority:newState.taskPriorityInput, id: Math.random()};
            newState.incompleteTasks.push(task);
            return newState;
        }

        
        case "MARK_COMPLETE":{
            //get the task from the incomplete list
            const task: Task | undefined = newState.incompleteTasks.find(task => task.id === action.taskId);// might not find task
            if(!task){ // quick undefined check
                return newState;
            }
            //remove task from the incomplete list
            newState.incompleteTasks = newState.incompleteTasks.filter(task => task.id !== action.taskId);
            // everything BUT the task with the id I am looking is returned

            newState.completedTasks.push(task);
            return newState;
        }

    }
}