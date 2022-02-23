import NextCaret from "../images/next.svg";
const TableRow = ({ testimonials }) => {
  return (
    <div className="w-full h-[640px] border-t">
      {testimonials.map((testimonial) => (
        <div
          className="flex justify-between items-center h-[64px]"
          key={testimonials.id}
        >
          <div className="inline-flex w-1/3 items-center">
            <div className="mx-[25.67px]">
              <img
                src={testimonial.track.icon_url}
                alt="exercise url"
                className="h-[32px] w-[28.64px]"
              />
            </div>
            <div className="mr-[16px]">
              <img
                src={testimonial.mentor.avatar_url}
                alt="exercise url"
                className="h-[42px] w-[42px] rounded-full"
              />
            </div>
            <div className="text-left">
              <div>{testimonial.mentor.handle}</div>
              <div>
                <span>
                  on {testimonial.exercise.title} in {testimonial.track.title}
                </span>
              </div>
            </div>
          </div>
          <div className="w-[513px]  h-[26px] truncate">
            <span className="w-full">{testimonial.content}</span>
          </div>
          <div className="flex-grow flex justify-end items-center">
            <img
              src={NextCaret}
              alt="view details"
              className="mr-[29.09px] ml-[59.69px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableRow;
