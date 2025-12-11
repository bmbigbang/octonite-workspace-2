import type { Meta, StoryObj } from '@storybook/react';
import { TextField, InputAdornment } from '@mui/material';
import React from 'react';

const meta: Meta<typeof TextField> = {
    title: 'Inputs/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['outlined', 'filled', 'standard'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
    args: {
        label: 'Standard',
        variant: 'outlined',
    },
};

export const Number: Story = {
    args: {
        label: 'Number',
        type: 'number',
        slotProps: {
            inputLabel: {
                shrink: true,
            },
        },
        variant: 'outlined',
    },
};

export const Currency: Story = {
    args: {
        label: 'Amount',
        variant: 'outlined',
        slotProps: {
            input: {
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
            },
        },
    },
};

export const Error: Story = {
    args: {
        label: 'Error',
        error: true,
        helperText: 'Incorrect entry.',
        variant: 'outlined',
        defaultValue: 'Hello World',
    },
};
