import styled from 'styled-components';

export const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 6px;
  border: none;
  padding: 10px 16px;
  background: var(--bg-secondary);

  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: var(--text-dark);

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 250px;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    width: 352px;
  }

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
