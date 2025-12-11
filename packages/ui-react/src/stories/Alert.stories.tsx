import type { Meta, StoryObj } from '@storybook/react';
import { Alert, Button, Stack } from '@mui/material';
import React from 'react';

const meta: Meta<typeof Alert> = {
    title: 'Feedback/Alert',
    component: Alert,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Severities: Story = {
    render: (args) => (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success" {...args}>
                This is a success alert — check it out!
            </Alert>
            <Alert severity="info" {...args}>
                This is an info alert — check it out!
            </Alert>
            <Alert severity="warning" {...args}>
                This is a warning alert — check it out!
            </Alert>
            <Alert severity="error" {...args}>
                This is an error alert — check it out!
            </Alert>
        </Stack>
    ),
};

export const WithAction: Story = {
    args: {
        severity: 'warning',
        action: (
            <Button color="inherit" size="small">
                UNDO
            </Button>
        ),
        children: 'This is a warning alert with an action.',
    },
};
