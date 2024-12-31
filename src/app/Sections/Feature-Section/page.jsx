import { ShieldCheckIcon } from 'lucide-react';
import React from 'react';
import { FaTools, FaLeaf, FaRocket } from 'react-icons/fa'; // Example icons

const Features = () => {
  return (
    <div className="w-full relative bottom-28 px-6 md:px-[10%] py-12">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-lg shadow-xl">
        {/* Feature 1 */}
        <div className="flex items-center p-6 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-500 text-white rounded-full mr-6">
            <ShieldCheckIcon className="text-2xl" />
          </div>
          <div>
            <h3 className="text-gray-800 text-lg font-semibold">Moeny Back Quarenttee</h3>
            <p className="text-gray-600 text-sm">Enhance productivity with our state-of-the-art tools designed for efficiency.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center p-6 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="w-14 h-14 flex items-center justify-center bg-green-500 text-white rounded-full mr-6">
            <FaLeaf className="text-2xl" />
          </div>
          <div>
            <h3 className="text-gray-800 text-lg font-semibold">Ecellence Quality</h3>
            <p className="text-gray-600 text-sm">Sustainability is at the core of our solutions, benefiting the planet.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center p-6">
          <div className="w-14 h-14 flex items-center justify-center bg-red-500 text-white rounded-full mr-6">
            <FaRocket className="text-2xl" />
          </div>
          <div>
            <h3 className="text-gray-800 text-lg font-semibold">Active Service</h3>
            <p className="text-gray-600 text-sm">Experience lightning-fast speed with our optimized systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
