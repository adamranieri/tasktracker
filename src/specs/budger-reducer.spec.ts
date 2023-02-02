import { BudgetCalcState, budgetReducer } from "../budget-reducer"


test("Update Budget", ()=>{
    const budgetState: BudgetCalcState ={
        budget:200,
        newExpense:0,
        previousExpenses:[],
        budgetRemaining: 0,
        budgetSpent: 0
    }

    const nextState = budgetReducer(budgetState, {type:"SET_BUDGET", payload:400});
    expect(nextState.budget).toBe(400);
    console.log(budgetState);
    console.log(nextState);


})