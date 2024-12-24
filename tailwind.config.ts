import type { Config } from 'tailwindcss'
import colors from './tailwind-colors'

const config: Config = {
    darkMode: ['class', 'class'],
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                ...colors,
            },
        },
    },
    plugins: [
        function ({ addUtilities, theme }) {
            const responsiveFontSizes = {
                '.text-base': {
                    fontSize: '12px',
                },
                '.text-xs': {
                    fontSize: '10px',
                },
                '.text-sm': {
                    fontSize: '11px',
                },
                '.text-lg': {
                    fontSize: '14px',
                },
                '.text-xl': {
                    fontSize: '16px',
                },
                '.text-2xl': {
                    fontSize: '18px',
                },
                '.text-3xl': {
                    fontSize: '20px',
                },
                '.text-4xl': {
                    fontSize: '22px',
                },
                '@screen md': {
                    '.text-base': {
                        fontSize: '13px',
                        // lineHeight: 2.5,
                    },
                    '.text-xs': {
                        fontSize: '11px',
                    },
                    '.text-sm': {
                        fontSize: '12px',
                    },
                    '.text-lg': {
                        fontSize: '14px',
                    },
                    '.text-xl': {
                        fontSize: '16px',
                    },
                    '.text-2xl': {
                        fontSize: '20px',
                    },
                    '.text-3xl': {
                        fontSize: '22px',
                    },
                    '.text-4xl': {
                        fontSize: '26px',
                    },
                },
                '@screen lg': {
                    '.text-base': {
                        fontSize: '13px',
                        // lineHeight: 4.5,
                    },
                    '.text-xs': {
                        fontSize: '11px',
                    },
                    '.text-sm': {
                        fontSize: '12px',
                    },
                    '.text-lg': {
                        fontSize: '14px',
                    },
                    '.text-xl': {
                        fontSize: '16px',
                    },
                    '.text-2xl': {
                        fontSize: '20px',
                    },
                    '.text-3xl': {
                        fontSize: '22px',
                    },
                    '.text-4xl': {
                        fontSize: '26px',
                    },
                },
            }

            addUtilities(responsiveFontSizes, { variants: ['responsive'] })
        },
    ],
}
export default config
