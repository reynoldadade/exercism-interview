import { useEffect, useState } from "react";
import PageButton from "./PageButton";

export default function Paginator({ paginationData }) {
  const [currentPages, setCurrentPages] = useState([]);
  useEffect(() => {
    setCurrentPages(
      // computePages(paginationData.current_page, paginationData.total_pages)
      computePages(5, 300)
    );
  }, [paginationData.current_page, paginationData.total_pages]);
  // console.log("current pages", currentPages);
  // console.log

  function computePages(currentPage, total_pages) {
    console.log(currentPage, total_pages);
    let pages = [];
    let start = currentPage - 2;
    let end = currentPage + 2;
    if (start < 1) {
      start = 1;
      end = 5;
    }
    if (end > total_pages) {
      end = total_pages;
      start = total_pages - 4;
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  return (
    <div className="flex">
      {currentPages.map((page) => {
        return <PageButton page={page} />;
      })}
    </div>
  );
}
