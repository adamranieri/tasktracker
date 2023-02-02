import { useReducer } from "react";
import { counterReducer } from "./counter-reducer";


export function Counter(){

    const [counterState, dispatch] = useReducer(counterReducer, {value:0});

    function handleAdd1(){
        dispatch({type:"ADD", payload:1})
    }


    return <>

        <h2>Value: {counterState.value}</h2>
        <button onClick={handleAdd1}>Add 1</button>
        <button onClick={()=>dispatch({type:"ADD", payload:5})}>Add 5</button>
        <button onClick={()=>dispatch({type:"SUBTRACT", payload:1})}>Subtract 1</button>
        <button onClick={()=>dispatch({type:"SUBTRACT", payload:5})}>Subtract 5</button>
    
    </>
}