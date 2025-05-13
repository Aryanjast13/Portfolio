import { StrictMode } from 'react'

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import AuthContextProvider from "./components/Context/AuthContextProvider.tsx";
import "./index.css";
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
