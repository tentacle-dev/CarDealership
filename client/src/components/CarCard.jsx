import React from 'react';
import { useNavigate } from 'react-router-dom';

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate('/details', { state: { car } });
  };

  return (
    <div className="card w-80 bg-base-100 shadow-md">
      <figure>
        <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">
          {car.make} {car.model}
        </h2>
        <p className="text-sm text-gray-600">
          {car.year} | {car.color} | {car.kms} KMs
        </p>
        <p className="text-sm font-bold text-green-600">${car.price}</p>
        <button 
          className="btn btn-primary mt-2 w-full"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CarCard;
