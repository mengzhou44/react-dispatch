import axios from 'axios'

export  async function fetchToDoList(dispatch) {
     const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
      )
    
      dispatch({
          type: 'FETCH_TODO_LIST',
          payload: response.data
      })
}
 