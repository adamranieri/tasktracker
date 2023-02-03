import { taskTrackerReducer, TaskTrackerState } from "../reducers/task-reducer"



test("ADD_TASK", ()=>{
    const taskTrackerState: TaskTrackerState ={
        taskNameInput:"Dishes",
        taskPriorityInput: 10,
        completedTasks: [],
        incompleteTasks: []
    }

    const nextState = taskTrackerReducer(taskTrackerState, {type:"ADD_TASK"});
    expect(nextState.incompleteTasks.length).toBe(1);
    expect(nextState.incompleteTasks[0].name).toBe("Dishes");
})


test("MARK_COMPLETE", ()=>{
    const taskTrackerState: TaskTrackerState ={
        taskNameInput:"",
        taskPriorityInput: 0,
        completedTasks: [{id:101, name:"Laundry", priority:15}],
        incompleteTasks: [{id:202, name:"Groceries", priority:3}]
    }

    const nextState = taskTrackerReducer(taskTrackerState, {type:"MARK_COMPLETE", taskId:202});
    expect(nextState.completedTasks.length).toBe(2);
    expect(nextState.incompleteTasks.length).toBe(0);


})