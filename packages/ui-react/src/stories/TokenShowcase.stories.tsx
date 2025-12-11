import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Typography, Stack, Box } from '@mui/material';
import { Home, Settings, Person, Menu, Search, Favorite, Add, Delete } from '@mui/icons-material';

const meta = {
    title: 'Octonite/Design Tokens',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// A component to visualize colors
const ColorPreview = ({ color, name }: { color: string; name: string }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
        <Box sx={{ width: 40, height: 40, bgcolor: color, borderRadius: 1, border: '1px solid #ccc' }} />
        <Typography variant="body1">
            <strong>{name}</strong>: {color}
        </Typography>
    </Box>
);

export const TokenShowcase: Story = {
    render: () => (
        <Stack spacing={4}>
            <Box>
                <Typography variant="h4" gutterBottom>Color Tokens Impact</Typography>
                <Typography paragraph>
                    The following buttons automatically use the primary and secondary colors defined in `@octonite/tokens`.
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="primary">Primary Button</Button>
                    <Button variant="contained" color="secondary">Secondary Button</Button>
                    <Button variant="outlined" color="primary">Outlined Primary</Button>
                    <Button variant="outlined" color="secondary">Outlined Secondary</Button>
                </Stack>
            </Box>
            <Box>
                <Typography variant="h4" gutterBottom>Typography Tokens Impact</Typography>
                <Typography paragraph>
                    Fonts and sizes are rendered using the typography tokens.
                </Typography>
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="body1">Body 1 text using the design system font family and size.</Typography>
            </Box>
            <Box>
                <Typography variant="h4" gutterBottom>Iconography</Typography>
                <Typography paragraph>
                    Common icons used in the application, demonstrating consistency with the design system.
                </Typography>
                <Stack direction="row" spacing={4} alignItems="center">
                    <Stack alignItems="center" spacing={1}><Home fontSize="large" /><Typography variant="caption">Home</Typography></Stack>
                    <Stack alignItems="center" spacing={1}><Settings fontSize="large" /><Typography variant="caption">Settings</Typography></Stack>
                    <Stack alignItems="center" spacing={1}><Person fontSize="large" /><Typography variant="caption">Person</Typography></Stack>
                    <Stack alignItems="center" spacing={1}><Menu fontSize="large" /><Typography variant="caption">Menu</Typography></Stack>
                    <Stack alignItems="center" spacing={1}><Search fontSize="large" /><Typography variant="caption">Search</Typography></Stack>
                    <Stack alignItems="center" spacing={1}><Favorite fontSize="large" /><Typography variant="caption">Favorite</Typography></Stack>
                    <Stack alignItems="center" spacing={1}><Add fontSize="large" /><Typography variant="caption">Add</Typography></Stack>
                    <Stack alignItems="center" spacing={1}><Delete fontSize="large" /><Typography variant="caption">Delete</Typography></Stack>
                </Stack>
            </Box>
        </Stack>
    ),
};
