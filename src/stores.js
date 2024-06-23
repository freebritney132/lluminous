import { get, writable } from 'svelte/store';
import { persisted } from './localstorage.js';

export const controller = writable(null);

export const params = persisted('params', {
	maxTokens: 0,
	temperature: 0.3,
	top_p: 1,
});

export const config = persisted('config', {
	compactToolsView: false,
});

export const openaiAPIKey = persisted('openaiAPIKey', '');
export const proxyBaseURL = persisted('proxyBaseURL', '');
export const proxyAPIKey = persisted('proxyAPIKey', '');
export const openrouterAPIKey = persisted('openrouterkey', '');
export const groqAPIKey = persisted('groqAPIKey', '');
export const mistralAPIKey = persisted('mistralAPIKey', '');

export const remoteServer = persisted('remoteServer', { address: '', password: '' });
export const toolSchema = persisted('toolSchema', []);

export function pick(parentStore, getFn) {
	const { subscribe, set } = writable(getFn(get(parentStore)));

	const unsubscribe = parentStore.subscribe((value) => {
		set(getFn(value));
	});

	return {
		subscribe,
		set: (value) => {
			parentStore.update((current) => {
				const parent = { ...current };
				const updatedValue = getFn(parent);
				Object.assign(updatedValue, value);
				return parent;
			});
		},
		update: (updateFn) => {
			parentStore.update((current) => {
				const parent = { ...current };
				const updatedValue = getFn(parent);
				Object.assign(updatedValue, updateFn(updatedValue));
				return parent;
			});
		},
		unsubscribe,
	};
}
