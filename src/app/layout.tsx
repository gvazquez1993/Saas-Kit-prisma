import '../styles/globals.css';
import { ThemeProvider } from '@/styles/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import NextTopLoader from 'nextjs-toploader';
import config from '@/lib/config/site';
import { I18nProvider } from '@/components/I18nProvider';

const RootLayout = ({ children }) => {
  return (
    <html suppressHydrationWarning lang="en"> 
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <NextTopLoader color={config.loading_bar_color} />
            {children}
          </I18nProvider>
        </ThemeProvider>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
};

export default RootLayout;
