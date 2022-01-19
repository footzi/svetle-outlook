import { getData } from '../../../../api/getData';
import type { Message, User } from '../../../../interfaces';
import dayjs from 'dayjs';
import { FolderType } from '../../Folders/constants';

export const getMail = async (folder: FolderType): Promise<Message[]> => {
  const url =
    folder === FolderType.INPUT
      ? '/data/mail/inbox.json'
      : '/data/mail/outbox.json';
  const data = await getData<Message[]>(url);

  if ('data' in data && data.data) {
    return data.data.map((message: Message) => {
      return {
        id: message.id ?? 0,
        sender: {
          login: message?.sender?.login ?? '',
          title: message?.sender?.title ?? ''
        },
        recipients: message?.recipients.map((recepient: User) => ({
          login: recepient.login ?? '',
          title: recepient.title ?? ''
        })),
        subject: message?.subject ?? '',
        time: message?.time ? dayjs(message.time).format('HH:MM') : '',
        body: {
          title: message?.body?.title ?? '',
          html: message?.body?.html ?? ''
        }
      };
    });
  } else {
    return [];
  }
};
