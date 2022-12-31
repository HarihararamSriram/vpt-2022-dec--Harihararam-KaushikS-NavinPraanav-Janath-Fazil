import React, { useRef } from "react";
import { useState, useEffect } from "react";
import styles from "./styles/SearchBar.module.css";

function SearchBar(props) {
  const searchQuery = useRef(null);
  const [pageValue, setPageValue] = useState(1);

  const funcNextPage = () => {
    setPageValue((prev) => prev + 1);
  };

  const funcPrevPage = () => {
    setPageValue((prev) => prev - 1);
    const value = searchQuery.current.value;

    props.getSearchValue(value, pageValue);
  };

  useEffect(() => {
    const value = searchQuery.current.value;
    props.getSearchValue(value, pageValue);
  }, [pageValue]);

  const clickHandler = () => {
    const value = searchQuery.current.value;
    props.getSearchValue(value, pageValue);
  };

  return (
    <>
      <div className={styles["search-div"]}>
        <div className={styles["search-title"]}>Search</div>
        <div className={styles["search-box"]}>
          <input
            ref={searchQuery}
            name="search-query"
            className={styles["search-text"]}
            type="text"
            placeholder="Search..."
          />
          <a onClick={clickHandler} className={styles["search-btn"]}>
            <i className="fas fa-search"> </i>
          </a>
        </div>
      </div>
      <div className={styles["button-div"]}>
        {pageValue > 1 && (
          <button className={styles["btns"]} onClick={funcPrevPage}>
            &lt;&lt; Previous
          </button>
        )}
        <div className={styles["curr-page"]}>
          Page: <b>{pageValue}</b>
        </div>
        <button className={styles["btns"]} onClick={funcNextPage}>
          Next &gt;&gt;
        </button>
      </div>
    </>
  );
}

export default SearchBar;
