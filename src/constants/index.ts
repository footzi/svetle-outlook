import { Routes } from '../enums';
import type { MenuItem } from '../interfaces';

export const MAIN_MENU: MenuItem[] = [
  {
    title: 'Заметки',
    href: Routes.NOTES
  },
  {
    title: 'Почта',
    href: Routes.MAIL
  },
  {
    title: 'Календарь',
    href: Routes.CALENDAR
  }
];
