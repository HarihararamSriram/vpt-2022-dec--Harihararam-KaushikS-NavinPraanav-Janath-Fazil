import React from "react";
import "./styles/book.css";
export default function BookItem() {
  return (
    <>
      <div className="book read">
        <div className="cover">
          <img src="https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg" />
        </div>
        <div className="description">
          <p className="title">
            Frankenstein
            <br />
            <span className="author">Mary Shelley</span>
          </p>
        </div>
      </div>
    </>
  );
}
