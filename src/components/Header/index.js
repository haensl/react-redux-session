import React from 'react';
import { Typography } from '@material-ui/core';
import './Header.css';

const Header = () => (
  <header className="Header">
    <Typography variant="subtitle1">Welcome to</Typography>
    <Typography variant="h2">Application state management with Redux</Typography>
  </header>
);

export default Header;
