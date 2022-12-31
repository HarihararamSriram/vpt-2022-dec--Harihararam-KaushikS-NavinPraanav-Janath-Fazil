import React from "react";
import styles from "./styles/SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles["search-div"]}>
      <div className={styles["search-title"]}>Search</div>
      <div className={styles["search-box"]}>
        <input
          className={styles["search-text"]}
          type="text"
          placeholder="Search..."
        />
        <a href="#" className ={styles["search-btn"]}>
          <i className="fas fa-search"> </i>
        </a>
      </div>
    </div>
  );
}

export default SearchBar;
