export default function PageButton({ page }) {
  return (
    <button
      className="rounded border text-light-default py-[8px] px-[16px] disabled:border-0 mr-[12px] text-small"
      disabled={page === "..."}
    >
      {page}
    </button>
  );
}
