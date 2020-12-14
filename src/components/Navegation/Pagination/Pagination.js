import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classes from "./Pagination.module.css";
const Pagination = ({ next, prev, currentPage, lastPage }) => {
  return (
    <div className={classes.PageIcons}>
      {" "}
      <button onClick={prev} disabled={currentPage === 1}>
        <IoIosArrowBack className={classes.PageIcon} />{" "}
      </button>
      <button disabled={currentPage === lastPage} onClick={next}>
        <IoIosArrowForward className={classes.PageIcon} />{" "}
      </button>
    </div>
  );
};

export default Pagination;
