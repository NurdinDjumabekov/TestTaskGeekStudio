import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import DetailedPage from "./pages/DetailedPage/DetailedPage";
import Layout from "./components/hoc/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/detailed/:id" element={<DetailedPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
