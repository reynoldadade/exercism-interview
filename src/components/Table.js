import SearchInput from "./SearchInput";
const Table = () => {
  return (
    <div className="mx-12 mt-12 mb-[42px] border-2 h-[791px] rounded-[8px]">
      <div className="h-20 flex justify-between items-center">
        <SearchInput />
        <div>right</div>
      </div>
    </div>
  );
};

export default Table;
