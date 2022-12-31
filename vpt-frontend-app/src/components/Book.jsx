import React from "react";
import BookItem from "./BookItem";
import "./styles/book.css";
export default function Book() {
  return (
    <>
      <div id="large-th">
        <div className="container">
          <div className="choose">
            <a href="#list-th">
              <i className="fa fa-th-list" aria-hidden="true"></i>
            </a>
            <a href="#large-th">
              <i className="fa fa-th-large" aria-hidden="true"></i>
            </a>
          </div>
          <div id="list-th">
            <BookItem />
          </div>
        </div>
      </div>
    </>
  );
}
