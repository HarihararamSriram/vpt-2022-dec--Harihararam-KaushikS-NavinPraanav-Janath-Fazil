import "./App.css";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Book from "./components/Book";
import Description from "./pages/Description";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SearchBar />
            <Book />
          </>
        }
      ></Route>
      <Route path="/books/:bookId" element={<Description />}></Route>
    </Routes>
  );
}
export default App;
