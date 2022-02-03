import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'

import { Routes } from '../constants'

export const Navbar: React.FC = () => {
  const history = useHistory()

  const handleClick = useCallback(() => {
    history.push(Routes.Home)
  }, [history])

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Button color="inherit" onClick={handleClick}>
            Home
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
