import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Container } from '@mui/material'

import { Navbar } from './components'
import { Home, List, Reviews } from './pages'
import { Routes } from './constants'

import styles from './App.module.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container className={styles.container}>
        <Container maxWidth="md" className={styles.layout}>
          <Switch>
            <Route path={Routes.Home} component={Home} exact />
            <Route path={Routes.Reviews} component={List} exact />
            <Route path={Routes.Review} component={Reviews} exact />
            <Route path={Routes.Bookiply} exact>
              <Redirect to={Routes.Home} />
            </Route>
          </Switch>
        </Container>
      </Container>
    </BrowserRouter>
  )
}

export default App
