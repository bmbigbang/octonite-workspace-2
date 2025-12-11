import type { Meta, StoryObj } from '@storybook/react';
import { Button, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';

const meta: Meta<typeof Button> = {
    title: 'Inputs/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['contained', 'outlined', 'text'],
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
        },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'contained',
        color: 'primary',
        children: 'Primary Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'outlined',
        color: 'secondary',
        children: 'Secondary Button',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'contained',
        color: 'error',
        children: 'Delete',
        startIcon: <DeleteIcon />,
    },
};

export const Loading: Story = {
    render: (args) => (
        <Button {...args} startIcon={<CircularProgress size={20} color="inherit" />}>
            Loading...
        </Button>
    ),
    args: {
        variant: 'contained',
        disabled: true,
    },
};

export const WithIcon: Story = {
    args: {
        variant: 'contained',
        endIcon: <SendIcon />,
        children: 'Send',
    },
};
