import type { Meta, StoryObj } from '@storybook/react';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Switch,
    Divider,
    Box,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import React from 'react';

const meta: Meta<typeof List> = {
    title: 'Data Display/List',
    component: List,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof List>;

export const Simple: Story = {
    render: () => (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Trash" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    ),
};

export const WithAvatars: Story = {
    render: () => (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
        </List>
    ),
};

export const WithSwitch: Story = {
    render: () => {
        const [checked, setChecked] = React.useState(['wifi']);

        const handleToggle = (value: string) => () => {
            const currentIndex = checked.indexOf(value);
            const newChecked = [...checked];

            if (currentIndex === -1) {
                newChecked.push(value);
            } else {
                newChecked.splice(currentIndex, 1);
            }

            setChecked(newChecked);
        };

        return (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemIcon>
                        <WifiIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
                    <Switch
                        edge="end"
                        onChange={handleToggle('wifi')}
                        checked={checked.indexOf('wifi') !== -1}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-wifi',
                        }}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <BluetoothIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
                    <Switch
                        edge="end"
                        onChange={handleToggle('bluetooth')}
                        checked={checked.indexOf('bluetooth') !== -1}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-bluetooth',
                        }}
                    />
                </ListItem>
            </List>
        );
    },
};
