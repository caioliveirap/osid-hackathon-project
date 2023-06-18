import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

export default function MyApp({ Component, pageProps }: any) {
	// const getLayout = Component.getLayout ?? ((page) => page);
	const Layout = Component.layout || (({ children }: any) => <>{children}</>);

	return (
		<>
			<Head>
				{/* <meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/> */}
				<title>Dulce insights</title>
				<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
