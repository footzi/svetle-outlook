import type { MenuTypes } from '../enums';

export interface User {
  login: string;
  title: string;
}

export interface Message {
  id: number;
  sender: User;
  recipients: User[];
  subject: string;
  time: string;
  body: {
    title: string;
    html: string;
  };
}

export interface MenuItem {
  title: string;
  type: MenuTypes;
}
