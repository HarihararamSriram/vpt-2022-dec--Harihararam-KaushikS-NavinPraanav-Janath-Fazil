import React, { useState } from "react";
import BookItem from "./BookItem";
import "./styles/book.css";
const LARGE = 1;
const SMALL = 0;
export default function Book() {
  const [viewMode, setViewMode] = useState(1);
  const smallClickHandler = () => {
    console.log("Hello");
    setViewMode(SMALL);
  };
  const largeClickHandler = () => {
    setViewMode(LARGE);
  };
  return (
    <>
      <div id="large-th">
        <div className="container">
          <div className="choose">
            <a onClick={smallClickHandler} /* href="#list-th" */>
              <i className="fa fa-th-list top-icons" aria-hidden="true"></i>
            </a>
            <a onClick={largeClickHandler} /* href="#large-th" */>
              <i className="fa fa-th-large top-icons" aria-hidden="true"></i>
            </a>
          </div>
          <div id="list-th">
            <BookItem viewMode={viewMode} />
            <BookItem viewMode={viewMode} />
            <BookItem viewMode={viewMode} />
            <BookItem viewMode={viewMode} />
          </div>
        </div>
      </div>
    </>
  );
}
