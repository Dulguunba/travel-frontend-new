import { create } from 'zustand'

  type SearchType = {
    searchInput: string;
  };
  
  type SearchAction = {
    updateSearchInput: (input: string) => void;
  };
  
  export const useSearchInputStore = create<SearchType & SearchAction>((set) => ({
    searchInput: "",
    updateSearchInput: (input: string) => set((state) => ({ searchInput: input }))
  }));