import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";


const App = React.lazy(() => import("./App"));
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Suspense fallback={null}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </React.Suspense>
);
