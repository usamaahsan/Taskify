import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme.ts";
import { Provider } from "react-redux";
import { tasksStore } from "./redux/tasksStore";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={tasksStore}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
