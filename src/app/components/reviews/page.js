import React, { useState } from "react";

const Reviews = () => {
  const [testimonialActive, setTestimonialActive] = useState(1);

  return (
    <div>
      <section className="bg-[#1a1a1f] relative overflow-hidden">
        <svg
          className="absolute blur-3xl opacity-70 -top-6 animate-pulse"
          width="100%"
          height="100%"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_17_56)">
            <g filter="url(#filter0_f_17_56)">
              <path d="M128.6 0H0V322.2L250.5 231.5L128.6 0Z" fill="white" />
              <path d="M0 322.2V400H240H320L250.5 231.5L0 322.2Z" fill="#7000FF" />
              <path d="M320 400H400V78.75L250.5 231.5L320 400Z" fill="#5200FF" />
              <path
                d="M400 0H128.6L250.5 231.5L400 78.75V0Z"
                fill="#380094"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_17_56"
              x="-160.333"
              y="-160.333"
              width="720.666"
              height="720.666"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="80.1666"
                result="effect1_foregroundBlur_17_56"
              />
            </filter>
          </defs>
        </svg>
        <div className="relative max-w-7xl 2xl:max-w-screen-2xl lg:px-16 md:px-12 mx-auto py-12 px-8 h-svh flex flex-col justify-center items-center">
          <div className="lg:border lg:p-20 lg:rounded-[4rem] lg:bg-[#1a1a1f]/50 border-white/5 lg:backdrop-blur-xl lg:shadow-2xl 2xl:p-32">
            <div
              className={`pb-6 text-gray-200 font-medium mx-auto text-xl h-64 italic serif text-balance items-center text-center lg:text-4xl ${
                testimonialActive === 1 ? "" : "hidden"
              }`}
            >
              <p>
                <span className="text-[#a180ea]">"</span> Pepe is like a unicorn
                in a field of horses, magically bridging the gap between design
                and coding. His designs sparkle brighter than a disco ball at a
                70s party, hitting that sweet spot between trendy and 'wow, did
                he really just pull that off?{" "}
                <span className="text-[#a180ea]">"</span>
              </p>
            </div>
            <div
              className={`pb-6 text-gray-200 font-medium mx-auto text-xl h-64 italic serif text-balance items-center text-center lg:text-4xl ${
                testimonialActive === 2 ? "" : "hidden"
              }`}
            >
              <p>
                <span className="text-[#a180ea]">"</span> Working with Pepe is
                like finding a needle in a haystack – except the needle comes to
                you, and it's golden. His design eye is sharper than my
                grandma's kitchen knives, and trust me, those can slice through
                anything. Can't wait to conjure up more projects with him, maybe
                something involving flying pigs next time?{" "}
                <span className="text-[#a180ea]">"</span>
              </p>
            </div>
            <div
              className={`pb-6 text-gray-200 font-medium mx-auto text-xl h-64 italic serif text-balance items-center text-center lg:text-4xl ${
                testimonialActive === 3 ? "" : "hidden"
              }`}
            >
              <p>
                <span className="text-[#a180ea]">"</span> Pepe is that rare
                blend of designer and developer who actually knows what
                'deadline' means – a mythical creature in our industry. He
                whipped up landing pages faster than I could say Banana, with a
                flair that made me wonder if he moonlights as a magician. If he
                asks for a rabbit, just give it to him, no questions asked.{" "}
                <span className="text-[#a180ea]">"</span>
              </p>
            </div>
            <div className="flex items-center justify-center mt-12">
              {[1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialActive(index)}
                  className="inline-block mx-2 font-bold text-center rounded-xl focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-offset-[#1a1a1f] w-12 h-12"
                >
                  <img
                    className="inline-block w-12 h-12 rounded-xl object-cover"
                    src={`https://via.placeholder.com/48?text=User+${index}`}
                    alt={`User ${index}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
