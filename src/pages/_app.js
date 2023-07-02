import React from 'react';
import Head from 'next/head';
import 'semantic-ui-css/semantic.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Invoice Generator</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
