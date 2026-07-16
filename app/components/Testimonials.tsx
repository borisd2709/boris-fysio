"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    async function loadTestimonials() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/testimonials`
      );

      const data = await response.json();

      setTestimonials(data.slice(0, 3));
    }

    loadTestimonials();
  }, []);

  return (
    <section className="py-20 bg-[#F7F7F4]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-4">
          Ervaringen van patiënten
        </h2>

        <p className="text-gray-600 mb-10">
          Een greep uit de ervaringen van patiënten.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((testimonial, index) => (

            <article
              key={index}
              className="bg-white border rounded-xl p-6"
            >

              <div className="flex items-center gap-4 mb-4">

                <img
                  src={testimonial.profile_photo_url}
                  alt={testimonial.author_name}
                  className="w-12 h-12 rounded-full"
                />

                <div>

                  <p className="font-medium">
                    {testimonial.author_name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {testimonial.relative_time_description}
                  </p>

                </div>

              </div>

              <div className="mb-4 text-yellow-500">
                {"★".repeat(testimonial.rating)}
              </div>

              <p className="text-gray-700 leading-relaxed">
                {testimonial.text}
              </p>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}