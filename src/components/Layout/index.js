import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../../Routes';

import { Nav } from './styles';

export default function Layout({ onToggleTheme }) {
  const theme = useTheme();

  useEffect(() => {
    function handleScroll() {
      console.log('scroll');
    }
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <Header icon={theme.icon} onToggleTheme={onToggleTheme} />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </Nav>
      <Routes />
      <Footer icon={theme.icon} onToggleTheme={onToggleTheme} />
    </BrowserRouter>
  )
}