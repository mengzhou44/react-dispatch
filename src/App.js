import React from 'react'
import { connect } from 'react-redux'
import {fetchToDoList} from './to-do';
import './App.css'

function App({ dispatch, toDoList }) {
    return (
        <div>
            <button
                onClick={()=>fetchToDoList(dispatch)}
            >
                Fetch Data
            </button>
            {toDoList.map(item => (
                <div key={item.id}> {item.title} </div>
            ))}
        </div>
    )
}

function mapStateToProps({ toDoList }) {
    return {
        toDoList
    }
}

export default connect(mapStateToProps)(App)
