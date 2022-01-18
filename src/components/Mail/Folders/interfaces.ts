import type { FolderType } from './constants';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface FolderItem {
  title: string;
  type: FolderType;
  icon: IconDefinition;
}
