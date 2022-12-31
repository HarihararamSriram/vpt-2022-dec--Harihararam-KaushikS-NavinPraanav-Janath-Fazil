import React from "react";
import "./styles/Book.css";
import ReactLogo from "../assets/bookmark.svg";
const LARGE = 1;
const SMALL = 0;
export default function BookItem(props) {
  console.log(props);
  return (
    <>
      <div
        className={"book read ".concat(
          props.viewMode === SMALL ? "smallTiles" : "largeTiles"
        )}
      >
        <div className="cover">
          <img src="https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg" />
        </div>
        <div>
          <p className="title">Frankenstein</p>
          {props.viewMode === LARGE && (
            <p className="author">
              <i className="fa fa-user"> </i> Mary Shelley
            </p>
          )}
          {props.viewMode === SMALL && (
            <p className="description>"> description </p>
          )}
        </div>
        <div className="bookmark">
          {props.viewMode === LARGE && <img src={ReactLogo} height={40} />}
        </div>
      </div>
    </>
  );
}
