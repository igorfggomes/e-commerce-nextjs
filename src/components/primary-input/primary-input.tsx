import { SearchIcon } from '@/assets/icons/search-icon';
import { InputHTMLAttributes } from 'react';
import { InputContainer, PrimaryInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export function PrimaryInputWSearchIcon({
  value,
  handleChange,
  ...rest
}: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(event) => handleChange(event.target.value)}
        {...rest}
      />
      <SearchIcon />
    </InputContainer>
  );
}
