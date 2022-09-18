import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from './components'
import { GlobalStyled } from './styles/global'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />

    <GlobalStyled />
  </React.StrictMode>
)
