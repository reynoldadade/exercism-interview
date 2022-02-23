import SearchInput from "./SearchInput";
import TrackSelect from "./TrackSelect";
const Table = ({ tracks }) => {
  return (
    <div className="mx-12 mt-12 mb-[42px] border-2 h-[791px] rounded-[8px]">
      <div className="h-20 flex justify-between items-center">
        <div className="flex">
          {tracks.tracks ? <TrackSelect tracks={tracks} /> : null}
          <SearchInput />
        </div>
        <div>right</div>
      </div>
    </div>
  );
};

export default Table;
