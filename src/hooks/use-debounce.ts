import { useRef } from 'react';

export function useDebounce<T>(func: (...args: T[] | []) => void, delay: number) {
	let refs = useRef<NodeJS.Timeout>();

	return function (...args: T[] | []) {
		clearTimeout(refs?.current);
		refs.current = setTimeout(() => func.apply(this, args), delay);
	};
}
