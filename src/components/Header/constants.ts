import type { MainMenuItem } from './interfaces';

export enum HeaderMenuType {
  MAIN = 'Main',
  SORT = 'Sort',
  SERVICE = 'Service'
}

export const MAIN_MENU: MainMenuItem[] = [
  {
    title: 'Главная',
    type: HeaderMenuType.MAIN
  },
  {
    title: 'Упорядочивание',
    type: HeaderMenuType.SORT
  },
  {
    title: 'Сервис',
    type: HeaderMenuType.SERVICE
  }
];
