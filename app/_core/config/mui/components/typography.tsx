import { Noto_Kufi_Arabic, Poppins } from 'next/font/google'
export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
export const kufi = Noto_Kufi_Arabic({
    subsets: ['arabic'],
    display: 'swap',
    variable: '--font-noto_kufi_arabic',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
const Typography = {
    typography: {
        fontSize: 15,
        fontWeight: 400,
        fontFamily: kufi.style.fontFamily,
        button: {
            textTransform: 'capitalize' as React.CSSProperties['textTransform'],
        },
        '4xl': {
            fontWeight: 700,
            fontSize: '26px',
            lineHeight: 1.4,
        },

        '3xl': {
            fontWeight: 600,
            fontSize: '22px',
            lineHeight: 1.4,
        },
        '2xl': {
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: 1.4,
        },
        xl: {
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: 1.4,
        },

        lg: {
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: 1.4,
        },
        base: {
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: 1.4,
        },
        sm: {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: 1.4,
        },
        xs: {
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: 1.4,
        },
    },
}

export default Typography
