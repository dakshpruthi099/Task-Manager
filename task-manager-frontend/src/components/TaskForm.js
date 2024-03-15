import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, MenuItem, FormControl } from '@mui/material';

const TaskForm = ({ onTaskSubmit, editingTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'To Do',
  });

  // When the editingTask changes, update the form state
  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    } else {
      // Reset the form when there's no task to edit
      setTask({ title: '', description: '', status: 'To Do' });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskSubmit(task);
    // After submission, reset the form only if not editing
    if (!editingTask) {
      setTask({ title: '', description: '', status: 'To Do' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        name="title"
        value={task.title}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={task.description}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <TextField
          select
          label="Status"
          name="status"
          value={task.status}
          onChange={handleChange}
          required
        >
          {['To Do', 'In Progress', 'Done'].map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary">
          {editingTask ? 'Update' : 'Submit'}
        </Button>
      </Box>
    </form>
  );
};

export default TaskForm;
