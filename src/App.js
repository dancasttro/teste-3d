import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import { useDarkMode } from './useDarkMode'

import Layout from './components/Layout'
import Header from './components/Header'
import Container from './components/Container'
import Details from './components/Details'

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Layout>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Container} />
            <Route path="/preview/:countryId" component={Details} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
