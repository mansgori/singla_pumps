import { FaPhoneAlt, FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Footer() {
  AOS.init();
  return (
    <footer className="bg-gray-900 text-gray-300 py-12"  >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        
        {/* Logo & About */}
        <div >
          <div className="flex items-center mb-4">
            <img src="http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/SINGLA-LOGO.png" alt="Singla" className="w-40 h-25 mr-2" />
            {/* <div>
              <h1 className="text-xl font-bold text-white">Singla</h1>
              <p className="text-sm text-gray-400">Motors And Pumps</p>
            </div> */}
          </div>
          <p className="text-sm mb-6">
            In the year 1993, Singla Motors Pvt. Ltd. is formed with the single objective to provide best quality range of Domestic Water Pumps, Centrifugal Monoblock Pumps, Pumps to agricultural, industrial and domestic sectors. Certified with ISO 9001:2008, CE, Star Rating and ISI, our company is strictly committed towards international quality standards that are maintained in our product line...
          </p>
          <div className="flex items-center text-white font-semibold">
            <FaPhoneAlt className="mr-2" />
            +91 8045478917
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-white font-bold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Articles</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>

        {/* Information Links */}
        <div>
          <h2 className="text-white font-bold mb-4">Information</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-bold mb-4">Newsletter</h2>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Your email ..."
              className="flex-1 px-4 py-2 bg-transparent border border-gray-500 text-sm outline-none"
            />
            <button className="bg-Redlogo px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </button>
          </div>

          <p className="font-semibold mb-2">Follow us:</p>
          <div className="flex space-x-4">
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-800 pt-4">
        <span className="text-white">Like-themes</span> © All Rights Reserved - 2022 -{" "}
        <a href="#" className="text-white">Purchase</a>
      </div>
    </footer>
  );
}
