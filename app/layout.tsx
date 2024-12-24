'use client';

import ThemeRegistry from './_core/config/mui/theme-registry';
import ReduxProvider from './_core/config/redux-provider/reduxProvider';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { ToastContainer } from 'react-toastify';
import { appWithTranslation } from 'next-i18next'; // اضافه کردن

import './globals.css';
import 'react-multi-carousel/lib/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import './i18n';



function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang='fa'>
        <body>
        <ReduxProvider>
            <ThemeRegistry options={{ key: 'mui' }}>
                <InitColorSchemeScript attribute='class' />
                    <div
                        className='h-full w-full'
                    >
                        {children}
                    </div>
            </ThemeRegistry>
        </ReduxProvider>

        <ToastContainer
            draggable
            rtl={true}
            pauseOnHover
            closeOnClick
            autoClose={5000}
            pauseOnFocusLoss
            newestOnTop={false}
            position='top-center'
            hideProgressBar={false}
            toastClassName={'!font-[IRANSans]'}
        />
        </body>
        </html>
    );
}

export default appWithTranslation(RootLayout);
