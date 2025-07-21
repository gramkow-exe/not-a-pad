import "./App.css";
import { Home } from "./screens/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoteWritter } from "./components/writters/NoteWritter";
import HtmlWritter from "./components/writters/HtmlWritter";
import MdWritter from "./components/writters/MdWritter";
import { Note } from "./screens/note";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/note/:link" element={<Note />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
