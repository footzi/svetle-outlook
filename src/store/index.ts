import { writable } from 'svelte/store';
import { MenuTypes } from 'enums/index';

export const showMessageModal = writable(false);
export const activeMenu = writable(MenuTypes.MAIN);
