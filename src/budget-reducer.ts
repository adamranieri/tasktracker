

// 1. Create an object that represensts the overall state of a component or part of my applicaiton
export type BudgetCalcState = {
    budget: number
    newExpense: number 
    previousExpenses: number[]
    budgetRemaining: number 
    budgetSpent: number
}

//2. Create Actions that can modify the state
type AddExpenseAction = {type:"ADD_EXPENSE"};
type SetBudgetAction = {type: "SET_BUDGET", payload: number};
type SetExpenseAction = {type:"SET_NEW_EXPENSE", payload: number};
type BudgetAction = AddExpenseAction | SetBudgetAction | SetExpenseAction

//3. Write a reducer function
// a function whose first paramater is the state, the second parameter is an action, returns a new state
// YOU MUST ALWAYS RETURN A BRAND NEW OBJECT FROM A REDUCER FUNCTION. NEVER MODIFY THE PARAMETERS
export function budgetReducer(state: BudgetCalcState, action: BudgetAction ): BudgetCalcState {
    let newState: BudgetCalcState = JSON.parse(JSON.stringify(state));// very first thing to do is clone your state// MAKE A DEEP COPY
    // DEEP COPY nested objects and arrays are also cloned

    switch(action.type){
        case "SET_BUDGET": {
            newState.budget = action.payload;
            return newState;
        }
        case "SET_NEW_EXPENSE":{
            newState.newExpense = action.payload;
            return newState;
        }
        case "ADD_EXPENSE":{
            newState.previousExpenses.push(newState.newExpense);
            let spent = 0;
            for(const expense of newState.previousExpenses){
                spent += expense;
            }
            newState.budgetSpent = spent;
            newState.budgetRemaining = newState.budget - spent;
            return newState;            
        }
    }
}
