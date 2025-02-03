import React from "react";
import { useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Exchange District Heritage Building",
    images: [
      "https://www.crhp-rclp.ca/UploadedImages/57586.jpg",
      "https://heritagewinnipeg.com/wp-content/uploads/2021/10/DSC04091-scaled.jpg",
      "https://www.mhs.mb.ca/docs/sites/images/daylitebuilding1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPYZbS5pGhugUq1m87EXOvEsAz9KfjCjTLCAdl_iTaWnGHaui81HNUmeGf375EkyHCHc&usqp=CAU",
    ],
    description: "This is the detailed description of project 1.",
  },
  {
    id: 2,
    name: "Project 2",
    images: [
      "https://via.placeholder.com/600x400?text=Project+2-1",
      "https://via.placeholder.com/600x400?text=Project+2-2",
    ],
    description: "This is the detailed description of project 2.",
  },
  {
    id: 3,
    name: "Project 3",
    images: [
      "https://via.placeholder.com/600x400?text=Project+3-1",
      "https://via.placeholder.com/600x400?text=Project+3-2",
      "https://via.placeholder.com/600x400?text=Project+3-3",
      "https://via.placeholder.com/600x400?text=Project+3-4",
    ],
    description: "This is the detailed description of project 3.",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id);

  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <p className="text-2xl text-gray-700">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
          {project.name}
        </h2>
        <div className="flex flex-wrap gap-8 mb-10 w-full">
          {project.images.map((image, index) => (
            <div key={index} className="w-full sm:w-1/2 overflow-hidden">
              <img
                src={image}
                alt={`${project.name} - ${index + 1}`}
                className="w-full rounded-lg object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed text-lg text-center">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
