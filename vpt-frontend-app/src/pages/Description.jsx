import React, { useEffect, useState } from "react";
import styles from "./Description.module.css";
import "./BookDesign.css";
import { useParams } from "react-router-dom";
import { functions } from "../../backend";
import defaultBook from "../assets/defaultbook.png";

function Description() {
  const [apiData, setApiData] = useState(null);
  const { bookId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await functions.dataBook("/works/".concat(bookId));
      setApiData(data);
    };
    fetchData();
  }, []);

  // bookId parameter will be received.
  return (
    <div className={styles["container"]}>
      {/* <div className={styles["left-container"]}>
        <img src="https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg" />
      </div> */}

      <div className={styles["left-container"]}>
        <figure className="book-desc">
          <ul className="hardcover_front" style={{ listStyleType: "none" }}>
            <li>
              <img
                src={apiData && (apiData.url === undefined ? defaultBook : apiData.url)}
                alt=""
                width="100%"
                height="100%"
              />
              <span className="ribbon bestseller">Nº1</span>
            </li>
            <li></li>
          </ul>
          <ul className="page" style={{ listStyleType: "none" }}>
            <li></li>
            <li>
              <a className="btn" href="#">
                PREVIEW
              </a>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="hardcover_back" style={{ listStyleType: "none" }}>
            <li></li>
            <li></li>
          </ul>
          <ul className="book_spine" style={{ listStyleType: "none" }}>
            <li></li>
            <li></li>
          </ul>
        </figure>
      </div>

      <div className={styles["right-container"]}>
        <header>
          <p className={styles["title-text"]}>{apiData && apiData.title}</p>
          <div className={styles["label-text"]}>
            <span className={styles["rating"]}>⭐⭐⭐⭐⭐</span>
            <span className={styles["author"]}>
              <i className="fa fa-pen"> </i>
              {apiData && apiData.authName}
            </span>
          </div>
        </header>
        <main>
          <p className={styles["description-text"]}>
            {apiData &&
              (apiData.desc === undefined
                ? `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            blanditiis odio minus ducimus ad reiciendis eveniet qui totam ea
            adipisci et sit fugit, mollitia ratione cumque quos illo rerum quo.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            qui nulla assumenda similique, provident culpa! Blanditiis rerum
            tempore labore ea consectetur corrupti culpa laudantium, natus odit,
            laborum, atque dolore explicabo! l i Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cumque eos, dolor quaerat culpa
            dolorem sapiente maiores rem eius non ipsam nostrum officiis optio
            minima impedit laborum beatae, cum totam incidunt! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Modi blanditiis odio minus
            ducimus ad reiciendis eveniet qui totam ea adipisci et sit fugit,
            mollitia ratione cumque quos illo rerum quo. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Quisquam qui nulla assumenda
            similique, provident culpa! Blanditiis rerum tempore labore ea
            consectetur corrupti culpa laudantium, natus odit, laborum, atque
            dolore explicabo! l i Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque eos, dolor quaerat culpa dolorem sapiente
            maiores rem eius non ipsam nostrum officiis optio minima impedit
            laborum beatae, cum totam incidunt! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Modi blanditiis odio minus ducimus ad
            reiciendis eveniet qui totam ea adipisci et sit fugit, mollitia
            ratione cumque quos illo rerum quo. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quisquam qui nulla assumenda
            similique, provident culpa! Blanditiis rerum tempore labore ea
            consectetur corrupti culpa laudantium, natus odit, laborum, atque
            dolore explicabo! l i Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque eos, dolor quaerat culpa dolorem sapiente
            maiores rem eius non ipsam nostrum officiis optio minima impedit
            laborum beatae, cum totam incidunt! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Modi blanditiis odio minus ducimus ad
            reiciendis eveniet qui totam ea adipisci et sit fugit, mollitia
            ratione cumque quos illo rerum quo. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quisquam qui nulla assumenda
            similique, provident culpa! Blanditiis rerum tempore labore ea
            consectetur corrupti culpa laudantium, natus odit, laborum, atque
            dolore explicabo! l i Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque eos, dolor quaerat culpa dolorem sapiente
            maiores rem eius non ipsam nostrum officiis optio minima impedit
            laborum beatae, cum totam incidunt!`
                : apiData.desc)}
          </p>
        </main>
      </div>
    </div>
  );
}

export default Description;
