import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const NewLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #212121;
  &:hover {
    color: #3B3EE2;
    text-decoration: underline;
  }
`;

export default NewLink;
