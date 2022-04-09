import { MenuTypes } from '../enums';
import type { MenuItem } from '../interfaces';

export const MAIN_MENU: MenuItem[] = [
  {
    title: 'Заметки',
    type: MenuTypes.NOTES
  },
  {
    title: 'Почта',
    type: MenuTypes.MAIN
  },
  {
    title: 'Календарь',
    type: MenuTypes.CALENDAR
  }
];
