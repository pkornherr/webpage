import '../styles/index.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { AppProps } from 'next/dist/shared/lib/router/router';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
