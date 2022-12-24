/* eslint-disable import/no-unresolved */
import { Analytics } from '@vercel/analytics/react';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default MyApp;
