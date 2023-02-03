// We can test That react components render how we expect them to
// Components are just functions that return JSX as the output
import { render, screen } from "@testing-library/react";
import { CompletedTaskList } from "../completed-task-list";
import { Task } from "../reducers/task-reducer";


test("Displays tasks", async ()=>{

    const tasks:Task[] = [
        {name:"Dishes", id:1, priority:10},
        {name:"Laundry", id:2, priority:5},
    ]
    render(<CompletedTaskList completedTasks={tasks}/>)
    
    const elementDishes = await screen.findByText(/Dishes/);
    const elementLaundry = await screen.findByText(/Laundry/);

    expect(elementDishes.innerHTML).toBe("Dishes ");
    expect(elementLaundry.innerHTML).toBe("Laundry ");
    
})