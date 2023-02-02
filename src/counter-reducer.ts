
// 1. create a state
export type CounterState ={
    value: number
}

// 2. create actions that interact with the state
export type AddAction = {type:"ADD", payload: number};
export type SubtractAction = {type:"SUBTRACT", payload: number};
export type CounterAction = AddAction | SubtractAction;

// 3. write a reducer
export function counterReducer(state: CounterState, action: CounterAction): CounterState{
    const newState: CounterState = JSON.parse(JSON.stringify(state));// make a deep copy

    switch(action.type){
        case "ADD":{
            newState.value += action.payload;
            return newState;
        }
        case "SUBTRACT":{

            if(newState.value - action.payload <0){
                return newState;// just return the current state. Do not update the value
            }

            newState.value -= action.payload;
            return newState
        }
        
    }
}