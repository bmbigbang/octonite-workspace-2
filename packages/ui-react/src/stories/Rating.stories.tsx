import type { Meta, StoryObj } from '@storybook/react';
import { Rating, Typography, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';

const meta: Meta<typeof Rating> = {
    title: 'Inputs/Rating',
    component: Rating,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Basic: Story = {
    args: {
        name: 'simple-controlled',
        defaultValue: 2,
    },
};

export const HalfPrecision: Story = {
    args: {
        name: 'half-rating',
        defaultValue: 2.5,
        precision: 0.5,
    },
};

export const CustomIcon: Story = {
    render: (args) => (
        <Box>
            <Typography component="legend">Custom icon and color</Typography>
            <Rating
                {...args}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
        </Box>
    ),
    args: {
        name: 'customized-color',
        defaultValue: 2,
        precision: 0.5,
        getLabelText: (value: number) => `${value} Heart${value !== 1 ? 's' : ''}`,
    },
};
