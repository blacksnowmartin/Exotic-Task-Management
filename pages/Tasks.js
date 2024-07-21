import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            const token = localStorage.getItem('token');
            const res = await axios.get('/api/tasks', {
                headers: { Authorization: token }
            });
            setTasks(res.data);
        };
        fetchTasks();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const res = await axios.post('/api/tasks', { title }, {
            headers: { Authorization: token }
        });
        setTasks([...tasks, res.data]);
        setTitle('');
    };

    const handleToggle = async (id) => {
        const task = tasks.find(t => t._id === id);
        const token = localStorage.getItem('token');
        const res = await axios.put(`/api/tasks/${id}`, { completed: !task.completed }, {
            headers: { Authorization: token }
        });
        setTasks(tasks.map(t => t._id === id ? res.data : t));
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        await axios.delete(`/api/tasks/${id}`, {
            headers: { Authorization: token }
        });
        setTasks(tasks.filter(t => t._id !== id));
    };

    return (
        <div>
            <h2>Tasks</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.title}
                        </span>
                        <button onClick={() => handleToggle(task._id)}>
                            {task.completed ? 'Uncomplete' : 'Complete'}
                        </button>
                        <button onClick={() => handleDelete(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;
