// COMPONENTS
import { AppRoutes } from 'routes'
// REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
// RECOIL
import {RecoilRoot} from 'recoil'
// STYLES
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/defaultTheme';
import { GlobalStyle } from 'styles/reset';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
