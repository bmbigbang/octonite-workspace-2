import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import React from 'react';

const meta: Meta<typeof Radio> = {
    title: 'Inputs/Radio',
    component: Radio, // Actually showcasing RadioGroup effectively
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Group: Story = {
    render: () => (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>
    ),
};
