import TableRow from "./TableContentRow";

export default function TableContent({ testimonials }) {
  return (
    <div className="h-[640px] w-full overflow-y-auto">
      {testimonials.length > 0 && <TableRow testimonials={testimonials} />}
    </div>
  );
}
