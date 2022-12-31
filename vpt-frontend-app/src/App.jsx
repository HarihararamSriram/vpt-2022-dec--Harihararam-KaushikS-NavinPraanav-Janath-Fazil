import "./App.css";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Book from "./components/Book";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchBar />}></Route>
      <Route path="/books" element={<Book />}></Route>
    </Routes>
  );
}
export default App;
