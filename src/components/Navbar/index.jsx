import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import potatoIcon from '@iconify/icons-twemoji/potato';
import bxsMap from '@iconify/icons-bx/bxs-map';


//Style
import './style.css'

const Navbar = ({ data }) => {
  return (
    <nav className="Navbar">
      <div className="Logo">
        <Icon icon={potatoIcon} style={{fontSize: '44px'}} className="Icon" />
        <h1>Paperos del occidente SA</h1>
      </div>
      <div className="City">
        <h1>{ data?.location?.name },CO</h1>
        <Icon icon={bxsMap} style={{color: '#f7f7f7', fontSize: '34px'}} />
      </div>
    </nav>
  );
};

export default Navbar;