import { Star } from 'lucide-react';
import type { Testimonial } from '../../types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex-none w-[400px] bg-white rounded-xl shadow-sm p-6 mx-2 transition-all hover:shadow-md">
      <div className="flex items-start space-x-4 mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          <div className="flex items-center mt-1">
            <p className="text-sm text-primary">{testimonial.company}</p>
            <span className="mx-2 text-gray-300">•</span>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        </div>
      </div>

      {testimonial.rating && (
        <div className="flex mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-[#FFD700] fill-current"
            />
          ))}
        </div>
      )}

      <blockquote className="text-gray-600 leading-relaxed">
        "{testimonial.quote}"
      </blockquote>
    </div>
  );
}