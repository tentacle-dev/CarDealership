import React, { useState } from 'react';
import CarCard from './CarCard';

const CarListPage = () => {
  const [cars, setCars] = useState([
    // Example data
    {
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      color: 'White',
      kms: 50000,
      vin: '1HGCM82633A123456',
      price: 20000,
      image: 'https://via.placeholder.com/150',
    },
    {
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        color: 'White',
        kms: 50000,
        vin: '1HGCM82633A123456',
        price: 20000,
        image: 'https://via.placeholder.com/150',
      },
      {
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        color: 'White',
        kms: 50000,
        vin: '1HGCM82633A123456',
        price: 20000,
        image: 'https://via.placeholder.com/150',
      },
      {
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        color: 'White',
        kms: 50000,
        vin: '1HGCM82633A123456',
        price: 20000,
        image: 'https://via.placeholder.com/150',
      },
      {
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        color: 'White',
        kms: 50000,
        vin: '1HGCM82633A123456',
        price: 20000,
        image: 'https://via.placeholder.com/150',
      },
      {
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        color: 'White',
        kms: 50000,
        vin: '1HGCM82633A123456',
        price: 20000,
        image: 'https://via.placeholder.com/150',
      },
      {
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        color: 'White',
        kms: 50000,
        vin: '1HGCM82633A123456',
        price: 20000,
        image: 'https://via.placeholder.com/150',
      },
  ]);

  const [filters, setFilters] = useState({ maxPrice: '', maxKms: '' });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredCars = cars.filter((car) => {
    return (
      (filters.maxPrice ? car.price <= filters.maxPrice : true) &&
      (filters.maxKms ? car.kms <= filters.maxKms : true)
    );
  });

  const handleSelectCar = (car) => {
    console.log('Selected car:', car);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Available Cars</h1>
      <div className="flex flex-row-reverse gap-4 mb-6">
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleFilterChange}
          className="input input-bordered w-1/4"
        />
        <input
          type="number"
          name="maxKms"
          placeholder="Max KMs"
          value={filters.maxKms}
          onChange={handleFilterChange}
          className="input input-bordered w-1/4"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {filteredCars.map((car, index) => (
          <CarCard key={index} car={car} onSelect={handleSelectCar} />
        ))}
      </div>
    </div>
  );
};

export default CarListPage;
