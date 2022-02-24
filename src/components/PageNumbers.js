import { useEffect, useState } from "react";
import PageButton from "./PageButton";

export default function Paginator({ paginationData }) {
  const [currentPages, setCurrentPages] = useState([]);
  useEffect(() => {
    setCurrentPages(
      computePages(paginationData.current_page, paginationData.total_pages)
    );
  }, [paginationData.current_page, paginationData.total_pages]);

  function computePages(current_page, total_pages) {
    let pages = [];
    let start = current_page - 2;
    let end = current_page + 2;

    if (total_pages < 6) {
      start = 1;
      end = total_pages;
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    }

    if (start < 3) {
      start = 1;
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      pages.push("...", total_pages);
      return pages;
    }

    if (end > total_pages - 2) {
      end = total_pages;
      pages.push(1, "...");
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1, "...");
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    pages.push("...", total_pages);

    return pages;
  }

  return (
    <div className="flex">
      {currentPages.map((page, index) => {
        return <PageButton page={page} key={page + index} />;
      })}
    </div>
  );
}
