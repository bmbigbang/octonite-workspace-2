import type { Meta, StoryObj } from '@storybook/react';
import { Select, MenuItem, FormControl, InputLabel, Chip, Box, OutlinedInput, SelectChangeEvent } from '@mui/material';
import React from 'react';

const meta: Meta<typeof Select> = {
    title: 'Inputs/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Basic: Story = {
    render: (args) => (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    defaultValue=""
                    {...args}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    ),
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

export const MultiSelect: Story = {
    render: (args) => {
        const [personName, setPersonName] = React.useState<string[]>([]);

        const handleChange = (event: SelectChangeEvent<typeof personName>) => {
            const {
                target: { value },
            } = event;
            setPersonName(
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
            );
        };

        return (
            <Box sx={{ minWidth: 300 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                    <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        {...args}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        );
    },
};
