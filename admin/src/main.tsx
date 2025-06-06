import { Toaster } from "sonner";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  //<StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster richColors position="bottom-right" />
    </Provider>
  </BrowserRouter>
  //</StrictMode>
);
