import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  text-align: center;
  ul > * {
    margin-right: 20px;
  }
  ul > * + * {
    color: #3B3EE2;
  }
`;

export default Nav;
