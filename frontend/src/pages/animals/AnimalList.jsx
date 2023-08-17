import { useState } from "react";

import AnimalCard from "../../components/animals/AnimalCard";
import animals from "../../data/animals.json";

function AnimalList() {
  const [currentAnimal, setCurrentAnimal] = useState(animals);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const currentSearch = e.target.value;

    if (!currentSearch.trim().length) setCurrentAnimal(animals);

    if (currentSearch.trim().length > 0)
      setCurrentAnimal(
        animals.filter((animal) =>
          animal.name.toLowerCase().includes(currentSearch.toLowerCase())
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

      {currentAnimal.length ? (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* TODO fIX THIS */}
          {currentAnimal.map(({ id, name, image, description, category }) => (
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
      ) : (
        <div className="text-center text-2xl font-bold py-16">
          No animal found
        </div>
      )}
    </div>
  );
}

export default AnimalList;
