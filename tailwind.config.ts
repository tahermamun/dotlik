import type { Config } from 'tailwindcss';

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                pacific: {
                    '50': '#f2faff',
                    '100': '#e8f6ff',
                    '200': '#c4e5ff',
                    '300': '#9ecfff',
                    '400': '#5797ff',
                    '500': '#0e54fe',
                    '600': '#0b46e6',
                    '700': '#0836bf',
                    '800': '#062899',
                    '900': '#031a73',
                    '950': '#010f4a',
                },
                tuatara: {
                    '50': '#f5f5f5',
                    '100': '#eaebe8',
                    '200': '#caccc8',
                    '300': '#abada6',
                    '400': '#6c7068',
                    '500': '#30332e',
                    '600': '#292e25',
                    '700': '#1e261a',
                    '800': '#151f11',
                    '900': '#0d1709',
                    '950': '#070f04',
                },
                storm: {
                    '50': '#f7f7f7',
                    '100': '#f0f0f0',
                    '200': '#d9d9d9',
                    '300': '#c2c2c2',
                    '400': '#949494',
                    '500': '#666666',
                    '600': '#5c5353',
                    '700': '#4d3939',
                    '800': '#3d2525',
                    '900': '#2e1515',
                    '950': '#1f0909',
                },
                shark: {
                    '50': '#f5f5f5',
                    '100': '#e6e7e8',
                    '200': '#c5c6c7',
                    '300': '#a2a5a6',
                    '400': '#5f6263',
                    '500': '#1f2021',
                    '600': '#1a1c1f',
                    '700': '#12151a',
                    '800': '#0b0f14',
                    '900': '#060a0f',
                    '950': '#03050a',
                },
                mine: {
                    '50': '#f5f5f5',
                    '100': '#e8eaeb',
                    '200': '#cacccc',
                    '300': '#aaadad',
                    '400': '#6e7173',
                    '500': '#333536',
                    '600': '#292e30',
                    '700': '#1d2429',
                    '800': '#131a21',
                    '900': '#0a1017',
                    '950': '#04090f',
                },
                // FOR USING IN SECTION SMALL BUTTON LIKE THING
                section: {
                    text1: '#DEE0FF',
                    text2: '#f56567',
                    bg1: '#00000099',
                    bg2: '#f5f5f5',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate'), 'prettier-plugin-tailwindcss'],
} satisfies Config;

export default config;
