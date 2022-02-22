import Search from "../images/search.svg";
const SearchInput = ({ onChange, value }) => {
  return (
    <div className="flex ml-[24.41px] ">
      <div className="w-[61px]  relative h-[48px] border-y-2 border-l-2 rounded-l-[5px]">
        <img
          src={Search}
          alt="search"
          className="absolute top-[12.82px] left-[21.82px] bottom-[14.05px]"
        />
      </div>
      <input
        className="px-[21px] py-[12px] rounded-r-[5px] border-t-2 border-r-2 border-b-2 w-[355px] h-[48px] bg-background focus:bg-white"
        placeholder="Filter by exercise title"
      />
    </div>
  );
};

export default SearchInput;
