import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar, Button, IconButton, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const meta: Meta<typeof Snackbar> = {
    title: 'Feedback/Snackbar',
    component: Snackbar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Simple: Story = {
    render: (args) => {
        const [open, setOpen] = React.useState(false);

        const handleClick = () => {
            setOpen(true);
        };

        const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
            if (reason === 'clickaway') {
                return;
            }
            setOpen(false);
        };

        const action = (
            <React.Fragment>
                <Button color="secondary" size="small" onClick={handleClose}>
                    UNDO
                </Button>
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            </React.Fragment>
        );

        return (
            <div>
                <Button onClick={handleClick}>Open simple snackbar</Button>
                <Snackbar
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Note archived"
                    action={action}
                    {...{ ...args, open: args.open !== undefined ? args.open : open }}
                />
            </div>
        );
    },
};

export const WithAlert: Story = {
    render: (args) => {
        const [open, setOpen] = React.useState(false);

        const handleClick = () => {
            setOpen(true);
        };

        const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
            if (reason === 'clickaway') {
                return;
            }
            setOpen(false);
        };

        return (
            <div>
                <Button onClick={handleClick}>Open success snackbar</Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} {...args}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        This is a success message!
                    </Alert>
                </Snackbar>
            </div>
        );
    },
};
