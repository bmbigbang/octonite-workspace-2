import type { Meta, StoryObj } from '@storybook/react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import React from 'react';

const meta: Meta<typeof Fab> = {
    title: 'Inputs/Fab',
    component: Fab,
    tags: ['autodocs'],
    argTypes: {
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
type Story = StoryObj<typeof Fab>;

export const Primary: Story = {
    args: {
        color: 'primary',
        children: <AddIcon />,
        ariaLabel: 'add',
    },
};

export const Secondary: Story = {
    args: {
        color: 'secondary',
        children: <EditIcon />,
        ariaLabel: 'edit',
    },
};

export const Extended: Story = {
    args: {
        variant: 'extended',
        color: 'primary',
        children: (
            <>
                <NavigationIcon sx={{ mr: 1 }} />
                Navigate
            </>
        ),
    },
};
