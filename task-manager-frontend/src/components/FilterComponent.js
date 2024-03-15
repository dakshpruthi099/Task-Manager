import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const FilterComponent = ({ statusFilter, setStatusFilter }) => {
    const handleChange = (event) => {
        setStatusFilter(event.target.value);
    };

    return (
        <Box my={2}> {/* Add vertical margins */}
            <FormControl fullWidth margin="dense"> {/* Adjust this margin if needed */}
                <InputLabel id="status-filter-label">Status Filter</InputLabel>
                <Select
                    labelId="status-filter-label"
                    id="status-filter"
                    value={statusFilter}
                    onChange={handleChange}
                    label="Status Filter" // This should match the InputLabel's text
                >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="To Do">To Do</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default FilterComponent;
