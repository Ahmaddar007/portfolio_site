import { Button } from '@nextui-org/react';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import CirlceImage from '../../../../public/images/Circles.png'


const ContactForm = () => {
  return (
    <div className="grid grid-cols-2 gap-8 px-[5%] py-44 bg-slate-50">
      {/* Left Section */}
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to Essentials, the World's Most Powerful SaaS Solution
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Essentials is designed with your customers in mind, so you can track and analyze all your data in one central location. There are no limits to how you can look at your data.
        </p>
        <ul className="space-y-4">
          {[
            "Tendis tempor ante acu ipsum finibus.",
            "Pellentesque habitant morbi tristique.",
            "Cras facilisis tortor in metus ultrices.",
            "Maecenas volutpat leo in metus pulvinar.",
          ].map((text, index) => (
            <li key={index} className="flex items-start gap-3">
              <CircleCheck className="text-green-600 rounded-full mt-1" />
              <p className="text-gray-700">{text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="relative px-[18%]">

          <Image className='animate__animated animate__fadeInUp absolute -top-28 right-20 z-0 w-3/4' src={CirlceImage} />

        {/* Form */}
        <div className='shadow px-6 py-12 relative z-10 bg-white rounded-lg'>

            <h2 className="text-center text-2xl mb-8 font-semibold text-gray-800">Get in Touch</h2>

            <form className="space-y-4">
            <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Phone"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Address"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
                className="w-full bg-blue-500 font-semibold text-md text-white py-3 rounded hover:bg-blue-600 transition duration-200"
            >
                Submit
            </Button>
            </form>

        </div>


      </div>
    </div>
  );
};

export default ContactForm;
