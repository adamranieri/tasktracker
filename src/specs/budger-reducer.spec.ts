import { BudgetCalcState, budgetReducer } from "../budget-reducer"


test("SET Budget", ()=>{
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

test("SET New Expense", ()=>{
    const budgetState: BudgetCalcState ={
        budget:400,
        newExpense:40,
        previousExpenses: [10,20],
        budgetRemaining: 370,
        budgetSpent: 30
    }
    const nextState = budgetReducer(budgetState,{type:"SET_NEW_EXPENSE", payload:70});
    expect(nextState.newExpense).toBe(70)
    console.log(budgetState);
    console.log(nextState)
})


test("ADD Expense", ()=>{
    const budgetState: BudgetCalcState ={
        budget:300,
        newExpense: 50,
        previousExpenses:[100,20],
        budgetRemaining: 180,
        budgetSpent: 120
    }

    const nextState = budgetReducer(budgetState, {type:"ADD_EXPENSE"});
    expect(nextState.budgetSpent).toBe(170)
    expect(nextState.budgetRemaining).toBe(130)
    expect(nextState.previousExpenses.length).toBe(3);
    console.log(budgetState);
    console.log(nextState);
})
