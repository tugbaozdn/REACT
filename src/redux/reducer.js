

const initialState ={
    name:'Name',
    message: 'Default message'
}

export default function appReducer(state=initialState, action){
    switch (action.type){
        case 'changeName':{
            return {
                ...state,
                name: action.payload
            }
        }
        case 'changeMessage':{
            return{
                ...state,
                message: action.payload
            }
        }
        default:
            return state
    }
}