import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { AvatarGenerator } from 'random-avatar-generator';

import { createChat, deleteChat, selectChat, findChat } from './actions';

const generator = new AvatarGenerator();
// const randomDate =

const chats = createReducer(
  [
    {
      id: nanoid(),
      name: 'Nancy Pelocy',
      photo: generator.generateRandomAvatar(),
      isOnline: true,
      isViewed: true,
      history: [
        {
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, voluptates!',
          date: new Date('2021-12-11T09:24:00'),
          //   .toLocaleString('en-US'),
          type: 'upcoming',
        },
        {
          text: 'Lorem, ipsum.',
          date: new Date('2021-12-19T03:24:00'),
          //   .toLocaleString('en-US'),
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur.',
          date: new Date('2021-12-19T09:24:00'),
          //   .toLocaleString('en-US', {  month: 'long',})
          type: 'incoming',
        },
      ],
    },
    {
      id: nanoid(),
      name: 'Victor Huho',
      photo: generator.generateRandomAvatar(),
      isOnline: true,
      isViewed: false,
      history: [
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe ut beatae accusantium.',
          //   date: new Date('2021-12-17T03:24:00'),
          type: 'incoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur.',
          //   date: new Date('2021-12-19T03:40:00'),
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam quas officiis ullam sequi labore fugiat molestias libero adipisci?',
          //   date: new Date('2021-12-19T09:24:00'),
          type: 'incoming',
        },
      ],
    },
    {
      id: nanoid(),
      name: 'Patricia Kaas',
      photo: generator.generateRandomAvatar(),
      isOnline: false,
      isViewed: true,
      history: [
        {
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
          date: '2021-12-17T03:24:00',
          type: 'incoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus saepe odio ullam.',
          date: '2021-12-19T03:40:00',
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet.',
          date: '2021-12-19T09:24:00',
          type: 'incoming',
        },
      ],
    },
    {
      id: nanoid(),
      name: 'Nancy Pelocy',
      photo: generator.generateRandomAvatar(),
      isOnline: true,
      isViewed: true,
      history: [
        {
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, voluptates!',
          date: '2021-12-17T03:24:00',
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, voluptates!',
          date: '2021-12-19T03:40:00',
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, voluptates!',
          date: '2021-12-19T09:24:00',
          type: 'incoming',
        },
      ],
    },
    {
      id: nanoid(),
      name: 'Victor Huho',
      photo: generator.generateRandomAvatar(),
      isOnline: true,
      isViewed: false,
      history: [
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe ut beatae accusantium.',
          //   date: new Date('2021-12-17T03:24:00'),
          type: 'incoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur.',
          //   date: new Date('2021-12-19T03:40:00'),
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam quas officiis ullam sequi labore fugiat molestias libero adipisci?',
          //   date: new Date('2021-12-19T09:24:00'),
          type: 'incoming',
        },
      ],
    },
    {
      id: nanoid(),
      name: 'Patricia Kaas',
      photo: generator.generateRandomAvatar(),
      isOnline: false,
      isViewed: true,
      history: [
        {
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
          //   date: new Date('2021-12-17T03:24:00'),
          type: 'incoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus saepe odio ullam.',
          //   date: new Date('2021-12-19T03:40:00'),
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet.',
          //   date: new Date('2021-12-19T09:24:00'),
          type: 'incoming',
        },
      ],
    },
  ],
  {
    [createChat]: (state, { payload }) => {
      return [payload, ...state];
    },
    [deleteChat]: (state, { payload }) => {
      return state.filter(chats => !chats.id.includes(payload));
    },
    // [selectChat]: (state, { payload }) => {
    //   return state.filter(chats => chats.id.includes(payload));
    // },
  }
);

const filter = createReducer('', {
  [findChat]: (_, { payload }) => {
    return payload;
  },
});

const activeChat = createReducer('', {
  [selectChat]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  chats,
  filter,
  activeChat,
});
