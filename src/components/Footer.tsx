// src/components/Footer/index.tsx
import React, { useState } from "react";
import {
  HomeIcon,
  PhoneIcon,
  MailIcon,
  BuildingIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function Footer() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Property Renovation Interest",
    message: "",
  });

  const [emailSubscribe, setEmailSubscribe] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", emailSubscribe);
    setEmailSubscribe("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[rgb(22,59,141)] text-white">
      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-gray-300 mb-8">
              Ready to transform your property? Have questions about our
              program? We're here to help you get started.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(22,59,141)] p-3 rounded-lg">
                  <BuildingIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office Location</h3>
                  <p className="text-gray-300">123 Main Street</p>
                  <p className="text-gray-300">Winnipeg, MB R3C 1A3</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[rgb(22,59,141)] p-3 rounded-lg">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Contact Numbers</h3>
                  <p className="text-gray-300">Tel: (204) 555-0123</p>
                  <p className="text-gray-300">Fax: (204) 555-0124</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[rgb(22,59,141)] p-3 rounded-lg">
                  <MailIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Address</h3>
                  <p className="text-gray-300">info@winnipegtrades.ca</p>
                  <p className="text-gray-300">support@winnipegtrades.ca</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-sky-700 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white-700  text-gray-900 
                    placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white-700  text-gray-900 
                    placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white-700  text-gray-900 
                  placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white-700 text-gray-900 
                  placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                >
                  <option>Property Renovation Interest</option>
                  <option>Student Program Inquiry</option>
                  <option>Partnership Opportunity</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white-700  text-gray-900 
                  placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[rgb(22,59,141)] text-white rounded-md hover:bg-[rgb(32,69,151)] font-semibold transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <HomeIcon className="h-8 w-8 text-[rgb(22,59,141)] mr-2" />
                <img
                  src="https://www.winnipeg.ca/themes/custom/confluence/img/cw-v-white-rgb.svg"
                  alt="Home Icon"
                  className="h-20 w-20"
                />
                <span className="text-xl font-bold">Revitalization Hub</span>
              </div>
              <p className="text-white-400 mb-6">
                Connecting skilled students with vacant property owners to build
                a better future.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-sky-800 p-2 rounded-full hover:bg-[rgb(22,59,141)] transition-colors"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-sky-800 p-2 rounded-full hover:bg-[rgb(22,59,141)] transition-colors"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-sky-800 p-2 rounded-full hover:bg-[rgb(22,59,141)] transition-colors"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-sky-800 p-2 rounded-full hover:bg-[rgb(22,59,141)] transition-colors"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-400 hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-400 hover:text-white">
                    Student Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-400 hover:text-white">
                    Property Owners
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white-400 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-400 hover:text-white">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-why-400 mb-4">
                Subscribe to our newsletter for updates and news.
              </p>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={emailSubscribe}
                  onChange={(e) => setEmailSubscribe(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-sky-700 rounded-l-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none flex-1"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-sky-700 rounded-r-lg hover:bg-[rgb(32,69,151)] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Winnipeg Trades. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
