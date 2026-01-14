import { Testimonial } from "../../types/testimonial";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";


interface Props {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
      {/* Avatar */}
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback>CH</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>

      {/* Message */}
      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        “{testimonial.message}”
      </p>

      {/* Rating */}
      <div className="mt-4">{"⭐".repeat(testimonial.rating)}</div>
    </div>
  );
};

export default TestimonialCard;
