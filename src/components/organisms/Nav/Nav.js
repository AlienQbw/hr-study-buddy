import React from 'react';
import { Link } from 'react-router-dom';
import { Label, Wrapper } from './Nav.styles';

const Nav = () => {
  return (
    <Wrapper>
      <Label>
        Study
        <br /> Buddy
      </Label>
      <Link to="/">Home</Link>
      <Link to="/add-user">Add user</Link>
    </Wrapper>
  );
};

export default Nav;
