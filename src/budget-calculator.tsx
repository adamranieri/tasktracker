import { useReducer } from "react";
import { BudgetCalcState, budgetReducer } from "./budget-reducer";


const initialBudgetState: BudgetCalcState ={
    budget:0,
    newExpense:0,
    previousExpenses:[],
    budgetRemaining:0,
    budgetSpent:0
}


export function BudgetCalculator(){

    // dispatch is a function that allows us to send actions to our reducer
    const [budgetState, dispatch] = useReducer(budgetReducer, initialBudgetState);// this will now control state

    function handleBudgetChange(event:React.ChangeEvent<HTMLInputElement>){
        dispatch({type:"SET_BUDGET", payload: Number(event.target.value)})
    }

    function handleExpenseChange(event:React.ChangeEvent<HTMLInputElement>){
        dispatch({type:"SET_NEW_EXPENSE", payload: Number(event.target.value)})
    }

    function handleAddExpense(){
        dispatch({type:"ADD_EXPENSE"});
    }


    return <>
        <h1>Budget Calculator</h1>

        <label htmlFor="budget">Budget</label>
        <input id="budget" type="number" placeholder="0" onInput={handleBudgetChange}/>


        <label htmlFor="expense">New Expense</label>
        <input id="expense" type="number" placeholder="0" onInput={handleExpenseChange} />
        <button onClick={handleAddExpense}>Add Expense</button>


        <h4>Expenses</h4>
        <ul>
            {budgetState.previousExpenses.map(ex => <li>${ex}</li>)}
        </ul>

        <h6>Budget Remaining : ${budgetState.budgetRemaining}</h6>
        <h6>Budget Spent : ${budgetState.budgetSpent}</h6>



    </>
}