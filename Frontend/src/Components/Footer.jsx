import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cyan-900 text-white py-8 px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Company Info */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Pack N Port</h2>
        <p className="text-sm text-gray-300">
          Seamless packing and relocation services, ensuring your items are
          moved safely and efficiently.
        </p>
      </div>
      <div className="mt-4 sm:mt-8 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className=" space-y-2">
            {[
              "Home Relocation",
              "Office Shifting",
              "Vehicle Transport",
              "Storage Solutions",
              "Packing Supplies",
            ].map((service) => (
              <li key={service}>
                <a
                  // href={`/${service.toLowerCase().replace(/\s/g, "-")}`}
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className=" space-y-2">
            {["Home", "About Us", "Services", "Track Status"].map((service) => (
              <li key={service}>
                <a
                  // href={`/${service.toLowerCase().replace(/\s/g, "-")}`}
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="flex items-center space-x-2 text-gray-300 text-sm">
            <Phone size={16} />
            <span>+91 98765 43210</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-300 mt-2 text-sm">
            <Mail size={16} />
            <span>support@packnport.com</span>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 ">
            {[Facebook, Twitter, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 rounded-full bg-white text-cyan-900 hover:bg-gray-300 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-300 border-t border-gray-600 pt-4">
        &copy; {new Date().getFullYear()} Pack N Port. All rights reserved.
      </div>
    </footer>
  );
}
