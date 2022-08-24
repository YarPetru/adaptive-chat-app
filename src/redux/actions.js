import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

export const createChat = createAction(
  'chats/create_chat',
  (name, isOnline, isViewed) => ({
    payload: {
      id: nanoid(),
      name,
      photo: generator.generateRandomAvatar(),
      isOnline,
      isViewed,
    },
  })
);

// export const sendMessage = createAction('chats/send_message', text => ({
//   payload: {
//     text,
//     date: new Date(),
//     type: 'upcoming',
//   },
// }));

export const sendMessage = createAction(
  'chats/send_message',
  (chatId, name, text, type) => ({
    payload: {
      chatId,
      id: nanoid(),
      name,
      text,
      date: new Date(),
      type,
    },
  })
);

export const deleteChat = createAction('chats/delete_chat');

export const selectChat = createAction('chats/select_chat');

export const findChat = createAction('chats/find_chat');