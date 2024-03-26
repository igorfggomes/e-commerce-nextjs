'use client';
import { FilterTypes } from '@/types/filter-types';
import { PriorityTypes } from '@/types/priority-types';
import { createContext, ReactNode, useState } from 'react';

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterTypes.ALL,
  priority: PriorityTypes.NEWS,
  perPage: 0,
  setPriority: (value: PriorityTypes) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterTypes) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterTypes.ALL);
  const [priority, setPriority] = useState(PriorityTypes.POPULARITY);
  const [perPage] = useState(10);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        perPage,
        setSearch,
        setPage,
        setType,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
