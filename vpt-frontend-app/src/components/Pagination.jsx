import React, { useRef } from "react";
import { useState } from "react";

function Pagination(props) {
  let PageValue = useState(1);
  const funcNextPage = () => {
    pageValue = pageValyue + 1;
    props.getPageValue(pageValue);
  };
  return (
    <div>
      <button onclick={funcNextPage}>Previous</button>
      <button>Next</button>
    </div>
  );
}

export default Pagination;
