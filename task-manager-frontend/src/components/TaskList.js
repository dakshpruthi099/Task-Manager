// task-manager-frontend/src/components/TaskList.js
import React from 'react';
import { List, ListItem, ListItemText, Button, ListItemSecondaryAction } from '@mui/material';
import './TaskList.css'; // Import the CSS file for styling

const TaskList = ({ tasks, onDelete, onEdit }) => {
    return (
        <List className="TaskList">
            {tasks.map((task) => (
                <ListItem key={task._id} divider className="TaskList-item">
                    <ListItemText primary={task.title} secondary={task.description} />
                    <ListItemSecondaryAction>
                        <Button color="primary" onClick={() => onEdit(task)} className="TaskList-editButton">Edit</Button>
                        <Button color="secondary" onClick={() => onDelete(task._id)} className="TaskList-deleteButton">Delete</Button>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;
