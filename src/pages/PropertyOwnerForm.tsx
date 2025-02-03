// src/components/PropertyOwner/index.tsx
import React, { useState } from "react";
import Header from "../components/Header";

interface PropertyFormData {
  // Owner Information
  ownerName: string;
  email: string;
  phone: string;

  // Property Details
  propertyAddress: string;
  propertyType: string;
  squareFootage: string;
  yearBuilt: string;

  // Project Details
  renovationType: string[];
  budget: string;
  timeline: string;
  propertyDescription: string;

  // Additional Information
  currentlyVacant: boolean;
  heritageBuilding: boolean;
  additionalNotes: string;
}

export default function PropertyOwnerForm() {
  const [formData, setFormData] = useState<PropertyFormData>({
    ownerName: "",
    email: "",
    phone: "",
    propertyAddress: "",
    propertyType: "",
    squareFootage: "",
    yearBuilt: "",
    renovationType: [],
    budget: "",
    timeline: "",
    propertyDescription: "",
    currentlyVacant: false,
    heritageBuilding: false,
    additionalNotes: "",
  });

  const renovationOptions = [
    "Interior Renovation",
    "Exterior Renovation",
    "Structural Work",
    "Electrical Updates",
    "Plumbing Updates",
    "HVAC Systems",
    "Heritage Restoration",
    "Accessibility Improvements",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      renovationType: prev.renovationType.includes(value)
        ? prev.renovationType.filter((type) => type !== value)
        : [...prev.renovationType, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-[rgb(22,59,141)] mb-2">
              Property Submission Form
            </h1>
            <p className="text-gray-600 mb-8">
              Submit your property details for our student renovation program
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Owner Information Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Owner Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Property Details Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Property Details
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Address
                    </label>
                    <input
                      type="text"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                      required
                    >
                      <option value="">Select type</option>
                      <option value="commercial">Commercial</option>
                      <option value="residential">Residential</option>
                      <option value="mixed-use">Mixed-Use</option>
                      <option value="industrial">Industrial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Square Footage
                    </label>
                    <input
                      type="number"
                      name="squareFootage"
                      value={formData.squareFootage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year Built
                    </label>
                    <input
                      type="number"
                      name="yearBuilt"
                      value={formData.yearBuilt}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Renovation Details Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Renovation Details
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Renovation Needed
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {renovationOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          checked={formData.renovationType.includes(option)}
                          onChange={() => handleCheckboxChange(option)}
                          className="rounded text-[rgb(22,59,141)]"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                      required
                    >
                      <option value="">Select budget</option>
                      <option value="under50k">Under $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="over500k">Over $500,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Desired Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate</option>
                      <option value="3months">Within 3 months</option>
                      <option value="6months">Within 6 months</option>
                      <option value="1year">Within 1 year</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Description
                  </label>
                  <textarea
                    name="propertyDescription"
                    value={formData.propertyDescription}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                    placeholder="Please describe your property and its current condition..."
                    required
                  ></textarea>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Additional Information
                </h2>

                <div className="space-y-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="currentlyVacant"
                      checked={formData.currentlyVacant}
                      onChange={handleInputChange}
                      className="rounded text-[rgb(22,59,141)]"
                    />
                    <span className="text-gray-700">
                      Property is currently vacant
                    </span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="heritageBuilding"
                      checked={formData.heritageBuilding}
                      onChange={handleInputChange}
                      className="rounded text-[rgb(22,59,141)]"
                    />
                    <span className="text-gray-700">
                      This is a heritage building
                    </span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(22,59,141)] outline-none"
                    placeholder="Any additional information you'd like to share..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[rgb(22,59,141)] text-white rounded-md hover:bg-[rgb(32,69,151)] font-semibold transition-all duration-300"
              >
                Submit Property
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
