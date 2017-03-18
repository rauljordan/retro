import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: #000000;
  background-color: #7EFFCC;
  border: 3px solid #000000;
  border-radius: 3px;
  box-shadow: 4px 4px 0px #000000;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  &:hover {
    box-shadow: 1px 1px 0px #000000;
  }
`;

export default Button;
