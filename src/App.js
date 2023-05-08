import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageSession from "./Pages/Page.Session";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<PageSession />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
