'use client';
import { Saira_Stencil_One } from 'next/font/google';
import { CartControl } from '../cart-control/cart-control';
import { PrimaryInputWSearchIcon } from '../primary-input/primary-input';
import { useFilter } from '@/hooks/useFilter';
import { Logo, TagHeader } from './styles';

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
});

export function Header() {
  const { search, setSearch } = useFilter();

  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon
          placeholder="Procurando por algo específico?"
          value={search}
          handleChange={setSearch}
        />
        <CartControl />
      </div>
    </TagHeader>
  );
}
