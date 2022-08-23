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

// const ids = [nanoid(), nanoid(), nanoid(), nanoid()];

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
//       [ids[1]]: {
//         id: ids[1],
//         name: 'Victor Huho',
//         photo: generator.generateRandomAvatar(),
//         isOnline: true,
//         isViewed: false,
//         history: [
//           {
//             text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe ut beatae accusantium.',
//             date: new Date('2021-12-17T03:24:00'),
//             type: 'incoming',
//           },
//           {
//             text: 'Lorem ipsum dolor sit amet consectetur.',
//             date: new Date('2021-12-19T03:40:00'),
//             type: 'upcoming',
//           },
//           {
//             text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam quas officiis ullam sequi labore fugiat molestias libero adipisci?',
//             date: new Date('2021-12-19T09:24:00'),
//             type: 'incoming',
//           },
//         ],
//       },
//     },
//   },
//   {
//     [createChat]: (state, { payload }) => {
//       return [payload, ...state];
//     },
//     [deleteChat]: (state, { payload }) => {
//       return state.filter(chats => !chats.id.includes(payload));
//     },
//     [sendMessage]: (state, { payload }) => {
//       state.chats.history.push(payload);
//     },
//   }
// );

// const filter = createReducer('', {
//   [findChat]: (_, { payload }) => {
//     return payload;
//   },
// });

// const activeChat = createReducer('', {
//   [selectChat]: (_, { payload }) => {
//     return payload;
//   },
//   [sendMessage]: (state, { payload }) => {
//     state.history.push(payload);
//   },
// });

// export default combineReducers({
//   chats,
//   filter,
//   activeChat,
// });

// ------------- work reducer
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

          type: 'upcoming',
        },
        {
          text: 'Lorem, ipsum.',
          date: new Date('2021-12-19T03:24:00'),

          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur.',
          date: new Date('2021-12-19T09:24:00'),

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
          date: new Date('2021-12-17T03:24:00'),
          type: 'incoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur.',
          date: new Date('2021-12-19T03:40:00'),
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam quas officiis ullam sequi labore fugiat molestias libero adipisci?',
          date: new Date('2021-12-19T09:24:00'),
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
          date: new Date('2019-02-19T19:24:00'),
          type: 'incoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus saepe odio ullam.',
          date: new Date('2019-12-19T06:45:00'),
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet.',
          date: new Date('2019-12-19T06:34:00'),
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
          date: new Date('2016-02-16T08:44:00'),
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, voluptates!',
          date: new Date('2016-02-16T09:24:00'),
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, voluptates!',
          date: new Date('2016-05-19T05:24:00'),
          type: 'incoming',
        },
        {
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, voluptates!',
          date: new Date('2016-06-11T18:44:00'),
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, voluptates!',
          date: new Date('2016-06-11T19:24:00'),
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, voluptates!',
          date: new Date('2019-05-19T05:24:00'),
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
          date: new Date('2022-01-17T03:24:00'),
          type: 'incoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur.',
          date: new Date('2022-02-13T15:40:00'),
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam quas officiis ullam sequi labore fugiat molestias libero adipisci?',
          date: new Date('2022-02-19T09:24:00'),
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
          date: new Date('2020-12-17T13:24:00'),
          type: 'incoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus saepe odio ullam.',
          date: new Date('2021-02-19T23:40:00'),
          type: 'upcoming',
        },
        {
          text: 'Lorem ipsum dolor sit amet.',
          date: new Date('2022-04-19T09:24:00'),
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
    // [sendMessage]: (state, { payload }) => {
    //
    // let index = state.findIndex(function (e) {
    //   return e.id === payload.id;
    // });

    // return current(state)[index].history.push(payload.data);
    // },
  }
);

const filter = createReducer('', {
  [findChat]: (_, { payload }) => {
    return payload;
  },
});

const listing = createReducer('', {
  [sendMessage]: (_, { payload }) => {
    return payload;
  },
});

const activeChatId = createReducer('', {
  [selectChat]: (_, { payload }) => {
    return payload;
  },
  //   [sendMessage]: (state, { payload }) => {
  //     state.history.push(payload);
  //   },
});

export default combineReducers({
  chats,
  filter,
  listing,
  activeChatId,
});
