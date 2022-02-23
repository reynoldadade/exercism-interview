import SearchInput from "./SearchInput";
import TrackSelect from "./TrackSelect";
import SortSelector from "./SortSelector";
const Table = ({ tracks }) => {
  return (
    <div className="mx-12 mt-12 mb-[42px] border-2 h-[791px] rounded-[8px]">
      <div className="h-20 flex justify-between items-center">
        <div className="flex">
          {tracks.tracks ? <TrackSelect tracks={tracks} /> : null}
          <SearchInput />
        </div>

        <SortSelector />
      </div>
    </div>
  );
};

export default Table;
