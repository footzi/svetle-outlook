import { getData } from 'api/getData';
import type { Note } from 'interfaces/index';

export const getNotes = async (): Promise<Note[]> => {
  try {
    const data = await getData<Note[]>('./data/notes/all.json');

    return 'data' in data && data.data ? data.data : [];
  } catch (error) {
    return [];
  }
};
