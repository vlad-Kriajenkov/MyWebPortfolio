import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';
 
export const Wrapper = styled.div`
  input[type='checkbox'] {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    width: 1.17rem;
    height: 1.17rem;
    border-radius: 0.15rem;
    margin-right: 1.25rem;
    border: 0.15em solid #607b96;
    outline: none;
    cursor: pointer;

  }

  .checked {
    background-color: #607b96;
    position: relative;
  }

  .checked::before {
    content: '\\2713';
    font-size: 1.5em;
    color: #fff;
    position: absolute;
    right: 1px;
    top: -5px;
  }

  margin-bottom: 0.8rem;
  color: ${myColor.text.primary};
`;

export const Lable = styled.label`
  display: flex;
  font-size: 1rem;
  align-items: center;
  height: 1.2rem;
  svg {
    width: 1.5rem;
    margin-right: 0.62rem;
  }
`;
