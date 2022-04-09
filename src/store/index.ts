import { MenuTypes } from 'enums/index';
import { writable } from 'svelte/store';

export const showMessageModal = writable(false);
export const activeMenu = writable(MenuTypes.NOTES);
