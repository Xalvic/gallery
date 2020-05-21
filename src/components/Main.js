import React, { useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className='Main'>
      <div className='head'>
        <p>Hi, I'm</p>
        <p>Jade Brown</p>
        <p className='art'>I'm an Artist</p>
      </div>
      <Link className='link' to='/components/Card'>
        My Works
      </Link>
    </div>
  );
}

export default Main;
