import { useRef } from 'react';

export const useDebounce = (func, delay) => {
	let refs = useRef(null);

	return function (...args) {
		clearTimeout(refs.current);
		refs.current = setTimeout(() => func.apply(this, args), delay);
	};
};
