import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { Global, ThemeProvider } from '@emotion/react';
import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import { Provider } from 'react-redux';
import { store } from 'store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
