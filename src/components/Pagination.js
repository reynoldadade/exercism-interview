import NextIcon from "../images/NextIcon.svg";
import PreviousIcon from "../images/PreviousIcon.svg";
import Paginator from "./PageNumbers";
export default function Pagination({ paginationData }) {
  return (
    <div className="w-full h-[71px]">
      <div className="flex justify-between items-center h-[71px]">
        <div className="ml-[32px]">
          <button className="h-[40px] w-[114px] border rounded flex justify-center items-center hover:bg-background text-light-secondary shadow">
            <img src={PreviousIcon} alt="previous" />
            <span className="ml-[10.37px] text-small">Previous</span>
          </button>
        </div>
        <div>
          {Object.keys(paginationData).length > 0 && (
            <Paginator paginationData={paginationData} />
          )}
        </div>
        <div className="mr-[32px]">
          <button className="w-[85px] h-[40px] border rounded flex justify-center items-center hover:bg-background text-light-secondary shadow">
            <span className="mr-[10.38px] text-small">Next</span>
            <img src={NextIcon} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
}
