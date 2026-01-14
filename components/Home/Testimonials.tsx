import testimonials from "../../public/testimonials.json";
import TestimonialCard from "../ui/TestimonialCard";
import Title from "../ui/Title";

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Title */}
     <Title title="What Our Customers Say" />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
