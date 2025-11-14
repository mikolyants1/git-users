import { create } from 'zustand';
import { IGitQueryParamsStore } from './types';

export const useGitQueryParams = create<IGitQueryParamsStore>(set => ({
  login: '',
  setLogin: login => set({ login }),
}));
