import { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Events as ScrollEvents, } from 'react-scroll';
import LinkExternal from '../components/Link/LinkExternal';

import { useMediaPredicate } from 'react-media-hook';
import { mobileBreakpoint } from '../helpers/Media';
import './Header.scss';



function Header({ fixed }) {
  const isMobile = useMediaPredicate(mobileBreakpoint);

  return (
    <header className={fixed ? "header header-fixed" : "header"}>
      Header
    </header>
  );
};

export default hot(module)(Header);
