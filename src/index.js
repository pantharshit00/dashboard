import React, { Fragment } from 'react'
import CssBaseline from 'material-ui/CssBaseline'
import ReactDOM from 'react-dom'
import Routes from './routes/routes'
import registerServiceWorker from './registerServiceWorker'

import 'typeface-roboto'

const Application = (
  <Fragment>
    <CssBaseline />
    <Routes />
  </Fragment>
)

ReactDOM.render(Application, document.getElementById('root'))
registerServiceWorker()
