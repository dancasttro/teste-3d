import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import { useDarkMode } from './useDarkMode'
import Layout from './components/Layout'
import Header from './components/Header'
import Container from './components/Container'

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Layout>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Container />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
