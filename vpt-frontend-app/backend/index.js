import axios from "axios";
// parse string to url
const parseInput = function (input) {
  let parseOutput = input
    .split(" ")
    .map((element) => {
      return element.trim();
    })
    .join("+");
  return parseOutput;
};

// to get image from book id
const parseCoverImageUrl = function (res) {
  try {
    let url =
      "https://covers.openlibrary.org/b/id/" + res.data.covers[0] + "-M.jpg";
    return url;
  } catch {
    let url = "";
    return url;
  }
};

//creating axios base url
const api = axios.create({
  baseURL: "http://openlibrary.org/search.json?q=",
  withCredentials: false,
});

const apiAuthors = axios.create({
  baseURL: "http://openlibrary.org/search/authors.json?q=",
  withCredentials: false,
});

const book = axios.create({
  baseURL: "http://openlibrary.org/",
});

// searching by query
const searchBook = async (query, page) => {
  let limit_q = 12; //no of items to retive in a query
  let page_q = page; //page no
  let str = query; //book name or author name just a query
  let totData = [];

  let data = await api
    .get(str, {
      params: {
        limit: limit_q,
        page: page_q,
        fields:
          "title,key,author_name,edition,first_publish_year,edition_count,contributor,ebook_access,author_alternative_name,subject",
        spellcheck_count: true,
      },
    })
    .then((response) => {
      let numFound_curr;
      let data_saved = response;
      // limit no of items to iterate
      if (response.data.numFound > limit_q) {
        numFound_curr = limit_q;
      } else {
        numFound_curr = response.data.numFound;
      }
      for (let i = 0; i < numFound_curr; i++) {
        try {
          totData.push(data_saved.data.docs[i]);
        } catch {
          console.log("Error retiving key data from query");
        }
      }
    });

  return totData;
};

// searching by author
const searchAuthor = async (str) => {
  let limit_q = 12; //no of items to retive in a query
  let page_q = 1; //page no

  let data = await apiAuthors.get(str).then((response) => {
    let numFound_curr;
    let data_saved = response;
    // limit no of items to iterate
    if (response.data.numFound > limit_q) {
      numFound_curr = limit_q;
    } else {
      numFound_curr = response.data.numFound;
    }
    for (let i = 0; i < numFound_curr; i++) {
      try {
        let x = "works/" + data_saved.data.docs[i].key; //for data from each book image and description
        dataBook(x);
      } catch {
        console.log("Error retiving book data from author");
      }
    }
  });
};

const dataBook = async (str) => {
  let data = await book.get(str + ".json").then((response) => {
    let url = parseCoverImageUrl(response);

    const data = response.data;
    return { ...data, url, desc: response.data.description };
  });
  let author = await axios.get(
    "http://openlibrary.org".concat(data.authors[0].author.key).concat(".json")
  );
  return { ...data, authName: author.data.name };
};

export const functions = { dataBook, searchBook };
