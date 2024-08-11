import React, { useState, useEffect } from 'react'
import Task from './Task';
import InfoBox from './InfoBox';

let taskCounter = 1;

function Operation() {
    const [tasks, setTasks] = useState([]);
    const [newValue, setNewValue] = useState("");

    const addTask = (newTask) => {
        if (!newTask) return;
        const newId = taskCounter++;
        const newTasks = [...tasks, { id: newId, task: newTask, status: "unfinished" }];
        setTasks(newTasks);
    }

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    // Save tasks to local storage whenever tasks state changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const deleteTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    const updateTask = (id, content) => {
        const newTasks = tasks.map(task =>
            task.id === id ? { ...task, task: content } : task
        );
        setTasks(newTasks);
    }

    const finishedTask = (id) => {
        const newTasks = tasks.map(task =>
            task.id === id ? { ...task, status: "finished" } : task
        );
        setTasks(newTasks);
    }

    const unFinishedTask = (id) => {
        const newTasks = tasks.map(task =>
            task.id === id ? { ...task, status: "unfinished" } : task
        );
        setTasks(newTasks);
    }
    return (
        <div className="ps-2">
            <div className="col-md">
                <label className='form-label text-light' htmlFor="toDo">Add Task</label>
                <input
                    type="text"
                    className='form-control col-md'
                    onChange={(e) => setNewValue(e.target.value)}
                    id="toDo"
                    placeholder='Go shopping...'
                />
            </div>
            <div>
                <button className='btn btn-primary my-2' onClick={() => addTask(newValue)}>Add Task</button>
            </div>
            <div >
                <InfoBox />
            </div>
            <div>
                <Task tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} value={newValue} finishedTask={finishedTask} unFinishedTask={unFinishedTask} />
            </div>
        </div>
    )
}

export default Operation;
