import { SerializedError } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react'
import { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

import api from '../../../services/api';
import { Data } from '../../../services/api/types';

import { CharacterType, getCharacterParams } from '../types';

const axiosBaseQuery = ({ axios }: { axios: AxiosInstance })
  : BaseQueryFn<AxiosRequestConfig, unknown, SerializedError> =>
  async ({ url, method, params }) => {
    try {
      const response: AxiosResponse = await axios.request({
        url,
        method,
        params,
      });
      return { data: response.data };
    } catch (error: any) {
      console.log(error.response);
      return {
        error: {
          name: error.response.statusText,
          message: error.response.data.error,
          code: error.response.status,
        }
      };
    }
  };

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: axiosBaseQuery({ axios: api }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Data<CharacterType>, getCharacterParams>({
      query: (params: getCharacterParams): AxiosRequestConfig => ({
        url: 'character',
        method: 'GET',
        params,
      }),
    }),
    getCharacterById: builder.query<CharacterType, number>({
      query: (id: number): AxiosRequestConfig => ({
        url: `character/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export default characterApi;
