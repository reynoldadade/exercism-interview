import NextCaret from "../images/next.svg";
import moment from "moment";
const TableRow = ({ testimonials }) => {
  return (
    <div className="w-full h-[640px] border-t">
      {testimonials.map((testimonial) => (
        <div
          className="flex justify-between items-center h-[64px] hover:bg-background border-b"
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
            <div className="text-left ">
              <div className="font-semibold text-light-default">
                {testimonial.mentor.handle}
              </div>
              <div>
                <span className="text-light-secondary text-[14px]">
                  on {testimonial.exercise.title} in {testimonial.track.title}
                </span>
              </div>
            </div>
          </div>
          <div className="w-[513px]  h-[26px] truncate">
            <span className="w-full text-light-default text-[15px]">
              {testimonial.content}
            </span>
          </div>
          <div className="flex-grow flex justify-end items-center">
            <div>
              <span className="text-light-secondary text-[14px]">
                {moment(testimonial.created_at, "YYYYMMDD").fromNow()}
              </span>
            </div>
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
