import React, { useState, useEffect } from "react";
import "./styles/Book.css";
import ReactLogo from "../assets/bookmark.svg";
import ReactLogo2 from "../assets/bookmarkfill.svg";
import { functions } from "../../backend";
import defaultBook from "../assets/defaultbook.png";
import { useNavigate } from "react-router-dom";
const LARGE = 1;
const SMALL = 0;
export default function BookItem(props) {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await functions.dataBook(props.id);
      setApiData(data);
    };
    fetchData();
  }, []);

  const navigateHandler = () => {
    navigate(`/books/${props.id.split("/")[2]}`);
  };
  return (
    <>
      <div
        onClick={navigateHandler}
        className={"book read ".concat(
          props.viewMode === SMALL ? "smallTiles" : "largeTiles"
        )}
      >
        <div className="cover">
          <img src={apiData ? apiData.url : defaultBook} />
        </div>
        <div>
          <p className="title">{props.title} </p>
          {props.viewMode === LARGE && (
            <p className="author">
              <i className="fa fa-user"> </i> {props.author_name}
            </p>
          )}
        </div>
        <div className="bookmark">
          {props.viewMode === LARGE && <img src={ReactLogo2} height={40} />}
        </div>
      </div>
    </>
  );
}
