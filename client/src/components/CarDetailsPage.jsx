import React from 'react';

const CarDetailsPage = ({ car }) => {
  if (!car) {
    return <div>No car selected</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        {car.make} {car.model} ({car.year})
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-auto" />
        </div>
        <div>
          <p>VIN: {car.vin}</p>
          <p>Color: {car.color}</p>
          <p>KMs: {car.kms}</p>
          <p>Price: ${car.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
