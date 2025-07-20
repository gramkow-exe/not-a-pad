import "./App.css";
import { Home } from "./screens/home";
import HtmlWritter from "./writters/HtmlWritter";
import MdWritter from "./writters/MdWritter";
import { NoteWritter } from "./writters/NoteWritter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="note" element={<NoteWritter />} />
          <Route path="md" element={<MdWritter />} />
          <Route path="html" element={<HtmlWritter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
