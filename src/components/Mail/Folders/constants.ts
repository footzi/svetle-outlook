import type { FolderItem } from './interfaces';
import { faFolder, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

export enum FolderType {
  INPUT = 'Input',
  OUTPUT = 'Output'
}

export const FOLDERS: FolderItem[] = [
  {
    title: 'Входящие',
    type: FolderType.INPUT,
    icon: faFolder
  },
  {
    title: 'Исходящие',
    type: FolderType.OUTPUT,
    icon: faPaperPlane
  }
];
