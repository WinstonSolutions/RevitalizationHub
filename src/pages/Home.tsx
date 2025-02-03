"use client";

import { useState } from "react";
import {
  HomeIcon,
  BuildingIcon,
  CheckCircleIcon,
  WrenchIcon,
  // PipeIcon,
  // CompassIcon,
  BoltIcon,
 
} from "lucide-react";

import Footer from "../components/Footer";
import Header from "../components/Header";
interface NavItem {
  label: string;
  href: string;
}



interface MapLegendItem {
  color: string;
  label: string;
  count: number;
}

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image:
      "https://ginocipriano.ca/wp-content/uploads/2020/09/DSC01429-scaled.jpg",
    title: "Heritage Building Restoration",
    description: "Complete interior renovation maintaining historical elements",
  },
  {
    id: 2,
    image:
      "https://assets-listings.rew.ca/listing/crea_ddf/27737525/02_202428050_1.jpg?auto=format&fit=fill&ixlib=react-9.7.0&w=560&dpr=2&q=50",
    title: "Adaptive Reuse Design",
    description: "Transforming historic structures for modern use",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1626222628055-fb92dd194160?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Respectful Interior Renovation",
    description:
      "Carefully updating a building's interior while honoring its history.",
  },
  {
    id: 4,
    image:
      "https://cdn.carrot.com/uploads/sites/58919/2021/05/sell-my-inherited-home-winnipeg-manitoba.jpg",
    title: "Historical Preservation",
    description: "Careful restoration of architectural details",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1558308508-4e7a8fdff9c0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Adaptive Reuse Design",
    description:
      "Designing the repurposing of an old building for a new function.",
  },
  {
    id: 6,
    image: "https://c6.staticflickr.com/9/8172/8018126125_e77f90e4d7_z.jpg",
    title: "Structural Integrity Repair",
    description: " Fixing or reinforcing a building's framework for safety.",
  },
];

// Partnership section to add in your home page
const partners = [
  {
    name: "Red River College",
    logo: "https://www.rrc.ca/marcom/wp-content/uploads/sites/1/sites/99/2022/08/RRC-Polytech-Stacked.png",
    description: "Leading technical and vocational education partner",
  },
  {
    name: "University of Manitoba",
    logo: "https://umanitoba.ca/sites/default/files/styles/3x2_900w/public/2020-01/university-of-manitoba-logo_1.jpg?itok=fLvu0539",
    description: "Premier research and educational institution",
  },
  {
    name: "Manitoba Institute of Trades and Technology",
    logo: "https://www.buildagrad.ca/content/v2/images/mitt/mitt_logo.PNG",
    description: "Specialized trades and technical training",
  },
  {
    name: "University of Winnipeg",
    logo: "https://www.uwinnipeg.ca/branding/images/logos/uw-logo-centre-stack-rgb-black.png",
    description: "Urban university with strong community focus",
  },
  {
    name: "Assiniboine Community College",
    logo: "https://www.sfu.ca/content/sfu/carnegie/about/institutions/assiniboine-community-college/jcr:content/main_content/image.img.640.medium.png/1550773386648.png",
    description: "Urban university with strong community focus",
  },
  {
    name: "  University College of the North",
    logo: "https://mediatile.com/wp-content/uploads/2022/02/university-college-of-the-north.png",
    description: "Urban university with strong community focus",
  },
  {
    name: " Technical Vocational High School",
    logo: "https://media.winnipegsd.ca/media/Default/pgg/430/Tec-Voc%20Promotional%20Banner.jpg",
    description: "Urban university with strong community focus",
  },
  {
    name: "  Robertson College",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Robertson-College_Logos_Primary_Vertical.png",
    description: "Urban university with strong community focus",
  },
];

// Add this interface with your other interfaces
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  projectType: string;
}

// Add this with your other data constants
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Anderson",
    role: "Property Owner",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    quote:
      "The student team exceeded our expectations. They transformed our historic building while maintaining its character. The supervision and quality of work were outstanding.",
    rating: 5,
    projectType: "Historic Building Renovation",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    quote:
      "Incredible value for money. The students brought fresh ideas and energy to the project. Our retail space was completely transformed within budget.",
    rating: 5,
    projectType: "Commercial Renovation",
  },
  {
    id: 3,
    name: "Busra G.",
    role: "Internship student",
    image: "images/trade-student.png",
    quote:
      "Working on actual renovation projects gave me invaluable hands-on experience under professional supervision.",
    rating: 5,
    projectType: "Mixed-Use Development",
  },
];



export default function Home() {
  // Remove unused state
  // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative min-h-screen pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1626222628055-fb92dd194160?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(22,59,141,0.9)] via-[rgba(22,59,141,0.7)] to-[rgba(22,59,141,0.5)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center min-h-[calc(100vh-5rem)]">
            <div className="max-w-2xl text-white">
              <h1 className="text-6xl font-bold mb-6">Vacant to Vibrant</h1>
              <p className="text-4xl mb-8">
                Connecting vacant property owners with post-secondary trades
                students for the purpose of revitalization projects.
              </p>
              <button
                onClick={() => (window.location.href = "/owners")}
                className="px-8 py-4 bg-white text-[rgb(22,59,141)] rounded-md hover:bg-gray-100 text-lg font-semibold transition-all duration-300"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Partnership Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[rgb(22,59,141)] mb-4">
              Our Educational Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with Manitoba's leading educational institutions to
              deliver excellence in trades education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Logo Container */}
                <div className="h-32 flex items-center justify-center mb-6 p-4">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Partner Info */}
                <div className="text-center">
                  {/* <h3 className="text-lg font-semibold text-[rgb(22,59,141)] mb-2">
                    {partner.name}
                  </h3> */}
                  {/* <p className="text-gray-600">{partner.description}</p> */}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-4">
              Interested in partnering with us?
            </p>
            <button className="px-8 py-4 bg-[rgb(22,59,141)] text-white rounded-md hover:bg-[rgb(32,69,151)] text-lg font-semibold transition-all duration-300">
              Become a Partner
            </button>
          </div>
        </div>
      </div>

      {/* Student Skills & Trust Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[rgb(22,59,141)] mb-4">
              Offering a Diverse Skill Set
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our students come from top-rated institutions with rigorous
              training programs. Every project is supervised by licensed
              professionals.
            </p>
          </div>

          {/* Participating Departments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Construction & Carpentry */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-12 w-12 bg-[rgb(22,59,141)] text-white rounded-full flex items-center justify-center mb-4">
                <WrenchIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Construction & Carpentry
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Structural renovations</li>
                <li>• Historic preservation</li>
                <li>• Interior finishing</li>
                <li>• Safety protocols</li>
              </ul>
            </div>

            {/* Electrical Systems */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-12 w-12 bg-[rgb(22,59,141)] text-white rounded-full flex items-center justify-center mb-4">
                <BoltIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Electrical Systems</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Wiring upgrades</li>
                <li>• Code compliance</li>
                <li>• Energy efficiency</li>
                <li>• Safety standards</li>
              </ul>
            </div>

            {/* Plumbing & HVAC */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-12 w-12 bg-[rgb(22,59,141)] text-white rounded-full flex items-center justify-center mb-4">
                {/* <PipeIcon className="h-6 w-6" /> */}
                <BoltIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Plumbing & HVAC</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• System modernization</li>
                <li>• Sustainable solutions</li>
                <li>• Building comfort</li>
                <li>• Water efficiency</li>
              </ul>
            </div>

            {/* Engineering & Design */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-12 w-12 bg-[rgb(22,59,141)] text-white rounded-full flex items-center justify-center mb-4">
                {/* <CompassIcon className="h-6 w-6" /> */}
                <BoltIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Engineering & Design</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Architecture</li>
                <li>• Urban planning</li>
                <li>• Engineering</li>
                <li>• Design</li>
              </ul>
            </div>
          </div>

          {/* Quality Assurance Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Content */}
              <div>
                <h3 className="text-2xl font-bold text-[rgb(22,59,141)] mb-4">
                  Quality Assurance & Supervision
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">
                        Professional Oversight:
                      </span>
                      <p className="text-gray-600">
                        Every project is supervised by licensed contractors and
                        instructors
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">
                        Institutional Backing:
                      </span>
                      <p className="text-gray-600">
                        Work is backed by reputable educational institutions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Safety Standards:</span>
                      <p className="text-gray-600">
                        Strict adherence to safety protocols and building codes
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Insurance Coverage:</span>
                      <p className="text-gray-600">
                        Full insurance coverage for all work performed
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Project Success Rate</h4>
                    <div className="text-3xl font-bold text-[rgb(22,59,141)]">
                      98%
                    </div>
                    <p className="text-sm text-gray-600">
                      Projects completed to code standards
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Value Increase</h4>
                    <div className="text-3xl font-bold text-[rgb(22,59,141)]">
                      35%
                    </div>
                    <p className="text-sm text-gray-600">
                      Average property improvement
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Image Slider */}
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 transition-opacity duration-500">
                  <img
                    src="https://www.rrc.ca/news/wp-content/uploads/sites/60/2022/06/30693150715_349fe28f64_k.jpg"
                    alt="Students working"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 transition-opacity duration-500">
                  <img
                    src="https://d4c5gb8slvq7w.cloudfront.net/eyJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjcwMCwiaGVpZ2h0IjozOTR9fSwiYnVja2V0IjoiZmluZWhvbWVidWlsZGluZy5zMy50YXVudG9uY2xvdWQuY29tIiwia2V5IjoiYXBwXC91cGxvYWRzXC8yMDIzXC8wNFwvMjAxNjQ4MjZcL01BSU4tQnVpbGRpbmctTWF0dGVycy0xNng5LTEtNzAweDM5NC5qcGcifQ=="
                    alt="Construction site"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Navigation dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <button className="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity"></button>
                  <button className="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[rgb(22,59,141)] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From application to renovation - our streamlined process ensures
              quality and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative p-6 bg-gray-50 rounded-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-[rgb(22,59,141)] text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div className="mt-6">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="h-8 w-8 text-[rgb(22,59,141)]" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(22,59,141)] text-center mb-4">
                  Property Owner Application
                </h3>
                <p className="text-gray-600 text-center">
                  Submit your property details and renovation requirements
                  through our online form
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Complete property information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Specify renovation needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Submit required documents</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 bg-gray-50 rounded-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-[rgb(22,59,141)] text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div className="mt-6">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingIcon className="h-8 w-8 text-[rgb(22,59,141)]" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(22,59,141)] text-center mb-4">
                  City Verification
                </h3>
                <p className="text-gray-600 text-center">
                  City of Winnipeg reviews and verifies the property and project
                  requirements
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Property assessment & deficiencies list</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Remediation plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Code compliance check</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Project feasibility review</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 bg-gray-50 rounded-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-[rgb(22,59,141)] text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div className="mt-6">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* <GraduationCapIcon className="h-8 w-8 text-[rgb(22,59,141)]" /> */}
                </div>
                <h3 className="text-xl font-bold text-[rgb(22,59,141)] text-center mb-4">
                  Student Assignment
                </h3>
                <p className="text-gray-600 text-center">
                  Educational institutions assign qualified students under
                  professional supervision
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Skill matching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Team formation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Professional oversight</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline Connector - Desktop Only */}
          <div className="hidden md:block relative mt-8">
            <div className="absolute top-0 left-1/6 right-1/6 h-1 bg-[rgb(22,59,141)]"></div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button
              onClick={() => (window.location.href = "/owners")}
              className="px-8 py-4 bg-[rgb(22,59,141)] text-white rounded-md hover:bg-[rgb(32,69,151)] text-lg font-semibold transition-all duration-300"
            >
              Start Your Application
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[rgb(22,59,141)] mb-4">
              Our Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successfully transformed properties,
              where student skills meet professional standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-[rgb(22,59,141)] text-white rounded-md hover:bg-[rgb(32,69,151)] text-lg font-semibold transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[rgb(22,59,141)] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from property owners who have experienced the value of our
              student-led renovation projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-lg p-8 relative"
              >
                {/* Quote mark decoration */}
                <div className="absolute top-4 right-4 text-6xl text-[rgb(22,59,141)] opacity-10">
                  "
                </div>

                {/* Profile */}
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                {/* Project Type */}
                <div className="mb-4">
                  <span className="bg-blue-100 text-[rgb(22,59,141)] text-sm px-3 py-1 rounded-full">
                    {testimonial.projectType}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-4">
              Ready to start your project?
            </p>
            <button className="px-8 py-4 bg-[rgb(22,59,141)] text-white rounded-md hover:bg-[rgb(32,69,151)] text-lg font-semibold transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
