import { useState } from "react";

import AnimalCard from "../../components/animals/AnimalCard";
import animals from "../../data/animals.json";

function AnimalList() {
  const [currentAnimal, setCurrentAnimal] = useState(animals);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setCurrentAnimal(animals);

    if (!searchValue) return;
    if (searchValue.length < 2) return;

    setCurrentAnimal(
      animals.filter(
        (animal) =>
          animal.name.toLowerCase().includes(searchValue) ||
          animal.category.toLowerCase().includes(searchValue)
      )
    );
  };

  return (
    <div className="my-16">
      <h1 className="text-4xl text-center font-bold my-12">
        Discover all our animals
      </h1>
      <div className="bg-slate-200 p-8 lg:w-2/5 mx-auto my-12">
        <input
          type="text"
          className="bg-white p-2 w-full"
          placeholder="search by name or category"
          value={searchValue}
          onChange={handleSearch}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {currentAnimal.map(({ id, name, category, image, description }) => (
          <AnimalCard
            key={id}
            id={id}
            name={name}
            category={category}
            image={image}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}

export default AnimalList;
