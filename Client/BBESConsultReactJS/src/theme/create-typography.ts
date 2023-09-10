import { TypographyOptions } from '@mui/material/styles/createTypography';

export const createTypography = (): TypographyOptions => {
    return {
        fontFamily: '"Poppins", sans-serif',
        h1: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.2,
        },
        h2: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: 1.2,
        },
        h3: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            fontSize: '2.25rem',
            lineHeight: 1.2,
        },
        h4: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            fontSize: '1.5rem',
            lineHeight: 1.2,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.57,
        },
        button: {
            fontWeight: 600,
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            lineHeight: 2.5,
            textTransform: 'uppercase',
        },
    };
};