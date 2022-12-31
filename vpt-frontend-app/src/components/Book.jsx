import React, { useState } from "react";
import BookItem from "./BookItem";
import "./styles/Book.css";
const LARGE = 1;
const SMALL = 0;
export default function Book(props) {
  const [viewMode, setViewMode] = useState(1);
  const smallClickHandler = () => {
    console.log("Hello");
    setViewMode(SMALL);
  };
  const largeClickHandler = () => {
    setViewMode(LARGE);
  };
  console.log(props.data);
  return (
    <>
      <div id="large-th">
        <div className="container">
          {props.data && (
            <>
              <div className="choose">
                <a onClick={smallClickHandler}>
                  <i className="fa fa-th-list top-icons" aria-hidden="true"></i>
                </a>
                <a onClick={largeClickHandler}>
                  <i
                    className="fa fa-th-large top-icons"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
              <div id="list-th">
                {props.data.map((value) => (
                  <BookItem {...value} id={value.key} viewMode={viewMode} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
