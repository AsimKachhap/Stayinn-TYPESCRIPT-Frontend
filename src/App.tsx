import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard_Home from "./components/dashboard/Dashboard_Home";
import HomePage from "./pages/HomePage";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="hotels/:id" element={<HotelDetailsPage />} />
          </Route>
          <Route path="/dashboards" element={<Dashboard_Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
