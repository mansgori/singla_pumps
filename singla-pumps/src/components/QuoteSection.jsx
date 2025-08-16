export default function QuoteSection() {
  return (
    <section className="bg-gray-50 text-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-12 gap-12">
        
        {/* Left Text */}
        <div className="relative">
          {/* Label */}
          <div className="bg-Redlogo text-white text-xs px-3 py-1 inline-block font-semibold tracking-widest mb-4">
            SAFE ENVIRONMENT
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug mb-6 text-black">
            Motors  <span className="text-Redlogo">and </span> pumps
          </h1>

          {/* Description */}
          <p className="text-black/90 mb-8 ">
            In the year 1993, Singla Motors Pvt. Ltd. is formed with the single objective to provide best quality range of Domestic Water Pumps, Centrifugal Monoblock Pumps, Pumps to agricultural, industrial and domestic sectors. Certified with ISO 9001:2008, CE, Star Rating and ISI, our company is strictly committed towards international quality standards that are maintained in our product line...
          </p>

          {/* Icons */}
          <div className="flex space-x-8 mt-6">
            <div className="flex flex-col items-center">
              <img src="/icon-electric.svg" alt="Electric" className="w-12 h-12 mb-2" />
            </div>
            <div className="flex flex-col items-center">
              <img src="/icon-solar.svg" alt="Solar" className="w-12 h-12 mb-2" />
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white text-gray-900 p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Request A Quote</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="border border-gray-300 px-4 py-2 w-full outline-none" />
              <input type="text" placeholder="Your phone" className="border border-gray-300 px-4 py-2 w-full outline-none" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="email" placeholder="Your email" className="border border-gray-300 px-4 py-2 w-full outline-none" />
              <input type="text" placeholder="Your address" className="border border-gray-300 px-4 py-2 w-full outline-none" />
            </div>
            <select className="border border-gray-300 px-4 py-2 w-full outline-none">
              <option>Who will install system?</option>
            </select>
            <select className="border border-gray-300 px-4 py-2 w-full outline-none">
              <option>Project completed by?</option>
            </select>
            <select className="border border-gray-300 px-4 py-2 w-full outline-none">
              <option>Monthly electric usage in kWh?</option>
            </select>
            <select className="border border-gray-300 px-4 py-2 w-full outline-none">
              <option>Solar system type?</option>
            </select>
            <select className="border border-gray-300 px-4 py-2 w-full outline-none">
              <option>Solar panels place?</option>
            </select>

            <button
              type="submit"
              className="bg-Redlogo hover:bg-red-700 text-white font-semibold px-6 py-3 w-full"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
