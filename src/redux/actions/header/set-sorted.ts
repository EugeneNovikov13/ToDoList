import { HeaderAction, HeaderActionTypes } from '../../../types';

export const setSorted = (active: boolean): HeaderAction => ({
	type: HeaderActionTypes.SET_SORTED,
	payload: active,
});
