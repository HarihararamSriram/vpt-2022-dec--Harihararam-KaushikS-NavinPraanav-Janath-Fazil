import "./App.css";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Book from "./components/Book";
import Description from "./pages/Description";
import { functions } from "../backend";
/*
['key', 'title', 'edition_count', 'first_publish_year', 'contributor', 'ebook_access', 'author_name', 'author_alternative_name', 'subject']
*/
function App() {
  const [apiData, setApiData] = useState(null);
  const getSearchValue = async (searchValue, pageValue) => {
    const data = await functions.searchBook(searchValue, pageValue);
    setApiData(data);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SearchBar getSearchValue={getSearchValue} />
            <Book data={apiData} />
          </>
        }
      ></Route>
      {/* <Route path="/books"> <Navigate replace to='/'></Route> */}
      <Route path="/books/:bookId" element={<Description />}></Route>
    </Routes>
  );
}
export default App;
