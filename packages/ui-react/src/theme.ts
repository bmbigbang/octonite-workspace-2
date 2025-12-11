import { createTheme } from '@mui/material/styles';
import { colors, typography } from '@octonite/tokens';

export const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary.main,
            light: colors.primary.light,
            dark: colors.primary.dark,
            contrastText: colors.primary.contrastText,
        },
        secondary: {
            main: colors.secondary.main,
            light: colors.secondary.light,
            dark: colors.secondary.dark,
            contrastText: colors.secondary.contrastText,
        },
        error: {
            main: colors.error.main,
        },
    },
    typography: {
        fontFamily: typography.fontFamily,
        body1: {
            fontSize: typography.fontSizes.md,
            fontWeight: typography.fontWeights.regular
        },
        h1: {
            fontSize: typography.fontSizes.xl,
            fontWeight: typography.fontWeights.bold
        }
    },
});
