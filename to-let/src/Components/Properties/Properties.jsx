import React from 'react';

// Example property data
const properties = [
  {
    id: 1,
    image: '/images/house1.jpg',
    title: 'Family House Rent',
    bed: 1,
    bath: 1,
    tolet: 'May',
    rent: 12000,
    location: 'Mirpur 1, Mirpur',
  },
  {
    id: 2,
    image: '/images/house2.jpg',
    title: 'Family House Rent',
    bed: 2,
    bath: 2,
    tolet: 'May',
    rent: 13500,
    location: 'Shahjadpur, Gulshan',
  },
  {
    id: 3,
    image: '/images/house3.jpg',
    title: 'Family House Rent',
    bed: 1,
    bath: 1,
    tolet: 'May',
    rent: 11000,
    location: 'Paikpara, Mirpur',
  },
  {
    id: 4,
    image: '/images/house4.jpg',
    title: 'Family House Rent',
    bed: 3,
    bath: 3,
    tolet: 'June',
    rent: 18000,
    location: 'North Badda, Badda',
  },
  {
    id: 5,
    image: '/images/house5.jpg',
    title: 'Bachelor Room Rent',
    bed: 1,
    bath: 1,
    tolet: 'May',
    rent: 7000,
    location: 'Sector 14, Uttara',
  },
  {
    id: 6,
    image: '/images/house6.jpg',
    title: 'Bachelor Room Rent',
    bed: 1,
    bath: 1,
    tolet: 'June',
    rent: 6000,
    location: 'Azampur, Uttara',
  },
  // Add more properties if needed
];

const Properties = () => {
  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Most Demanded Properties
          </h2>
          <p className="text-gray-500 mt-2">
            Discover the top rental choices that tenants are searching for the most!
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition"
            >
              {/* Image */}
              <img
                src={property.image}
                alt={property.title}
                className="h-48 w-full object-cover"
              />

              {/* Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-700 text-sm mb-1">
                  Bed: {property.bed}, Bath: {property.bath}
                </p>
                <p className="text-gray-700 text-sm mb-1 italic">
                  To-let from: {property.tolet}
                </p>
                <p className="text-gray-700 text-sm mb-1">
                  Rent : {property.rent} BDT
                </p>
                <p className="text-gray-600 text-sm">{property.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Properties;
