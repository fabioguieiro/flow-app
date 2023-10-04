import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            matrixGreen: '#42b750',
            walterWhite: '#FFFFFF',
            wesBeige: '#EAE2CC',
            wesBeigeActive: '#EED388',
            manhatanBlue: '#6A769E',
            babyBlue: '#CAF0FC',
            shrekGreen: '#D7FCF1',
            mrPink: '#F3C4C3',
            mechanicOrange: '#FF6101',
            black: '#000000',
            transparent: 'rgba(0, 0, 0, 0)',
            red: '#FF0000',
        },
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
}
export default config
