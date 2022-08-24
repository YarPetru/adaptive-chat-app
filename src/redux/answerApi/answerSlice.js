import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const answerApi = createApi({
  reducerPath: 'answerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.chucknorris.io/jokes/',
  }),
  tagTypes: ['answerApi'],
  endpoints: builder => ({
    getAnswer: builder.query({
      query: () => ({
        url: `random`,
        method: 'GET',
      }),
      providesTags: ['answerApi'],
    }),
  }),
});

export const { useGetAnswerQuery, useLazyGetAnswerQuery } = answerApi;
