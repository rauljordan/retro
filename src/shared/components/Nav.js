import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  text-align: left;
  ul > * {
    margin-right: 20px;
  }
  ul > * + * {
    color: #3B3EE2;
  }
`;

export default Nav;
