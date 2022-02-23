import SearchInput from "./SearchInput";
import TrackSelect from "./TrackSelect";
import SortSelector from "./SortSelector";
import TableContent from "./TableContent";
import { useEffect, useState } from "react";
import services from "../services";
import Pagination from "./Pagination";
const Table = ({ tracks }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [pagination, setPagination] = useState({});
  useEffect(() => {
    getTestimonials();
  }, []);

  function getTestimonials(params = {}) {
    services.getTestimonials(params).then((response) => {
      setTestimonials(response.testimonials.results);
      setPagination(response.testimonials.pagination);
    });
  }
  return (
    <div className="mx-12 mt-12 mb-[42px] border-2 h-[791px] rounded-[8px] bg-white shadow-lg">
      <div className="h-20 flex justify-between items-center">
        <div className="flex">
          {tracks.tracks ? <TrackSelect tracks={tracks} /> : null}
          <SearchInput />
        </div>

        <SortSelector />
      </div>
      <TableContent testimonials={testimonials} pageData={pagination} />
      <Pagination pageData={pagination} />
    </div>
  );
};

export default Table;
