import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React from 'react';

const meta: Meta<typeof Checkbox> = {
    title: 'Inputs/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
    render: (args) => (
        <FormGroup>
            <FormControlLabel control={<Checkbox {...args} defaultChecked />} label="Label" />
            <FormControlLabel control={<Checkbox {...args} />} label="Required" required />
            <FormControlLabel control={<Checkbox {...args} disabled />} label="Disabled" />
        </FormGroup>
    ),
};

export const WithCustomIcons: Story = {
    render: () => (
        <FormGroup>
            <FormControlLabel
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
                label="Heart"
            />
            <FormControlLabel
                control={<Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />}
                label="Bookmark"
            />
        </FormGroup>
    ),
};
