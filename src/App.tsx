import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard_Layout from "./components/dashboard/Dashboard_Layout";
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
          <Route path="/dashboards" element={<Dashboard_Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
