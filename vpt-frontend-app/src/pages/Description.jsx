import React from "react";
import styles from "./Description.module.css";
import "./BookDesign.css";

function Description() {
  // bookId parameter will be received.
  return (
    <div className={styles["container"]}>
      {/* <div className={styles["left-container"]}>
        <img src="https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg" />
      </div> */}

      <div className={styles["left-container"]}>
        <figure className="book-desc">
          <ul className="hardcover_front" style={{ "list-style-type": "none" }}>
            <li>
              <img
                src="https://s.cdpn.io/13060/book1.jpg"
                alt=""
                width="100%"
                height="100%"
              />
              <span className="ribbon bestseller">Nº1</span>
            </li>
            <li></li>
          </ul>
          <ul className="page" style={{ "list-style-type": "none" }}>
            <li></li>
            <li>
              <a className="btn" href="#">
                Download
              </a>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="hardcover_back" style={{ "list-style-type": "none" }}>
            <li></li>
            <li></li>
          </ul>
          <ul className="book_spine" style={{ "list-style-type": "none" }}>
            <li></li>
            <li></li>
          </ul>
        </figure>
      </div>

      <div className={styles["right-container"]}>
        <header>
          <p className={styles["title-text"]}>Book Title</p>
          <div className={styles["label-text"]}>
            <span className={styles["rating"]}>⭐⭐⭐⭐⭐</span>
            <span className={styles["author"]}>
              <i className="fa fa-pen"> </i> Marry Shelley
            </span>
          </div>
        </header>
        <main>
          <p className={styles["description-text"]}>
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
            laborum beatae, cum totam incidunt!
          </p>
        </main>
      </div>
    </div>
  );
}

export default Description;
