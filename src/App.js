import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends React.Component {
  constructor(props) {
    super(props);

    const storageTheme = localStorage.getItem('theme');
    const theme = storageTheme ? JSON.parse(storageTheme) : 'dark';
    
    this.state = {
      theme
    }

    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }

  handleToggleTheme() {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    }));
  }

  render() {
    return (
      <ThemeProvider theme={themes[this.state.theme] || themes.dark}>
       <GlobalStyle />
       <Layout onToggleTheme={this.handleToggleTheme} />
     </ThemeProvider>
    )    
  }
}

// function App() {
//   const firstRender = useRef(true);
//   useEffect(() => {
//     localStorage.setItem('theme', JSON.stringify(theme));
//   }, [theme]);
//   useEffect(() => {
//     if (firstRender.current) {
//       firstRender.current = false;
//       return;
//     }    
//     console.log({ theme });
//   }, [theme]);
// }

export default App;