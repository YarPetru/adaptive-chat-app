import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

export const createChat = createAction(
  'chats/create_chat',
  (name, isOnline, isViewed, history) => ({
    payload: {
      id: nanoid(),
      name,
      photo: generator.generateRandomAvatar(),
      isOnline,
      isViewed,
      history,
    },
  })
);

export const deleteChat = createAction('chats/delete_chat');

export const selectChat = createAction('chats/select_chat');

export const findChat = createAction('chats/find_chat');
