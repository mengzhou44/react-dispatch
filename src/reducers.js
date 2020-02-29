import {combineReducers} from 'redux'

 export default combineReducers({
    count: ( state = 0, action) => {
                  switch (action.type) {
                
                    case 'INCREMENT':
                      debugger
                      return state + 1
                    case 'DECREMENT':
                      return state - 1
                    default:
                      return state
          }
        },

    toDoList: (state=[], action) => {
         switch (action.type) {
           case 'FETCH_TODO_LIST':
                return action.payload
            default:
                return state
         }
    }    
 })  