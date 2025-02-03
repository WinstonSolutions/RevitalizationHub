// Projects.tsx

import React from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Building2,
  ExternalLink,
} from "lucide-react";
import Header from "../components/Header";

interface Project {
  id: string;
  name: string;
  address: string;
  currentStatus: string;
  completionDate: string;
  duration: string;
  description: string;
  image: string;
  skills: string[];
  impact: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "Exchange District Heritage Building",
    address: "123 McDermot Avenue, Winnipeg",
    currentStatus: "Art Gallery & Studio Space",
    completionDate: "December 2024",
    duration: "8 months",
    description:
      "Complete restoration of a 1900s heritage building, preserving original architectural features while modernizing internal systems.",
    image:
      "https://static.wixstatic.com/media/69fcb5_c9cea97edbd149bfac702464a21bd1b3~mv2_d_3748_2776_s_4_2.jpg/v1/crop/x_194,y_22,w_3209,h_2711/fill/w_276,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/300%20dpiMGR-par-Marcel-Druw%C3%A9-2_DPI_300_jp.jpg",
    skills: [
      "Heritage Restoration",
      "Electrical Upgrade",
      "HVAC Installation",
      "Structural Reinforcement",
    ],
    impact:
      "Transformed a vacant historic building into a vibrant cultural space, contributing to the Exchange District's artistic community.",
  },
  {
    id: "2",
    name: "North End Community Center",
    address: "456 Selkirk Avenue, Winnipeg",
    currentStatus: "Active Community Hub",
    completionDate: "September 2024",
    duration: "6 months",
    description:
      "Renovation and modernization of a community center, including accessibility upgrades and energy efficiency improvements.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/444897830.jpg?k=e9c7304a458a74785ec22e93dd5b8e401084b6cd62ed3bc1e481b9547b913e43&o=&hp=1",
    skills: [
      "Accessibility Design",
      "Energy Systems",
      "Interior Renovation",
      "Plumbing Upgrade",
    ],
    impact:
      "Revitalized a vacant historic building, creating a dynamic cultural hub that enhances the North End Community's artistic scene",
  },
  {
    id: "6",
    name: "Inkster Blvd Community Upgrade",
    address: "55 Pavilion Crescent, Winnipeg",
    currentStatus: "Museum",
    completionDate: "April 2024",
    duration: "10 months",
    description:
      "Creation of a vibrant Inkster Blvd Community with new paving, landscaping, and public art installations.",
    image:
      "https://images.remax.ca/rets-properties-winnipeg-can/d57191af89241deb0ab4f50c0c0d2fc01e41cc1f-1-large.jpeg?fit=bounds&auto=avif,webp&format=pjpg&quality=60&height=500",
    skills: [
      "Public Space Design",
      "Paving",
      "Landscaping",
      "Public Art Installation",
      "Glass Structure Repair",
    ],
    impact:
      "    Creating a lively and accessible public space that fosters community engagement in the Inkster Blvd Community.",
  },
  {
    id: "3",
    name: "River Heights Library Expansion",
    address: "789 Corydon Avenue, Winnipeg",
    currentStatus: "Under Construction",
    completionDate: "May 2025",
    duration: "12 months",
    description:
      "Expansion of the existing library to include a new community meeting space, children's area, and enhanced reading rooms.",
    image:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skills: [
      "Expansion Design",
      "Community Planning",
      "Interior Design",
      "Landscaping",
    ],
    impact:
      "Providing the community with expanded facilities for learning and social engagement.",
  },
  {
    id: "4",
    name: "Osborne Village Retail Facade Upgrade",
    address: "987 Osborne Street, Winnipeg",
    currentStatus: "Ongoing",
    completionDate: "October 2025",
    duration: "4 months",
    description:
      "Modernization of the storefront facades along Osborne Street to revitalize the commercial area with an enhanced streetscape.",
    image:
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=2778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skills: [
      "Commercial Facade Renovation",
      "Urban Design",
      "Storefront Design",
      "Lighting Installation",
    ],
    impact:
      "    Enhancing the appeal of a popular commercial street and actively promoting local businesses, thereby boosting the local economy.",
  },
  {
    id: "5",
    name: "Saint John's Park Conservatory Renovation",
    address: "81 St Cross St, Winnipeg",
    currentStatus: "Planning Phase",
    completionDate: "July 2026",
    duration: "18 months",
    description:
      "Extensive renovation of the historic conservatory to upgrade glass structures, climate control systems and internal exhibits.",
    image:
      "https://cdn.realtor.ca/listing/TS638571823877270000/reb7/highres/3/202417273_0.jpg",
    skills: [
      "Glass Structure Repair",
      "Climate Control Systems",
      "Botanical Exhibit Design",
      "Historic Preservation",
    ],
    impact:
      "Revitalizing a landmark conservatory, ensuring its longevity and relevance for future generations.",
  },
];

const Projects: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <Header />
      {/* Page Header */}
      <div className="bg-[rgb(22,59,141)] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Completed Projects</h1>
          <p className="text-xl max-w-3xl">
            Explore our portfolio of successful renovations and transformations,
            each representing a unique collaboration between skilled students
            and property owners.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <a
                  href={`/project/${project.id}`} // 添加<a>标签，并设置href属性
                  className="relative block h-64" // 将 h-64 设置在 a 标签上，确保点击区域正确
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-[rgb(22,59,141)]">
                  {project.name}
                </h2>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.address}</span>
                </div>

                <div className="space-y-4 mt-6">
                  {/* Status and Timeline */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-4 w-4 text-[rgb(22,59,141)]" />
                        <span className="font-semibold">Current Status</span>
                      </div>
                      <p className="text-gray-600">{project.currentStatus}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-[rgb(22,59,141)]" />
                        <span className="font-semibold">Project Duration</span>
                      </div>
                      <p className="text-gray-600">{project.duration}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600">{project.description}</p>

                  {/* Skills */}
                  <div>
                    <h3 className="font-semibold mb-2">Skills Demonstrated</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-[rgb(22,59,141)] text-white px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Community Impact</h3>
                    <p className="text-gray-600">{project.impact}</p>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-gray-100">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Completed: {project.completionDate}</span>
                  </div>
                  <button
                    className="flex items-center gap-2 text-[rgb(22,59,141)] hover:text-[rgb(22,59,141)]/80 font-semibold"
                    onClick={() =>
                      console.log(`View details for ${project.id}`)
                    }
                  >
                    View Details
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
