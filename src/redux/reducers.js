import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { AvatarGenerator } from 'random-avatar-generator';

import {
  sendMessage,
  selectChat,
  findChat,
  // createChat,
  // deleteChat,
} from './actions';

const generator = new AvatarGenerator();

const chatsId = [nanoid(), nanoid(), nanoid()];
const msgId = [
  nanoid(),
  nanoid(),
  nanoid(),
  nanoid(),
  nanoid(),
  nanoid(),
  nanoid(),
  nanoid(),
];

const chats = createReducer(
  {
    byId: {
      [chatsId[0]]: {
        id: chatsId[0],
        name: 'Nancy Pelocy',
        photo: generator.generateRandomAvatar(),
        isOnline: true,
        messages: [msgId[0], msgId[1], msgId[2]],
      },
      [chatsId[1]]: {
        id: chatsId[1],
        name: 'Victor Huho',
        photo: generator.generateRandomAvatar(),
        isOnline: true,
        messages: [msgId[3], msgId[4]],
      },
      [chatsId[2]]: {
        id: chatsId[2],
        name: 'Chuck Norris',
        photo: generator.generateRandomAvatar(),
        isOnline: false,
        messages: [msgId[5], msgId[6], msgId[7]],
      },
    },
    ids: [chatsId[0], chatsId[1]],
  },
  {
    [sendMessage]: (state, action) => {
      const chatId = action.payload.chatId;
      const msgId = action.payload.id;
      state.byId[chatId].messages.push(msgId);
    },
    // [createChat]: (state, { payload }) => {
    //   return [payload, ...state];
    // },
    // [deleteChat]: (state, { payload }) => {
    //   const chatsObj = state.byId;
    //   // console.log(payload);
    //   Object.keys(chatsObj)
    //     .filter(chatId => chatId === payload)
    //     .reduce((updatedObj, chatId) => {
    //       updatedObj[chatId] = chatsObj[chatId];
    //       return console.log(updatedObj);
    //     }, {});
    // },
  }
);

const messages = createReducer(
  {
    byId: {
      [msgId[0]]: {
        id: msgId[0],
        name: 'Nancy Pelocy',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, voluptates!',
        date: new Date('2021-12-11T09:24:00'),
        type: 'upcoming',
      },
      [msgId[1]]: {
        id: msgId[1],
        name: 'Nancy Pelocy',
        text: 'Lorem, ipsum.',
        date: new Date('2021-12-19T03:24:00'),
        type: 'upcoming',
      },
      [msgId[2]]: {
        id: msgId[2],
        name: 'Nancy Pelocy',
        text: 'Lorem ipsum dolor sit amet consectetur.',
        date: new Date('2021-12-19T09:24:00'),
        type: 'incoming',
      },
      [msgId[3]]: {
        id: msgId[3],
        name: 'Victor Huho',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe ut beatae accusantium.',
        date: new Date('2021-12-17T03:24:00'),
        type: 'incoming',
      },
      [msgId[4]]: {
        id: msgId[4],
        name: 'Victor Huho',
        text: 'Lorem ipsum dolor sit amet consectetur.',
        date: new Date('2021-12-19T03:40:00'),
        type: 'upcoming',
      },
      [msgId[5]]: {
        id: msgId[5],
        name: 'Chuck Norris',
        text: 'Hi! Do you want some jokes? You want!',
        date: new Date('2013-12-19T03:40:00'),
        type: 'incoming',
      },
      [msgId[6]]: {
        id: msgId[6],
        name: 'Chuck Norris',
        text: 'Hmm... Sorry?',
        date: new Date('2015-12-19T03:40:00'),
        type: 'upcoming',
      },
      [msgId[7]]: {
        id: msgId[7],
        name: 'Chuck Norris',
        text: 'Chuck Norris is the reason the penguins live in Antarctica.',
        date: new Date('2022-01-19T13:40:00'),
        type: 'incoming',
      },
    },
    ids: [
      msgId[0],
      msgId[1],
      msgId[2],
      msgId[3],
      msgId[4],
      msgId[5],
      msgId[6],
      msgId[7],
    ],
  },
  {
    [sendMessage]: (state, action) => {
      const message = action.payload;
      delete message.chatId;
      state.byId[message.id] = message;
      state.ids.push(message.id);
    },
  }
);

const filter = createReducer('', {
  [findChat]: (_, { payload }) => {
    return payload;
  },
});

const activeChatId = createReducer('', {
  [selectChat]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  chats,
  messages,
  filter,
  activeChatId,
});
