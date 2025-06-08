import { headings } from "../../styles/gradients";
import { useEffect } from "react";
import AOS from "aos";


const testimonials = [
  {
    name: "Coriss Ambady",
    role: "Financial Analyst",
    text: "Working with this team has been an absolute pleasure. They exceeded our expectations in every way."
  },
  {
    name: "Cory Zamora",
    role: "Marketing Specialist",
    text: "Their attention to detail and ability to adapt to our needs was phenomenal. Highly recommended!"
  },
  {
    name: "Nikolas Brooten",
    role: "Sales Manager",
    text: "Professional, punctual, and skilled – they delivered an amazing software solution tailored to our goals."
  },
  {
    name: "Laura Widerski",
    role: "Sales Specialist",
    text: "From day one, their communication and project handling stood out. We saw immediate improvements in our workflow."
  },
  {
    name: "Jackie Sanders",
    role: "Investment Planner",
    text: "Efficient and knowledgeable. Their team guided us through technical decisions that impacted us positively."
  },
  {
    name: "Anita Lee",
    role: "Product Owner",
    text: "We hired them for a critical mobile app, and they delivered on time with great UX. Truly dependable!"
  },
];

const randomHeights = [250, 380, 320, 280, 360, 300];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#f4f7fc] to-white py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-base font-semibold tracking-wide text-gray-500 uppercase">
            Happy Customers
          </p>
          <h2 className={`text-3xl md:text-4xl font-bold ${headings}`}>
            What Our Amazing Clients <br />
            Say About Us
          </h2>
        </div>

        {/* Responsive Masonry Layout with AOS */}
        <div className="gap-6 space-y-6 columns-1 sm:columns-2 lg:columns-3">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="flex flex-col justify-between p-6 bg-white shadow-md break-inside-avoid rounded-xl"
              style={{ height: randomHeights[idx] }}
            >
              <div>
                <div className="mb-2 text-2xl text-yellow-400 select-none">★★★★★</div>
                <p className="mb-6 text-base leading-relaxed text-gray-600">“{item.text}”</p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="text-5xl leading-none text-yellow-400 select-none">“</div>
                <div>
                  <h4 className="text-base font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
 
    </section>
  );
};

export default Testimonials;
