import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const nameOfTitle1 = 'What to learn'
    const nameOfTitle2 = 'Songs'
    const tasks1: TaskType[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false}
    ]
    const tasks2: TaskType[] = [
        {id: 1, title: 'Hey', isDone: true},
        {id: 2, title: 'Is Love', isDone: true},
        {id: 3, title: 'Storm', isDone: false}
    ]

    return (

        <div className="App">
            <Todolist tasks={tasks1} title={nameOfTitle1}/>
            <Todolist tasks={tasks2} title={nameOfTitle2}/>
        </div>
    );
}

export default App;
