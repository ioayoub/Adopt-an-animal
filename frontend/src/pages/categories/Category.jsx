import { useState } from "react";

import { useParams } from "react-router-dom";
import AnimalCard from "../../components/animals/AnimalCard";
import animals from "../../data/animals.json";

function Category() {
  const { id } = useParams();
  const categoryAnimals = animals.filter(
    (animal) => animal.categoryId === parseInt(id, 10)
  );

  const [currentAnimals, setCurrentAnimals] = useState(categoryAnimals);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setCurrentAnimals(categoryAnimals);

    if (!searchValue) return;
    if (searchValue.length < 2) return;

    setCurrentAnimals(
      currentAnimals.filter((animal) =>
        animal.name.toLowerCase().includes(searchValue)
      )
    );
  };

  return (
    <div className="my-16">
      <h1 className="text-4xl text-center font-bold my-12">
        Discover our animals : {categoryAnimals[0].category.toUpperCase()}
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
      {categoryAnimals.length ? (
        <div className="grid lg:grid-cols-3 gap-8">
          {categoryAnimals.map(({ name, category, image, description }) => (
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
        <p className="text-center text-2xl">
          Great news ! No animals found in this category
        </p>
      )}
    </div>
  );
}

export default Category;
