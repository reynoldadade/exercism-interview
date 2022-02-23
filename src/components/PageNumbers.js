import { useEffect, useState } from "react";

export default function Paginator({
  currentPage,
  total_pages,
  total_count,
  onPageChange,
}) {
  const [pageData, setPageData] = useState({});
  useEffect(() => {
    setPageData(computePages(currentPage, total_pages));
  }, [currentPage, total_pages]);

  function computePages(currentPage, total_pages) {
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
  }

  return (
    <div className="flex">
      {pageData.map((page) => {
        return (
          <div className="rounded border text-light-default py-[8px] px-[16px]">
            {page}
          </div>
        );
      })}
    </div>
  );
}
