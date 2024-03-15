import React from 'react';
import { List, ListItem, ListItemText, Button, ListItemSecondaryAction } from '@mui/material';

const TaskList = ({ tasks, statusFilter, onDelete, onEdit }) => {
    return (
        <List>
            {tasks.map((task) => (
                <ListItem key={task._id} divider>
                    <ListItemText primary={task.title} secondary={task.description} />
                    <ListItemSecondaryAction>
                        <Button color="primary" onClick={() => onEdit(task)}>Edit</Button>
                        <Button color="secondary" onClick={() => onDelete(task._id)}>Delete</Button>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;
