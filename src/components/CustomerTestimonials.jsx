import { Star } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'Fantastic service and high-quality products. Highly recommend!',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    feedback: 'Fast delivery and great customer support. Will shop again!',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 4,
  },
  {
    name: 'Michael Johnson',
    feedback: 'Loved the shopping experience and the discounts available.',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    feedback: 'Exceptional quality and timely delivery. Very impressed!',
    avatar: 'https://i.pravatar.cc/150?img=4',
    rating: 5,
  },
  {
    name: 'Erich Riche',
    feedback: 'Exceptional quality and timely delivery. Very impressed!',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 1) {
    groupedTestimonials.push(testimonials.slice(i, i + 1));
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <Slider {...settings}>
        {groupedTestimonials.map((group, index) => (
          <div
            key={index}
            className="grid grid-cols-1"
          >
            {group.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow p-10 text-center my-6 mx-6"
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-700 mb-2">{testimonial.feedback}</p>
                <div className="flex justify-center mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
}