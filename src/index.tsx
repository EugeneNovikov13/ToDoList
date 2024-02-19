import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import { App } from './app';

const rootElement: HTMLElement | null = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);

root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);
