import { ConversionProvider } from '../contexts/conversion';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ConversionProvider>
      <Component {...pageProps} />
    </ConversionProvider>
  );
}

export default MyApp;
