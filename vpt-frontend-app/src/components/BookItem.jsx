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
            <br />
            <span className="desc">desciption</span>
          </p>
        </div>
        <div className="bookmark">
          {/* <svg
            style={"color: blue; --darkreader-inline-color:#337dff;"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-darkreader-inline-color=""
          >
            <path
              d="M18,2H6A1,1,0,0,0,5,3V21a1,1,0,0,0,1.65.76L12,17.27l5.29,4.44A1,1,0,0,0,18,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,19,21V3A1,1,0,0,0,18,2ZM17,18.86,12.64,15.2a1,1,0,0,0-1.28,0L7,18.86V4H17Z"
              fill="blue"
            ></path>
          </svg> */}
        </div>
      </div>
    </>
  );
}
