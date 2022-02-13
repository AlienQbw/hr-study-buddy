import styled, { ThemeContext } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: end;
  font-size: ${({ theme }) => theme.fontSize.m};
  top: 0;
  left: 0;
  height: 100%;
  width: 109px;
  border-right: 1px solid ${({ theme }) => theme.colors.darkGrey};

  a,
  a:visited {
    margin: 14px 0;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
    padding: 0 24px 0 0;
  }
  a:nth-child(2):after {
    content: '';
    display: block;
    position: relative;
    top: -9px;
    left: 41px;
    height: 2px;
    width: 20px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const Label = styled.div`
  padding: 13px 15px 13px 44px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  margin: 10px 0;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
`;
