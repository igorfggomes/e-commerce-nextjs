'use client';
import { FilterByPriority } from '../filter-by-priority/filter-by-priority';
import { FilterByType } from '../filter-by-type/filter-by-type';
import { FilterContainer } from './styles';

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
}
