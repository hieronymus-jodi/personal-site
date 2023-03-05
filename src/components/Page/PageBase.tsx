import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../index.css';
import { KeyboardOnlyLink } from '../A11y';

import { NavBar } from '../NavBar';

function PageBase() {
  return (
    <div>
      <KeyboardOnlyLink href="#main">Skip to Content</KeyboardOnlyLink>
      <NavBar />
      <div id="main">
        <Outlet />
      </div>
    </div>
  );
}

export default PageBase;
