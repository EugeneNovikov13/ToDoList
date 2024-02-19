import { HeaderAction, HeaderActionTypes } from '../../../types';

export const setActiveAddInput = (isActive: boolean): HeaderAction => ({
	type: HeaderActionTypes.SET_ACTIVE_ADD_INPUT,
	payload: isActive,
});
