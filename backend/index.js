
const getBtn = document.getElementById('get-btn');
const get_btn_auth = document.getElementById('get_btn_auth');



// parse string to url
const parseInput = function (input) {
    let parseOutput = input.split(" ").map(element => {
        return element.trim();
    }).join("+");
    return parseOutput;

}

// to get image from book id
const parseCoverImageUrl = function (res) {

    try {
        let url = "https://covers.openlibrary.org/b/id/" + res.data.covers[0] + "-M.jpg";
        return url;

    }
    catch {
        let url = ""
        return url;
    }
}


//creating axios base url
const api = axios.create({
    baseURL: "http://openlibrary.org/search.json?q=",
    withCredentials: false,
});

const apiAuthors = axios.create({
    baseURL: "http://openlibrary.org/search/authors.json?q=",
    withCredentials: false,
})

const book = axios.create({
    baseURL: "http://openlibrary.org/"
})



// searching by query
const searchBook = async () => {
    let limit_q = 10;  //no of items to retive in a query
    let page_q = 1;   //page no 
    let str = "Lord of rings";  //book name or author name just a query


    let data = await api.get(str, {
        params:
        {
            limit: limit_q,
            page: page_q,
            fields: "title,key,author_name,edition,first_publish_year,edition_count,contributor,ebook_access,author_alternative_name,subject",
            spellcheck_count: true,
        }
    })
        .then(response => {
            let numFound_curr;
            data_saved = response;
            // limit no of items to iterate
            if (response.data.numFound > limit_q) {
                numFound_curr = limit_q;
            }
            else {
                numFound_curr = response.data.numFound;
            }
            for (let i = 0; i < numFound_curr; i++) {

                try {
                    data_book(data_saved.data.docs[i].key);
                }
                catch {
                    console.log("Error retiving key data from query");
                }
            }
            document.getElementById("output").innerHTML = data_saved;
        });
};


// searching by author
const searchAuthor = async () => {

    // let limit_q = parseInt(document.getElementById("limit").value);
    // let page_q = parseInt(document.getElementById("pageno").value);
    // let str = parseInput(document.getElementById("query").value);



    let limit_q = 10;  //no of items to retive in a query
    let page_q = 1;   //page no 
    let str = "Lord of rings";  //book name or author name just a query

    let data = await apiAuthors.get(str)
        .then(response => {
            let numFound_curr;
            data_saved = response;
            // limit no of items to iterate
            if (response.data.numFound > limit_q) {
                numFound_curr = limit_q;
            }
            else {
                numFound_curr = response.data.numFound;
            }
            for (let i = 0; i < numFound_curr; i++) {
                try {
                    let x = "works/" + data_saved.data.docs[i].key  //for data from each book image and description
                    data_book(x);
                }
                catch {
                    console.log("Error retiving book data from author");
                }
            }
        })
}


// get data for a particular book
data_book = async (str) => {


    // console.log(str)
    let data = await book.get(str + '.json')
        .then(response => {
            let url = parseCoverImageUrl(response);
            document.getElementById("cover").src = url;
            console.log(response.data.description) //description of a book
            console.log(url);  //url
            ;
        })

}

getBtn.addEventListener('click', searchBook);
get_btn_auth.addEventListener('click', searchAuthor);

