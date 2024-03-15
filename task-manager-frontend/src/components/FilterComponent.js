// task-manager-frontend/src/components/FilterComponent.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './FilterComponent.css'; // Import the CSS file for styling

const FilterComponent = ({ statusFilter, setStatusFilter }) => {
    const handleChange = (event) => {
        setStatusFilter(event.target.value);
    };

    return (
        <FormControl variant="filled" className="FilterComponent">
            <InputLabel>Status Filter</InputLabel>
            <Select
                value={statusFilter}
                onChange={handleChange}
                className="FilterComponent-select"
            >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="To Do">To Do</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
            </Select>
        </FormControl>
    );
};

export default FilterComponent;
