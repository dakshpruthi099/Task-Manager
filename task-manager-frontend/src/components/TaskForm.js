// task-manager-frontend/src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, MenuItem } from '@mui/material';
import './TaskForm.css'; // Ensure you import the CSS file

const TaskForm = ({ onTaskSubmit, editingTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'To Do',
  });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    } else {
      setTask({ title: '', description: '', status: 'To Do' });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prevTask => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskSubmit(task);
    if (!editingTask) {
      setTask({ title: '', description: '', status: 'To Do' });
    }
  };

  return (
    <Box className="TaskForm" component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="title"
        label="Title"
        name="title"
        autoComplete="title"
        autoFocus
        value={task.title}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        fullWidth
        name="description"
        label="Description"
        type="text"
        id="description"
        autoComplete="current-description"
        multiline
        rows={4}
        value={task.description}
        onChange={handleChange}
      />
      <TextField
        select
        label="Status"
        value={task.status}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        {['To Do', 'In Progress', 'Done'].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {editingTask ? 'Update Task' : 'Add Task'}
      </Button>
    </Box>
  );
};

export default TaskForm;
