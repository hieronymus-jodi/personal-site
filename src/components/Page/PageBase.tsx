import React from "react";
import { Outlet } from "react-router-dom";
import '../../index.css';

import { MobileNav } from "../NavBar";

function PageBase() {
    return (
      <div>
        <MobileNav />
        <Outlet />
      </div>
    );
  }

export default PageBase;