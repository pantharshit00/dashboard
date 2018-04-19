import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Index from './index'

export default () => (
  <BrowserRouter>
    <Route path="/" component={Index} />
  </BrowserRouter>
)
