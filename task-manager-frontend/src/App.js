import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterComponent from './components/FilterComponent';
import { Box, Container } from '@mui/material';

function App() {
    const [tasks, setTasks] = useState([]);
    const [statusFilter, setStatusFilter] = useState('All');
    const [editingTask, setEditingTask] = useState(null);

    // Fetch tasks from the API
    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleTaskSubmit = async (task) => {
        try {
            if (editingTask) {
                const response = await axios.patch(`http://localhost:3001/api/tasks/${editingTask._id}`, task);
                setTasks(prevTasks => prevTasks.map(t => t._id === editingTask._id ? response.data : t));
            } else {
                const response = await axios.post('http://localhost:3001/api/tasks', task);
                setTasks(prevTasks => [...prevTasks, response.data]);
            }
        } catch (error) {
            console.error('Error submitting task:', error);
        } finally {
            setEditingTask(null); // Reset editing task
        }
    };

    const handleTaskDelete = async (taskId) => {
        try {
            await axios.delete(`http://localhost:3001/api/tasks/${taskId}`);
            setTasks(prevTasks => prevTasks.filter(t => t._id !== taskId));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleTaskEdit = (task) => {
        setEditingTask(task); // Set task to be edited
    };

    return (
        <Container maxWidth="sm">
            <h1>Task Manager</h1>
            <TaskForm onTaskSubmit={handleTaskSubmit} editingTask={editingTask} />
            <Box mt={4}>
                <FilterComponent statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
                <TaskList
                    tasks={tasks.filter(task => statusFilter === 'All' || task.status === statusFilter)}
                    onDelete={handleTaskDelete}
                    onEdit={handleTaskEdit}
                />
            </Box>
        </Container>
    );
}

export default App;
