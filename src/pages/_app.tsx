import Admin from '@/layouts/Admin';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<Admin>
		<Component {...pageProps} />
	</Admin>
);

export default MyApp;
