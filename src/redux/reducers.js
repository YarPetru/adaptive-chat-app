import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { AvatarGenerator } from 'random-avatar-generator';

import {
  createChat,
  sendMessage,
  deleteChat,
  selectChat,
  findChat,
} from './actions';

const generator = new AvatarGenerator();

const chatsId = [nanoid(), nanoid()];
const msgId = [nanoid(), nanoid(), nanoid(), nanoid(), nanoid()];

const chats = createReducer(
  {
    byId: {
      [chatsId[0]]: {
        id: chatsId[0],
        name: 'Nancy Pelocy',
        photo: generator.generateRandomAvatar(),
        isOnline: true,
        isViewed: true,
        messages: [msgId[0], msgId[1], msgId[2]],
      },
      [chatsId[1]]: {
        id: chatsId[1],
        name: 'Victor Huho',
        photo: generator.generateRandomAvatar(),
        isOnline: true,
        isViewed: true,
        messages: [msgId[3], msgId[4]],
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
    [createChat]: (state, { payload }) => {
      return [payload, ...state];
    },
    [deleteChat]: (state, { payload }) => {
      return state.filter(chats => !chats.id.includes(payload));
    },
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
    },
    ids: [msgId[0], msgId[1], msgId[2], msgId[3], msgId[4]],
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

// const messaging = createReducer('', {
//   [sendMessage]: (_, { payload }) => {
//     return payload;
//   },
// });

export default combineReducers({
  chats,
  messages,
  filter,
  activeChatId,
  // messaging,
});

// //  ===== до розділення
// const chats = createReducer(
//   {
//     byId: {
//       [ids[0]]: {
//         id: ids[0],
//         name: 'Nancy Pelocy',
//         photo: generator.generateRandomAvatar(),
//         isOnline: true,
//         isViewed: true,
//         history: [
//           {
//             text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, voluptates!',
//             date: new Date('2021-12-11T09:24:00'),
//             type: 'upcoming',
//           },
//           {
//             text: 'Lorem, ipsum.',
//             date: new Date('2021-12-19T03:24:00'),
//             type: 'upcoming',
//           },
//           {
//             text: 'Lorem ipsum dolor sit amet consectetur.',
//             date: new Date('2021-12-19T09:24:00'),
//             type: 'incoming',
//           },
//         ],
//       },
//     },
//     allIds: [ids[0], ids[1]],
//   },
//   {
//     [sendMessage]: (state, action) => {
//       //   const { payload } = action;
//       //   const { id, data } = payload;

//       },
//     [createChat]: (state, { payload }) => {
//       return [payload, ...state];
//     },
//     [deleteChat]: (state, { payload }) => {
//       return state.filter(chats => !chats.id.includes(payload));
//     },

// );
