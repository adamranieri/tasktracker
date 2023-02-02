

export function BudgetCalculator(){


    return <>
        <h1>Budget Calculator</h1>

        <label htmlFor="budget">Budget</label>
        <input id="budget" type="number" placeholder="0"/>


        <label htmlFor="expense">New Expense</label>
        <input id="expense" type="number" placeholder="0" />
        <button>Add Expense</button>


        <h4>Expenses</h4>
        <ul>
            <li>$100</li>
            <li>$300</li>
            <li>$50</li>
        </ul>

        <h6>Budget Remaining : $210</h6>
        <h6>Budget Spent : $450</h6>



    </>
}