import Search from "../images/search.svg";
const SearchInput = ({ onChange, value }) => {
  return (
    <div className="flex ml-[24.41px] relative h-[48px]  rounded-l-[5px]">
      <img
        src={Search}
        alt="search"
        className="absolute top-[12.82px] left-[21.82px] bottom-[14.05px]"
      />

      <input
        className="pl-[61px] pr-[21px] py-[12px] rounded-[5px] border  w-[355px] h-[48px] bg-background focus:bg-white focus:shadow-lg focus:border-input-border focus:outline-none focus:shadow-input-border/50 text-light-secondary"
        placeholder="Filter by exercise title"
      />
    </div>
  );
};

export default SearchInput;
