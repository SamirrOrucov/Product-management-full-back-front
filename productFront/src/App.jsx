import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";

import MainLayout from "./layout/MainLayout";
import AddPage from "./page/addPage/addPage";
import DetailPage from "./page/details/DetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
