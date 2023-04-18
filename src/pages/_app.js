import { useEffect, useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Toaster } from 'react-hot-toast';
import { Provider as ReduxProvider } from 'react-redux';
import nProgress from 'nprogress';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { RTL } from '../components/rtl';
import { SplashScreen } from '../components/splash-screen';
import { SettingsConsumer, SettingsProvider } from '../contexts/settings-context';
import { store } from '../store';
import { createTheme } from '../theme';
import { createEmotionCache } from '../utils/create-emotion-cache';
import '../i18n';
import '../styles/common.css';
import { CookiesProvider } from 'react-cookie';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const [isLoading, setIsLoading] = useState(false);

	const getLayout = Component.getLayout ?? ((page) => page);

	useEffect(() => {
		window['counterLoading'] = 0;

		(function () {
			const origOpen = XMLHttpRequest.prototype.open;
			XMLHttpRequest.prototype.open = function () {
				window['counterLoading'] = window['counterLoading'] + 1;
				setIsLoading(true);
				this.addEventListener('load', function () {
					window['counterLoading'] = window['counterLoading'] - 1;
					setIsLoading(window['counterLoading'] > 0);
				});
				this.addEventListener('error', function () {
					window['counterLoading'] = window['counterLoading'] - 1;
					setIsLoading(window['counterLoading'] > 0);
				});
				origOpen.apply(this, arguments);
			};
		})();

		document.addEventListener('keydown', (event) => {
			// Not allow action while loading
			if (isLoading) {
				event.preventDefault();
				event.stopImmediatePropagation();
				event.stopPropagation();
			}
		});
	}, []);

	return (
		<CookiesProvider>
			<CacheProvider value={emotionCache}>
				<Head>
					<title>Arent Healthy</title>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
				</Head>

				<ReduxProvider store={store}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<SettingsProvider>
							<SettingsConsumer>
								{({ settings }) => (
									<ThemeProvider
										theme={createTheme({
											direction: settings.direction,
											responsiveFontSizes: settings.responsiveFontSizes,
											mode: settings.theme,
											typography: {
												fontFamily: [
													'Noto Sans JP',
													'sans-serif',
												].join(','),
										 },
										})}
									>
										<RTL direction={settings.direction}>
											<CssBaseline />
											<Toaster position="top-center" />
											{getLayout(<Component {...pageProps} />)}
										</RTL>
									</ThemeProvider>
								)}
							</SettingsConsumer>
						</SettingsProvider>
					</LocalizationProvider>
				</ReduxProvider>
			</CacheProvider>
		</CookiesProvider>
	);
};

export default App;
