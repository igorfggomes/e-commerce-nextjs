import styled from 'styled-components';

interface ButtonProps {
  selected?: boolean;
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--button-pagination-color);
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;

  ${({ selected }) =>
    selected &&
    `
    color: var(--orange-low);
    background: var(--white-color);
    border: 1.5px solid var(--orange-low);
 `}
`;

export const PaginationContainer = styled.div`
  display: flex;
  gap: 2px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-top: 32px;

  > div {
    display: flex;
    gap: 2px;
  }
`;