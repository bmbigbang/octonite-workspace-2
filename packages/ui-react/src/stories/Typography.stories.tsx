import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Box } from '@mui/material';
import React from 'react';

const meta: Meta<typeof Typography> = {
    title: 'Data Display/Typography',
    component: Typography,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const AllVariants: Story = {
    render: () => (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            {/* Headings */}
            <Typography variant="h1" gutterBottom>
                h1. Heading
            </Typography>
            <Typography variant="h2" gutterBottom>
                h2. Heading
            </Typography>
            <Typography variant="h3" gutterBottom>
                h3. Heading
            </Typography>
            <Typography variant="h4" gutterBottom>
                h4. Heading
            </Typography>
            <Typography variant="h5" gutterBottom>
                h5. Heading
            </Typography>
            <Typography variant="h6" gutterBottom>
                h6. Heading
            </Typography>

            {/* Subtitles */}
            <Typography variant="subtitle1" gutterBottom>
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>

            {/* Body */}
            <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>

            {/* Utility */}
            <Typography variant="button" display="block" gutterBottom>
                button text
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                caption text
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                OVERLINE TEXT
            </Typography>
        </Box>
    ),
};
